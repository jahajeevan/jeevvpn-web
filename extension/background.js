// JeevVPN extension — background service worker.
// Routes all browser traffic through the JeevVPN proxy on connect, and answers
// the proxy's auth challenge INSTANTLY (creds kept in memory) so pages never
// fail while the worker "wakes up".
// Also automatically strips "Alt-Svc" headers so browsers never upgrade to UDP/QUIC,
// ensuring Instagram, YouTube, etc. stay 100% on the VPN tunnel.

const DEFAULTS = {
  host: "20-41-107-22.sslip.io",
  port: 443,
  scheme: "https", // "http" (plain) or "https" (TLS/stealth)
  username: "jeev",
  password: "jeevvpn123",
  connected: false,
};

// in-memory copies so auth can answer synchronously (no async storage read)
let creds = { username: "", password: "" };
let cfg = { ...DEFAULTS };

async function loadAll() {
  const stored = await chrome.storage.local.get(DEFAULTS);
  cfg = { ...DEFAULTS, ...stored };
  creds = { username: cfg.username || "", password: cfg.password || "" };
  return cfg;
}
loadAll();

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local") loadAll();
});

function setBadge(on) {
  chrome.action.setBadgeText({ text: on ? "ON" : "" });
  chrome.action.setBadgeBackgroundColor({ color: "#00b866" });
}

// Keep the worker warm while connected so auth is always ready.
function keepAlive(on) {
  if (on) chrome.alarms.create("jeev-keepalive", { periodInMinutes: 0.5 });
  else chrome.alarms.clear("jeev-keepalive");
}
chrome.alarms.onAlarm.addListener(() => {
  /* firing wakes the worker; no work needed */
});

// Strip "Alt-Svc" header so the browser never switches to UDP (HTTP/3 / QUIC).
// This guarantees sites like Instagram and YouTube route 100% through the TCP tunnel.
async function setBlockQuic(enable) {
  try {
    if (chrome.declarativeNetRequest) {
      if (enable) {
        await chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: [1],
          addRules: [
            {
              id: 1,
              priority: 1,
              action: {
                type: "modifyHeaders",
                responseHeaders: [{ header: "alt-svc", operation: "remove" }],
              },
              condition: {
                urlFilter: "*",
                resourceTypes: [
                  "main_frame",
                  "sub_frame",
                  "stylesheet",
                  "script",
                  "image",
                  "font",
                  "object",
                  "xmlhttprequest",
                  "ping",
                  "media",
                  "websocket",
                  "other",
                ],
              },
            },
          ],
        });
      } else {
        await chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: [1],
        });
      }
    }
  } catch (err) {
    console.error("Failed to update declarativeNetRequest rules:", err);
  }
}

async function applyProxy(wantOn) {
  await loadAll();
  const on = !!(wantOn && cfg.host && cfg.port);

  if (on) {
    await chrome.proxy.settings.set({
      scope: "regular",
      value: {
        mode: "fixed_servers",
        rules: {
          singleProxy: { scheme: cfg.scheme, host: cfg.host, port: Number(cfg.port) },
          bypassList: ["localhost", "127.0.0.1", "<local>"],
        },
      },
    });
  } else {
    await chrome.proxy.settings.clear({ scope: "regular" });
  }

  await setBlockQuic(on);
  await chrome.storage.local.set({ connected: on });
  setBadge(on);
  keepAlive(on);
  return on;
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === "connect") {
    applyProxy(true).then((on) => sendResponse({ ok: true, connected: on }));
    return true;
  }
  if (msg.type === "disconnect") {
    applyProxy(false).then(() => sendResponse({ ok: true, connected: false }));
    return true;
  }
  if (msg.type === "status") {
    loadAll().then(() => sendResponse(cfg));
    return true;
  }
});

// Answer the proxy password prompt — instantly from memory when possible.
chrome.webRequest.onAuthRequired.addListener(
  (details, cb) => {
    if (!details.isProxy) {
      cb({});
      return;
    }
    if (creds.username) {
      cb({ authCredentials: { username: creds.username, password: creds.password } });
      return;
    }
    // cold start: load then answer
    loadAll().then(() =>
      cb(creds.username ? { authCredentials: { username: creds.username, password: creds.password } } : {}),
    );
  },
  { urls: ["<all_urls>"] },
  ["asyncBlocking"],
);

chrome.runtime.onStartup.addListener(() => loadAll().then((c) => applyProxy(c.connected)));
chrome.runtime.onInstalled.addListener(() => loadAll().then((c) => applyProxy(c.connected)));
