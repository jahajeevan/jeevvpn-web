import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Cpu, 
  Check, 
  Terminal, 
  Sparkles, 
  Server,
  Chrome,
  Compass,
  FileCheck2,
  Sliders,
  Globe2,
  Layers,
  Shield,
  HelpCircle
} from 'lucide-react';
import InfrastructureGateway3D from '@/components/InfrastructureGateway3D';
import ConnectionArchitectureVisual from '@/components/ConnectionArchitectureVisual';

export default function HomePage() {
  return (
    <div className="relative min-h-screen pt-28 sm:pt-36">
      {/* Ambient background soft glow */}
      <div className="ambient-glow absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] -z-10 pointer-events-none" />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
         ───────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Product Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Status / Infrastructure Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-border-light shadow-soft text-xs text-charcoal">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-deep" />
              </span>
              <span className="font-medium text-charcoal">Seoul, South Korea</span>
              <span className="text-charcoal-faint">·</span>
              <span className="text-emerald-deep font-semibold">Single Server</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[66px] leading-[1.08] text-charcoal tracking-tight">
                Your browser. <br className="hidden sm:inline" />
                Your connection. <br className="hidden sm:inline" />
                <span className="relative inline-block text-emerald-deep">
                  Your control.
                  <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-2.5 sm:h-3 bg-mint-subtle -z-10 rounded-sm opacity-70" />
                </span>
              </h1>
              <p className="font-display font-medium text-lg sm:text-xl text-emerald-deep">
                A self-hosted browsing experience.
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-charcoal-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              JeevVPN connects your supported Chromium browser to privately managed cloud infrastructure through a dedicated browser extension.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link 
                href="/downloads" 
                className="btn-emerald w-full sm:w-auto px-7 py-3.5 text-[15px] flex items-center justify-center gap-2.5 shadow-emerald group"
              >
                <span>Get JeevVPN</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link 
                href="#how-it-works" 
                className="btn-secondary w-full sm:w-auto px-6 py-3.5 text-[15px] flex items-center justify-center gap-2"
              >
                <Compass size={16} className="text-charcoal-muted" />
                <span>Explore How It Works</span>
              </Link>
            </div>

            {/* Browser Support Pills */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-charcoal-muted font-medium">
              <span className="text-charcoal-faint font-normal">Supported browsers:</span>
              <div className="flex items-center gap-1.5">
                <Chrome size={14} className="text-charcoal" />
                <span>Chrome</span>
              </div>
              <span className="text-charcoal-faint">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-charcoal">Edge</span>
              </div>
              <span className="text-charcoal-faint">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-charcoal">Brave</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Technical Cloud Gateway Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <InfrastructureGateway3D />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. HOW JEEVPN WORKS (CONNECTION ARCHITECTURE)
         ───────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-[#F5F4EE]/60 border-y border-border-light relative scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-light shadow-soft text-xs text-charcoal mb-4">
              <Layers size={13} className="text-emerald-deep" />
              <span className="font-medium">Technical Flow</span>
              <span className="text-charcoal-faint">·</span>
              <span className="text-emerald-deep font-semibold">End-to-End Pipeline</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight">
              How JeevVPN Works
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted mt-3 leading-relaxed">
              Traffic travels directly from your browser to your private cloud node. No shared VPN pools, no third-party telemetry, and no root daemon overhead.
            </p>
          </div>

          {/* Visual Architecture Flow Component */}
          <ConnectionArchitectureVisual />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CORE PRODUCT FEATURES (BENTO GRID)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-emerald-deep uppercase tracking-wider mb-2">
            Engineered For Control
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight">
            Designed for privacy, built for performance.
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base mt-3 leading-relaxed">
            Every layer of JeevVPN is optimized for lightweight operation, reliable encryption, and transparent infrastructure.
          </p>
        </div>

        {/* Varied Layout Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Bento Item 1: Large Feature (Span 2) */}
          <div className="card-premium p-8 sm:p-10 md:col-span-2 flex flex-col justify-between relative overflow-hidden bg-white">
            <div className="max-w-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-deep flex items-center justify-center shadow-sm">
                <Server size={22} />
              </div>
              <h3 className="font-display font-bold text-2xl text-charcoal tracking-tight">
                Single-Tenant Private Tunnel
              </h3>
              <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
                Commercial VPN providers pack thousands of anonymous users onto shared IP pools, leading to degraded speeds and frequent IP blacklisting. JeevVPN routes your traffic exclusively through a private, single-tenant cloud node.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border-light grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-charcoal-secondary">
              <div>
                <span className="text-charcoal-faint block text-[11px]">Allocation</span>
                <span className="font-semibold text-charcoal">Dedicated VM</span>
              </div>
              <div>
                <span className="text-charcoal-faint block text-[11px]">Bandwidth</span>
                <span className="font-semibold text-charcoal">Unthrottled</span>
              </div>
              <div>
                <span className="text-charcoal-faint block text-[11px]">IP Cleanliness</span>
                <span className="font-semibold text-emerald-deep">High Reputation</span>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Zero Root Daemons */}
          <div className="card-premium p-8 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-ivory-200 text-charcoal flex items-center justify-center">
                <Cpu size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal tracking-tight">
                Zero Root Daemons
              </h3>
              <p className="text-charcoal-muted text-sm leading-relaxed">
                No virtual network adapters (TUN/TAP), kernel extensions, or system-level background processes. Operates entirely within standard Chromium user space.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between text-xs font-mono text-charcoal-secondary">
              <span>Package Size</span>
              <span className="font-bold text-charcoal">~16 KB</span>
            </div>
          </div>

          {/* Bento Item 3: Alt-Svc Dynamic Suppression */}
          <div className="card-premium p-8 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-deep flex items-center justify-center">
                <Sliders size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal tracking-tight">
                Alt-Svc Header Filtering
              </h3>
              <p className="text-charcoal-muted text-sm leading-relaxed">
                Media platforms advertise HTTP/3 (QUIC) over raw UDP. On restrictive Wi-Fi networks that drop UDP, this halts loading. JeevVPN suppresses Alt-Svc headers to ensure unbroken TCP streaming.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between text-xs font-mono text-charcoal-secondary">
              <span>Rule Engine</span>
              <span className="font-bold text-emerald-deep">Declarative Net Request</span>
            </div>
          </div>

          {/* Bento Item 4: TLS 1.3 Port 443 Ingress */}
          <div className="card-premium p-8 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-ivory-200 text-charcoal flex items-center justify-center">
                <Lock size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal tracking-tight">
                Standard HTTPS Port 443
              </h3>
              <p className="text-charcoal-muted text-sm leading-relaxed">
                Non-standard ports (like 8080, 8443, or 1194) are frequently blocked by network firewalls. JeevVPN encapsulates sessions in TLS 1.3 over standard HTTPS port 443.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between text-xs font-mono text-charcoal-secondary">
              <span>Certificate</span>
              <span className="font-bold text-charcoal">Let&apos;s Encrypt CA</span>
            </div>
          </div>

          {/* Bento Item 5: Transparent Privacy */}
          <div className="card-premium p-8 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-deep flex items-center justify-center">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal tracking-tight">
                Transparent Privacy
              </h3>
              <p className="text-charcoal-muted text-sm leading-relaxed">
                Zero tracking cookies, zero marketing analytics scripts, and zero commercial data brokering. Your browsing data remains strictly between your browser and your private server.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between text-xs font-mono text-charcoal-secondary">
              <span>Telemetry</span>
              <span className="font-bold text-emerald-deep">Zero Trackers</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. SUPPORTED BROWSERS
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#F5F4EE]/50 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold text-emerald-deep uppercase tracking-wider mb-2">
              Cross-Browser Compatibility
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight">
              Built for your preferred browser.
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base mt-2">
              Runs natively on all modern Chromium-based browsers with full Manifest V3 compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chrome */}
            <div className="card-premium p-8 bg-white text-center sm:text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-ivory-200 text-charcoal flex items-center justify-center mb-5 mx-auto sm:mx-0">
                  <Chrome size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal mb-2">
                  Google Chrome
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Full compatibility with Chrome 116+ via native Proxy and DeclarativeNetRequest APIs. Lightweight and efficient.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between text-xs font-mono text-charcoal-secondary">
                <span>Status</span>
                <span className="text-emerald-deep font-semibold">Fully Supported ✓</span>
              </div>
            </div>

            {/* Edge */}
            <div className="card-premium p-8 bg-white text-center sm:text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-ivory-200 text-charcoal flex items-center justify-center mb-5 mx-auto sm:mx-0">
                  <Globe2 size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal mb-2">
                  Microsoft Edge
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Seamlessly loads as an unpacked extension on Windows and macOS. Clean integration with Microsoft Edge sidebar.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between text-xs font-mono text-charcoal-secondary">
                <span>Status</span>
                <span className="text-emerald-deep font-semibold">Fully Supported ✓</span>
              </div>
            </div>

            {/* Brave */}
            <div className="card-premium p-8 bg-white text-center sm:text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-deep flex items-center justify-center mb-5 mx-auto sm:mx-0">
                  <Shield size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal mb-2">
                  Brave Browser
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Pairs seamlessly with Brave Shields. Provides private proxy transit without interfering with built-in ad blocking.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-light flex items-center justify-between text-xs font-mono text-charcoal-secondary">
                <span>Status</span>
                <span className="text-emerald-deep font-semibold">Fully Supported ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. INFRASTRUCTURE OVERVIEW (SEOUL SERVER TELEMETRY)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="card-premium p-8 sm:p-12 bg-white relative overflow-hidden border-border-light shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Infrastructure Description */}
            <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold">
                <Server size={13} />
                <span>Verified Cloud Infrastructure</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
                Seoul Cloud Node Deployment
              </h3>
              <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                We maintain one active production node provisioned in Seoul, South Korea. Unlike commercial providers who market hundreds of fictional server locations, JeevVPN is completely transparent about its actual operational infrastructure.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 text-xs font-mono text-charcoal-secondary">
                <div className="bg-ivory-100 px-3 py-1.5 rounded-lg border border-border-light">
                  Location: Seoul, South Korea
                </div>
                <div className="bg-ivory-100 px-3 py-1.5 rounded-lg border border-border-light">
                  Tunnel Port: 443 (HTTPS)
                </div>
                <div className="bg-ivory-100 px-3 py-1.5 rounded-lg border border-border-light">
                  Protocol: TLS 1.3
                </div>
              </div>
            </div>

            {/* Right Column: Sanitized Server Telemetry Spec Sheet */}
            <div className="lg:col-span-5 bg-ivory-100 p-6 rounded-2xl border border-border-light space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-border-light">
                <span className="text-charcoal-faint">Node Region</span>
                <span className="text-charcoal font-semibold">Seoul, South Korea</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border-light">
                <span className="text-charcoal-faint">Cloud Deployment</span>
                <span className="text-charcoal font-semibold">Single Dedicated Instance</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border-light">
                <span className="text-charcoal-faint">Tunnel Encryption</span>
                <span className="text-emerald-deep font-semibold">TLS 1.3 (Let&apos;s Encrypt)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border-light">
                <span className="text-charcoal-faint">Ingress Gateway</span>
                <span className="text-charcoal font-semibold">Port 443 / Stunnel</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border-light">
                <span className="text-charcoal-faint">Proxy Engine</span>
                <span className="text-charcoal font-semibold">Squid Core (Authenticated)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-charcoal-faint">Node Status</span>
                <span className="text-emerald-deep font-semibold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-deep inline-block" />
                  Active & Operational
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. INSTALLATION STEPS (QUICKSTART)
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#F5F4EE]/60 border-t border-border-light">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-semibold text-emerald-deep uppercase tracking-wider mb-2">
              Simple Installation
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight">
              Ready in under sixty seconds.
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base mt-2">
              No complex installers or system restarts. Load directly into your browser.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="card-premium p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ivory-200 border border-border-light flex items-center justify-center font-mono font-bold text-sm text-charcoal mb-4">
                  01
                </div>
                <h3 className="font-display font-bold text-base text-charcoal mb-2">
                  Download Package
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Download the lightweight JeevVPN extension ZIP archive directly from the downloads page.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="card-premium p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ivory-200 border border-border-light flex items-center justify-center font-mono font-bold text-sm text-charcoal mb-4">
                  02
                </div>
                <h3 className="font-display font-bold text-base text-charcoal mb-2">
                  Extract ZIP
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Extract the downloaded ZIP to a folder on your computer. You will see the extension files.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card-premium p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-ivory-200 border border-border-light flex items-center justify-center font-mono font-bold text-sm text-charcoal mb-4">
                  03
                </div>
                <h3 className="font-display font-bold text-base text-charcoal mb-2">
                  Developer Mode
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Open your browser extensions manager and enable the Developer mode toggle in the top-right.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="card-premium p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-mono font-bold text-sm text-emerald-deep mb-4">
                  04
                </div>
                <h3 className="font-display font-bold text-base text-charcoal mb-2">
                  Load & Connect
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Click &quot;Load unpacked&quot;, choose the folder, and hit Connect from your toolbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FINAL DOWNLOAD CALL TO ACTION
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="card-premium bg-white p-10 sm:p-16 border-border-light shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10" />
          
          <div className="w-14 h-14 rounded-2xl bg-emerald-deep text-white flex items-center justify-center mx-auto mb-6 shadow-emerald">
            <Sparkles size={24} />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-4">
            Take control of your connection.
          </h2>
          <p className="text-charcoal-muted text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Download the JeevVPN extension directly as a lightweight ZIP. Connects to your private cloud infrastructure in under a minute.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/downloads"
              className="btn-emerald px-8 py-3.5 text-base flex items-center gap-2 group shadow-emerald"
            >
              <span>Download Extension</span>
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="btn-secondary px-7 py-3.5 text-base"
            >
              <span>Explore Architecture</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
