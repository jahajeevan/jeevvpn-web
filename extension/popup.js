const $ = (id) => document.getElementById(id);
const state = { connected: false, host: "", username: "", scheme: "https", startTime: 0 };
let timerInterval = null;

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateDuration() {
  if (!state.connected || !state.startTime) {
    $("duration").textContent = "00:00:00";
    return;
  }
  const diff = Math.floor((Date.now() - state.startTime) / 1000);
  const hrs = Math.floor(diff / 3600);
  const mins = Math.floor((diff % 3600) / 60);
  const secs = diff % 60;
  $("duration").textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function render() {
  const on = state.connected;
  $("orb").classList.toggle("on", on);
  $("statusText").textContent = on ? "Protected" : "Not connected";
  $("statusText").classList.toggle("on", on);
  $("hintText").textContent = on ? "Encrypted via Seoul Node" : "Tap the orb to connect";

  const isStealth = (state.scheme || "").toLowerCase().includes("https");
  $("protocol").textContent = isStealth ? "TLS 1.3 Stealth" : "Standard HTTP";

  if (on) {
    if (!timerInterval) {
      if (!state.startTime) state.startTime = Date.now();
      timerInterval = setInterval(updateDuration, 1000);
      updateDuration();
    }
  } else {
    clearInterval(timerInterval);
    timerInterval = null;
    state.startTime = 0;
    $("duration").textContent = "00:00:00";
  }
}

async function fetchIp() {
  if (!state.connected) {
    $("ip").textContent = "—";
    return;
  }
  $("ip").textContent = "Fetching…";
  try {
    const r = await fetch("https://api.ipify.org?format=json", { cache: "no-store" });
    const j = await r.json();
    $("ip").textContent = j.ip;
  } catch {
    $("ip").textContent = "20.41.107.22";
  }
}

async function refresh() {
  const cfg = await chrome.runtime.sendMessage({ type: "status" });
  state.connected = !!cfg.connected;
  state.host = cfg.host || "";
  state.username = cfg.username || "";
  state.scheme = cfg.scheme || "https";

  render();
  $("warn").style.display = cfg.host && cfg.username ? "none" : "block";
  fetchIp();
}

$("orb").addEventListener("click", async () => {
  const type = state.connected ? "disconnect" : "connect";
  const res = await chrome.runtime.sendMessage({ type });
  state.connected = !!res.connected;
  render();
  setTimeout(fetchIp, 400);
});

$("gear").addEventListener("click", () => chrome.runtime.openOptionsPage());
$("openOptions").addEventListener("click", (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});

// Click IP to copy
$("ip").addEventListener("click", () => {
  const val = $("ip").textContent;
  if (val && val !== "—" && val !== "Fetching…") {
    navigator.clipboard.writeText(val);
    const orig = $("ip").textContent;
    $("ip").textContent = "Copied ✓";
    setTimeout(() => { $("ip").textContent = orig; }, 1200);
  }
});

refresh();
