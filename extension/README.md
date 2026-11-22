# JeevVPN browser extension

One click routes your whole browser through your JeevVPN server. Works in
**Chrome, Edge, and Brave**.

## Install (one time, ~1 minute)

1. **Download & unzip** the JeevVPN extension folder.
2. Open **`chrome://extensions`** (or `edge://extensions` / `brave://extensions`).
3. Turn on **Developer mode** (top-right toggle).
4. Click **Load unpacked** → select the unzipped **`extension`** folder.
5. JeevVPN 🛡️ appears in your toolbar (pin it for easy access).

## Set it up

1. Click the JeevVPN icon → the **⚙ gear** (Settings).
2. Enter what your admin gave you:
   - **Server** — your VM address (e.g. `52.140.121.205`)
   - **Port** — `8443` (or `443` if stealth/TLS is on)
   - **Security** — `Standard (http)` (or `Stealth (https)` if TLS is on)
   - **Username / Password**
3. **Save**, then click the big button to **Connect**. Green = you're private. ✅

The "Your IP" line should change to the **server's IP** when connected — that's how
you know it's working.

## Notes

- Only your **browser** goes through the VPN, not other apps.
- If nothing loads while connected, the server/port is wrong or the VM's proxy
  isn't running — hit the button to disconnect and check Settings.
- For a group, everyone loads the same folder and enters their own username/password.
