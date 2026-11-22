<div align="center">

# 🛡️ JeevVPN

**High-Performance Stealth Proxy & Privacy Gateway Engineered for Firewall Evasion**

[![Website](https://img.shields.io/badge/Live%20Website-jeevvpn--web.vercel.app-0B643A?style=for-the-badge&logo=vercel&logoColor=white)](https://jeevvpn-web.vercel.app)
[![Extension](https://img.shields.io/badge/Extension-Manifest%20V3%20v1.0.2-12151A?style=for-the-badge&logo=googlechrome&logoColor=white)](https://jeevvpn-web.vercel.app/downloads)
[![Cloud Infrastructure](https://img.shields.io/badge/Node-Azure%20Korea%20Central-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white)](https://jeevvpn-web.vercel.app/about)
[![Security](https://img.shields.io/badge/Security-TLS%201.3%20%7C%20Let's%20Encrypt-059669?style=for-the-badge&logo=letsencrypt&logoColor=white)](https://jeevvpn-web.vercel.app/about)

<br/>

[**Explore Live Website ↗**](https://jeevvpn-web.vercel.app) • [**Download Extension (.ZIP) ↗**](https://jeevvpn-web.vercel.app/downloads) • [**Architecture Details ↗**](https://jeevvpn-web.vercel.app/about)

</div>

---

## ⚡ Overview

**JeevVPN** is a specialized, lightweight privacy platform engineered to overcome institutional firewalls, campus network filters, and Deep Packet Inspection (DPI) systems.

Traditional VPN protocols (WireGuard, OpenVPN, IPsec) are trivially fingerprinted and blocked by modern campus firewalls through UDP port dropping and handshake analysis. JeevVPN bypasses these restrictions by encapsulating authenticated proxy traffic within **legitimate TLS 1.3 tunnels on standard HTTPS port 443**, coupled with an active **Alt-Svc header stripper** in Chromium to prevent leaky UDP/QUIC handshakes.

Accompanied by a bespoke, editorial web portal designed with an **Apple-grade warm ivory and ceramic aesthetic**, JeevVPN provides a seamless client-side experience with zero root system daemons required.

---

## 🏛️ System Architecture & Packet Flow

```
┌────────────────────────────────────────────────────────┐
│                   CLIENT ENVIRONMENT                   │
│   Brave / Google Chrome / Microsoft Edge Browser       │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ JeevVPN Extension (Manifest V3)                  │  │
│  │                                                  │  │
│  │ • declarativeNetRequest: Strip Alt-Svc Headers   │  │
│  │   (Forces HTTP/2 TCP, prevents QUIC/UDP block)   │  │
│  │ • PAC / Chrome Proxy API Route Provider          │  │
│  └────────────────────────┬─────────────────────────┘  │
└───────────────────────────┼────────────────────────────┘
                            │
               TLS 1.3 Encapsulated Traffic
                  Standard HTTPS (Port 443)
              Fully Encrypted & Indistinguishable
                            │
                            ▼
    ┌───────────────────────────────────────────────┐
    │  CAMPUS / INSTITUTIONAL FIREWALL & DPI       │
    │  • Standard UDP/QUIC blocked                  │
    │  • Port 443 HTTPS allowed through ✅           │
    └───────────────────────┬───────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│       SINGLE-TENANT CLOUD GATEWAY (Azure Korea)        │
│       Host: 20-41-107-22.sslip.io (20.41.107.22)       │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ Stunnel 5.72 Ingress (Port 443)                  │  │
│  │ • Authentic Let's Encrypt TLS Certificate        │  │
│  │ • Decapsulates TLS payload                       │  │
│  │ • Forwards plain TCP to loopback 127.0.0.1:8443 │  │
│  └────────────────────────┬─────────────────────────┘  │
│                           │                            │
│  ┌────────────────────────▼─────────────────────────┐  │
│  │ Squid 6.14 Forward Proxy (Port 8443)             │  │
│  │ • Basic Authentication Enforcement (jeev / ****) │  │
│  │ • IPv4-First Resolution via Azure Virtual DNS    │  │
│  │ • Outbound HTTPS CONNECT Tunneling               │  │
│  └────────────────────────┬─────────────────────────┘  │
└───────────────────────────┼────────────────────────────┘
                            │
                            ▼
┌────────────────────────────────────────────────────────┐
│                   GLOBAL INTERNET                      │
│   Instagram • YouTube • GitHub • Restricted Services   │
└────────────────────────────────────────────────────────┘
```

---

## 🚀 Key Engineering Breakthroughs

### 1. Dynamic Alt-Svc Stripping (Solving the QUIC Fallback Leak)
Modern CDNs (Meta, Google, Cloudflare) advertise HTTP/3 over QUIC using `Alt-Svc` response headers. When browsers encounter this, they attempt direct UDP transport. On campus Wi-Fi networks where outbound UDP is systematically dropped, this causes indefinite page loading hangs on platforms like Instagram.
> **Fix**: JeevVPN dynamically strips `Alt-Svc` headers using Manifest V3 `declarativeNetRequest` rules, forcing strictly authenticated TCP HTTP/2 over the encrypted tunnel.

### 2. Port 443 TLS 1.3 Encapsulation via Stunnel
Unlike conventional proxies that listen on arbitrary ports (e.g. `8080`, `3128`, `8443`) which campus firewalls block outright, JeevVPN terminates incoming connections through **Stunnel 5.72 on port 443** with a genuine Let's Encrypt Certificate Authority certificate. To deep-packet inspection engines, all traffic is indistinguishable from standard outbound web browsing.

### 3. Zero-Footprint Client (No Root / No Daemon)
Traditional VPN clients require administrative privileges to install virtual network adapters (TUN/TAP). JeevVPN operates strictly in user space via the Chromium Proxy Settings API, requiring only a ~16 KB extension folder without installing background drivers or persistent system services.

### 4. Single-Tenant Dedicated Azure Korea Infrastructure
Hosted in **Microsoft Azure Korea Central Zone 1** with dedicated hardware isolation, native Azure internal DNS resolver (`168.63.129.16`) integration, and `dns_v4_first on` optimization to eliminate IPv6 resolution latency.

---

## 🎨 UI/UX Design System

The platform was built from scratch following an editorial, luxury-grade design philosophy:

| Attribute | Specification | Design Intent |
|---|---|---|
| **Primary Canvas** | `#FAF9F5` (Warm Ivory) | Eliminates eye-strain, departs from generic dark-mode cliches |
| **Foreground Accent** | `#0B643A` (Rich Emerald) | High-contrast, trustworthy technological emphasis |
| **Typography** | Inter & Space Grotesk | Editorial hierarchy, crisp data legibility |
| **Visual Centerpiece** | 3D Ceramic Shield Component | Bespoke SVG multi-layer specular lighting with floating physics |
| **Extension UI** | Compact 340px Card | Real-time session timer, one-click preset loader, click-to-copy egress IP |

---

## 📂 Project Structure

```
jeevvpn-web/
├── extension/                     # Manifest V3 Browser Extension Source
│   ├── manifest.json              # Extension metadata, permissions & rulesets
│   ├── background.js              # Proxy controller & Alt-Svc header stripper
│   ├── popup.html / popup.js      # Luxury popup control interface
│   ├── options.html / options.js  # Server configuration & one-click preset loader
│   └── icons/                     # Multi-resolution brand shields
├── public/
│   ├── downloads/                 # Pre-built release packages
│   │   └── JeevVPN-extension.zip  # Ready-to-load extension archive
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── page.tsx               # Homepage: Hero, 3D Shield, Bento Grid, Pipeline
│   │   ├── downloads/page.tsx     # Dedicated download hub with 6-step setup guide
│   │   ├── about/page.tsx         # Technical manifesto, architecture & security
│   │   └── layout.tsx             # Root layout with sticky frosted navigation
│   └── components/
│       ├── Navbar.tsx             # Responsive header with live route indicators
│       ├── Footer.tsx             # Minimalist footer with legal & network status
│       └── Shield3D.tsx           # Multi-layered ceramic/titanium 3D shield illustration
├── tailwind.config.js             # Brand token configuration
└── next.config.js                 # Next.js 15 static export configuration
```

---

## 🛠️ Installation & Setup

### Using the Browser Extension

1. Visit [**jeevvpn-web.vercel.app/downloads**](https://jeevvpn-web.vercel.app/downloads) and download `JeevVPN-extension.zip`.
2. Extract the ZIP archive onto your computer.
3. Open your Chromium-based browser (Brave, Google Chrome, or Microsoft Edge):
   - Brave: `brave://extensions`
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
4. Enable **Developer mode** using the toggle switch in the top-right corner.
5. Click **Load unpacked** and select the extracted `extension` directory.
6. Click the **JeevVPN icon** in your toolbar and press **Connect**.

---

## 💻 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Running the Web Platform
```bash
# Clone the repository
git clone https://github.com/jahajeevan/jeevvpn-web.git
cd jeevvpn-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production
```bash
npm run build
```
Generates a static export bundle inside the `out/` directory, optimized for zero-overhead edge deployment on Vercel.

---

## 🔒 Security & Responsible Use

- **Traffic Isolation**: Tunnels are single-tenant and protected with authenticated credentials.
- **Strict Privacy**: Zero tracking scripts, zero user analytics, and zero telemetry collection.
- **Academic & Research Purpose**: Engineered as an academic systems study on packet routing, TLS encapsulation, and firewall bypass methodologies.

---

## 👨‍💻 Author

**Jahajeevan V**
- **Website / Portfolio**: [jahajeevan.github.io](https://jahajeevan.github.io)
- **GitHub**: [@jahajeevan](https://github.com/jahajeevan)
- **Email**: [jahajeevanv@gmail.com](mailto:jahajeevanv@gmail.com)

---

<div align="center">
<sub>Engineered with precision for unconstrained research and seamless connectivity.</sub>
</div>
