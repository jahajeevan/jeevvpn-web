import React from 'react';
import { 
  Download, 
  Chrome, 
  ShieldCheck, 
  Terminal, 
  HelpCircle, 
  ArrowRight, 
  AlertCircle,
  FileArchive,
  Layers,
  Sparkles,
  KeyRound,
  CheckCircle2
} from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Download the Package',
    desc: 'Grab the JeevVPN extension ZIP file using the download button above. Save it to your Downloads or permanent workspace folder.',
  },
  {
    num: '02',
    title: 'Extract the Archive',
    desc: 'Unzip the archive. You will see a folder named "extension" containing manifest.json, background.js, and toolbar assets.',
  },
  {
    num: '03',
    title: 'Open Extension Manager',
    desc: 'In your browser address bar, navigate to chrome://extensions (or brave://extensions / edge://extensions).',
  },
  {
    num: '04',
    title: 'Enable Developer Mode',
    desc: 'Look for the "Developer mode" toggle switch in the top-right corner of the Extensions dashboard and turn it on.',
  },
  {
    num: '05',
    title: 'Load Unpacked',
    desc: 'Click the "Load unpacked" button in the top-left toolbar and select your unzipped "extension" folder.',
  },
  {
    num: '06',
    title: 'Connect & Browse',
    desc: 'Pin the JeevVPN shield icon to your browser toolbar, open the settings gear, verify the parameters, and hit Connect.',
  },
];

const faqs = [
  {
    q: 'Why is manual installation required?',
    a: 'JeevVPN is a private, self-hosted infrastructure project, not a mass-market commercial product. Loading as an unpacked developer extension allows you to inspect the un-obfuscated source code yourself and avoids corporate Web Store gatekeeping.',
  },
  {
    q: 'Why did Instagram or YouTube fail on my campus Wi-Fi before?',
    a: 'Modern web platforms push HTTP/3 (QUIC) over UDP port 443 by default. Many strict campus firewalls drop or throttle non-TCP traffic. JeevVPN v1.0.2 dynamically strips the Alt-Svc header, keeping all connections on an unbroken TLS 1.3 TCP tunnel.',
  },
  {
    q: 'How do I verify the VPN is active?',
    a: 'Open the extension popup and check the status indicator. When green ("Protected"), visit any IP test site like api.ipify.org or ipleak.net to confirm your public egress IP reflects your Korea Central server (20.41.107.22).',
  },
];

export default function DownloadsPage() {
  return (
    <div className="relative min-h-screen pt-28 sm:pt-36 pb-24">
      {/* Ambient background soft glow */}
      <div className="ambient-glow absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* ─────────────────────────────────────────────────────────────
            HEADER & RELEASE INFO
           ───────────────────────────────────────────────────────────── */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-light shadow-soft text-xs text-charcoal mb-4">
            <Layers size={13} className="text-emerald-deep" />
            <span className="font-medium">Direct Chromium Package</span>
            <span className="text-charcoal-faint">·</span>
            <span className="text-emerald-deep font-semibold">Manifest V3</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-charcoal tracking-tight">
            Download JeevVPN
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted mt-3 leading-relaxed">
            Get the standalone browser extension for Google Chrome, Microsoft Edge, and Brave Browser.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            MAIN DOWNLOAD CARD (PREMIUM PRODUCT PRESENTATION)
           ───────────────────────────────────────────────────────────── */}
        <div className="card-premium p-8 sm:p-12 mb-16 bg-white relative overflow-hidden border-border-light shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Package Metadata & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-deep text-white flex items-center justify-center shadow-emerald">
                  <FileArchive size={24} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl text-charcoal">
                    JeevVPN Extension ZIP
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-charcoal-muted mt-0.5">
                    <span className="font-semibold text-emerald-deep">Version 1.0.2</span>
                    <span>·</span>
                    <span>~16 KB (ZIP)</span>
                    <span>·</span>
                    <span>Signed SHA Verification</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-charcoal-muted leading-relaxed">
                Includes the complete, uncompiled source code, background worker, proxy handler, and toolbar popup. Pre-configured with automatic QUIC suppression for Instagram & streaming platforms.
              </p>

              {/* Direct Download Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="/downloads/JeevVPN-extension.zip"
                  download="JeevVPN-extension.zip"
                  className="btn-emerald px-8 py-4 text-base flex items-center justify-center gap-2.5 shadow-emerald active:scale-98"
                >
                  <Download size={18} strokeWidth={2.4} />
                  <span>Download Extension (ZIP)</span>
                </a>
              </div>

              {/* Integrity & Compatibility Checklist */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-charcoal-muted">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-deep" />
                  <span>Chrome 110+</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-deep" />
                  <span>Brave Browser</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-deep" />
                  <span>Microsoft Edge</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-deep" />
                  <span>No telemetry binaries</span>
                </div>
              </div>
            </div>

            {/* Right: Default Config Preview Card */}
            <div className="lg:col-span-5 bg-ivory-100 p-6 rounded-2xl border border-border-light space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-border-light">
                <span className="text-charcoal font-display font-semibold text-sm">Server Preset (Korea)</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold text-[10px]">PRESET</span>
              </div>
              <div className="space-y-2.5 text-charcoal-secondary">
                <div className="flex justify-between">
                  <span className="text-charcoal-faint">Server Address</span>
                  <span className="text-charcoal font-semibold">20-41-107-22.sslip.io</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-faint">Port</span>
                  <span className="text-charcoal font-semibold">443</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-faint">Security Protocol</span>
                  <span className="text-emerald-deep font-semibold">Stealth (https / TLS)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-faint">Username</span>
                  <span className="text-charcoal font-semibold">jeev</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-faint">Tunnel Encryption</span>
                  <span className="text-charcoal font-semibold">TLS 1.3 (Let&apos;s Encrypt)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            INSTALLATION STEPS
           ───────────────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="max-w-xl mb-10">
            <p className="text-xs font-semibold text-emerald-deep uppercase tracking-wider mb-2">
              Step-by-Step Guide
            </p>
            <h2 className="font-display font-bold text-3xl text-charcoal tracking-tight">
              Six simple steps to complete setup.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="card-premium p-7 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-ivory-200 border border-border-light flex items-center justify-center font-mono font-bold text-sm text-charcoal mb-5">
                    {num}
                  </div>
                  <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            TROUBLESHOOTING & FAQ ACCORDION
           ───────────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-emerald-deep uppercase tracking-wider mb-2">
              Help & Support
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="card-premium p-6 bg-white">
                <h3 className="font-display font-bold text-base text-charcoal mb-2 flex items-start gap-2.5">
                  <HelpCircle size={18} className="text-emerald-deep shrink-0 mt-0.5" />
                  <span>{q}</span>
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed pl-7">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
