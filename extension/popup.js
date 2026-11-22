const $ = (id) => document.getElementById(id);
const state = { connected: false, host: "", username: "" };

function render() {
  const on = state.connected;
  $("orb").classList.toggle("on", on);
  $("statusText").textContent = on ? "Protected" : "Not connected";
  $("statusText").classList.toggle("on", on);
  $("hintText").textContent = on ? "Tap to disconnect" : "Tap to connect";
}

async function fetchIp() {
  $("ip").textContent = "…";
  try {
    const r = await fetch("https://api.ipify.org?format=json", { cache: "no-store" });
    const j = await r.json();
    $("ip").textContent = j.ip;
  } catch {
    $("ip").textContent = state.connected ? "check server" : "—";
  }
}

async function refresh() {
  const cfg = await chrome.runtime.sendMessage({ type: "status" });
  state.connected = !!cfg.connected;
  state.host = cfg.host;
  state.username = cfg.username;
  render();
  $("warn").style.display = cfg.host && cfg.username ? "none" : "block";
  fetchIp();
}

$("orb").addEventListener("click", async () => {
  const type = state.connected ? "disconnect" : "connect";
  const res = await chrome.runtime.sendMessage({ type });
  state.connected = !!res.connected;
  render();
  setTimeout(fetchIp, 500);
});

$("gear").addEventListener("click", () => chrome.runtime.openOptionsPage());
$("openOptions").addEventListener("click", (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});

refresh();
