const FIELDS = ["host", "port", "scheme", "username", "password"];
const DEFAULTS = {
  host: "20-41-107-22.sslip.io",
  port: 443,
  scheme: "https",
  username: "jeev",
  password: "jeevvpn123",
};

async function load() {
  const cfg = await chrome.storage.local.get(DEFAULTS);
  FIELDS.forEach((k) => {
    const el = document.getElementById(k);
    if (el) el.value = cfg[k] ?? DEFAULTS[k];
  });
}

document.getElementById("loadPreset").addEventListener("click", () => {
  FIELDS.forEach((k) => {
    const el = document.getElementById(k);
    if (el) el.value = DEFAULTS[k];
  });
  const s = document.getElementById("saved");
  s.textContent = "Preset Loaded ✓";
  s.classList.add("show");
  setTimeout(() => { s.classList.remove("show"); }, 1500);
});

document.getElementById("save").addEventListener("click", async () => {
  const obj = {};
  FIELDS.forEach((k) => {
    const el = document.getElementById(k);
    if (el) obj[k] = el.value.trim();
  });
  obj.port = Number(obj.port) || 443;
  await chrome.storage.local.set(obj);
  
  const s = document.getElementById("saved");
  s.textContent = "Saved Successfully ✓";
  s.classList.add("show");
  setTimeout(() => { s.classList.remove("show"); }, 1600);
});

load();
