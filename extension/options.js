const FIELDS = ["host", "port", "scheme", "username", "password"];
const DEFAULTS = { host: "52.140.121.205", port: 8443, scheme: "http", username: "", password: "" };

async function load() {
  const cfg = await chrome.storage.local.get(DEFAULTS);
  FIELDS.forEach((k) => {
    document.getElementById(k).value = cfg[k] ?? DEFAULTS[k];
  });
}

document.getElementById("save").addEventListener("click", async () => {
  const obj = {};
  FIELDS.forEach((k) => (obj[k] = document.getElementById(k).value.trim()));
  obj.port = Number(obj.port) || 8443;
  await chrome.storage.local.set(obj);
  const s = document.getElementById("saved");
  s.textContent = "Saved ✓";
  setTimeout(() => (s.textContent = ""), 1500);
});

load();
