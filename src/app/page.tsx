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
  FileCheck2
} from 'lucide-react';
import Shield3D from '@/components/Shield3D';

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
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Status / Infrastructure Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-border-light shadow-soft text-xs text-charcoal">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-deep" />
              </span>
              <span className="font-medium">Self-Hosted Korean Infrastructure</span>
              <span className="text-charcoal-faint">·</span>
              <span className="text-emerald-deep font-semibold">Active Node</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] text-charcoal tracking-tight">
              Browse like the <br className="hidden sm:inline" />
              <span className="relative inline-block text-emerald-deep">
                firewall
                <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-2.5 sm:h-3 bg-mint-subtle -z-10 rounded-sm opacity-70" />
              </span>{' '}
              isn&apos;t even there.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-charcoal-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              JeevVPN is an independent, single-tenant private VPN engineered to bypass aggressive campus deep-packet inspection (DPI) and restrictive Wi-Fi filtering through TLS 1.3 encapsulation.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link 
                href="/downloads" 
                className="btn-emerald w-full sm:w-auto px-7 py-3.5 text-[15px] flex items-center justify-center gap-2.5 shadow-emerald group"
              >
                <span>Get the Extension</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link 
                href="#architecture" 
                className="btn-secondary w-full sm:w-auto px-6 py-3.5 text-[15px] flex items-center justify-center gap-2"
              >
                <Compass size={16} className="text-charcoal-muted" />
                <span>How It Works</span>
              </Link>
            </div>

            {/* Browser Support Pills */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-charcoal-muted font-medium">
              <span className="text-charcoal-faint font-normal">Supported on:</span>
              <div className="flex items-center gap-1.5">
                <Chrome size={14} className="text-charcoal" />
                <span>Chrome</span>
              </div>
              <span className="text-charcoal-faint">/</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-charcoal">Edge</span>
              </div>
              <span className="text-charcoal-faint">/</span>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-charcoal">Brave</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original 3D Shield */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Shield3D />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. ARCHITECTURE PIPELINE (VISUAL STORYTELLING)
         ───────────────────────────────────────────────────────────── */}
      <section id="architecture" className="py-20 bg-ivory-200 border-y border-border-light">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold text-emerald-deep uppercase tracking-wider mb-2">
              System Architecture
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight">
              Engineered to disguise, not just encrypt.
            </h2>
            <p className="text-charcoal-muted text-base mt-3 leading-relaxed">
              Standard VPN protocols (OpenVPN, WireGuard) are instantly recognized and dropped by campus and enterprise firewalls. JeevVPN cloaks proxy traffic inside ordinary HTTPS transactions.
            </p>
          </div>

          {/* Pipeline Visual Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Stage 1 */}
            <div className="card-premium p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-ivory-200 border border-border-light flex items-center justify-center text-charcoal font-mono font-bold text-sm mb-5">
                  01
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                  Dynamic Alt-Svc Stripping
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Instagram and YouTube advertise HTTP/3 (QUIC) over raw UDP. The JeevVPN extension intercepts and drops <code className="text-xs bg-ivory-200 px-1.5 py-0.5 rounded text-charcoal">Alt-Svc</code> headers before they trigger blocked UDP packets.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-light flex items-center gap-2 text-xs text-emerald-deep font-medium">
                <Check size={14} />
                <span>Prevents UDP firewall drops</span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="card-premium p-7 flex flex-col justify-between bg-white relative overflow-hidden border-emerald-deep/20 shadow-medium">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-[100%] -z-10" />
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-deep font-mono font-bold text-sm flex items-center justify-center mb-5">
                  02
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                  TLS 1.3 Tunnel on Port 443
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Connections traverse your campus Wi-Fi wrapped in a genuine Let&apos;s Encrypt certificate on standard HTTPS port 443. Deep packet inspection engines view it as ordinary web traffic.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-light flex items-center gap-2 text-xs text-emerald-deep font-semibold">
                <ShieldCheck size={14} />
                <span>20-41-107-22.sslip.io (SSL Verified)</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="card-premium p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-ivory-200 border border-border-light flex items-center justify-center text-charcoal font-mono font-bold text-sm mb-5">
                  03
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                  Korea Central Egress
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Your encrypted stream terminates inside a dedicated Azure virtual machine in Seoul. DNS resolves directly through Azure&apos;s internal resolver (<code className="text-xs bg-ivory-200 px-1.5 py-0.5 rounded text-charcoal">168.63.129.16</code>) to defeat DNS poisoning.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-light flex items-center gap-2 text-xs text-emerald-deep font-medium">
                <Check size={14} />
                <span>Clean, unrestricted transit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. EDITORIAL FEATURE BENTO
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold text-emerald-deep uppercase tracking-wider mb-2">
            The Technology Advantage
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight">
            Built for everyday resilience.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Wide */}
          <div className="md:col-span-8 card-premium p-8 sm:p-10 flex flex-col justify-between">
            <div className="max-w-lg">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-deep flex items-center justify-center mb-6">
                <Zap size={22} strokeWidth={2} />
              </div>
              <h3 className="font-display font-bold text-2xl text-charcoal mb-3">
                No system daemon required.
              </h3>
              <p className="text-charcoal-muted text-[15px] leading-relaxed">
                Most commercial VPNs require administrator privileges, complex kernel network adapters (TUN/TAP), and battery-draining background processes. JeevVPN operates strictly inside your browser environment using standard Chromium proxy primitives.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-6 border-t border-border-light text-xs font-medium text-charcoal">
              <div>
                <span className="text-emerald-deep font-bold block text-sm">~16 KB</span>
                <span className="text-charcoal-muted">Package Footprint</span>
              </div>
              <div>
                <span className="text-emerald-deep font-bold block text-sm">0% CPU</span>
                <span className="text-charcoal-muted">Idle Overhead</span>
              </div>
              <div>
                <span className="text-emerald-deep font-bold block text-sm">No Root</span>
                <span className="text-charcoal-muted">Sandboxed Security</span>
              </div>
            </div>
          </div>

          {/* Card 2: Slim / Tall */}
          <div className="md:col-span-4 card-premium p-8 flex flex-col justify-between bg-[#FCFCFA]">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-ivory-200 text-charcoal flex items-center justify-center mb-6">
                <Lock size={20} strokeWidth={2} />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                Single-Tenant Privacy
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                You are not sharing a server pool with 50,000 strangers whose IP abuse causes constant Cloudflare CAPTCHAs and security lockouts. Your Korea node is private infrastructure.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border-light flex items-center justify-between text-xs text-charcoal-muted">
              <span>Private Tenancy</span>
              <span className="font-mono text-emerald-deep font-semibold">100% Dedicated</span>
            </div>
          </div>

          {/* Card 3: Slim */}
          <div className="md:col-span-4 card-premium p-8 flex flex-col justify-between bg-[#FCFCFA]">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-ivory-200 text-charcoal flex items-center justify-center mb-6">
                <Cpu size={20} strokeWidth={2} />
              </div>
              <h3 className="font-display font-bold text-xl text-charcoal mb-3">
                Transparent Telemetry
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Inspect every line of code. The extension consists of clean vanilla JavaScript without bundling obfuscation, remote scripts, or tracking pixels.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border-light flex items-center justify-between text-xs text-charcoal-muted">
              <span>Third-party Trackers</span>
              <span className="font-mono text-emerald-deep font-semibold">0 Detected</span>
            </div>
          </div>

          {/* Card 4: Wide */}
          <div className="md:col-span-8 card-premium p-8 sm:p-10 flex flex-col justify-between">
            <div className="max-w-lg">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-deep flex items-center justify-center mb-6">
                <Terminal size={22} strokeWidth={2} />
              </div>
              <h3 className="font-display font-bold text-2xl text-charcoal mb-3">
                Authentic Server Telemetry
              </h3>
              <p className="text-charcoal-muted text-[15px] leading-relaxed">
                Direct visibility into your deployment node. Real hardware metrics, verified uptime, and authenticated credentials ensure you know exactly how and where your traffic exits.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border-light font-mono text-xs text-charcoal-secondary flex flex-wrap items-center gap-4">
              <span className="bg-ivory-200 px-2.5 py-1 rounded">OS: Ubuntu 24.04 LTS</span>
              <span className="bg-ivory-200 px-2.5 py-1 rounded">Tunnel: Stunnel 5.72 / TLS 1.3</span>
              <span className="bg-ivory-200 px-2.5 py-1 rounded">Proxy: Squid 6.14</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. LIVE INFRASTRUCTURE HONESTY SECTION
         ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-ivory-200 border-t border-border-light">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="card-premium bg-white p-8 sm:p-12 border-border-light">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold">
                  <Server size={13} />
                  <span>Verified Operational Node</span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal">
                  Korea Central Azure Deployment
                </h3>
                <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
                  We maintain one active production node in Microsoft Azure (Korea Central Zone 1). Unlike commercial providers who falsely claim hundreds of fictional server locations, JeevVPN is completely honest about its active infrastructure footprint.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-charcoal-secondary">
                  <div className="bg-ivory-100 px-3 py-1.5 rounded-lg border border-border-light">
                    Hostname: 20-41-107-22.sslip.io
                  </div>
                  <div className="bg-ivory-100 px-3 py-1.5 rounded-lg border border-border-light">
                    Port: 443 (Stealth TLS)
                  </div>
                </div>
              </div>

              {/* Status Box */}
              <div className="lg:col-span-5 bg-ivory-100 p-6 rounded-2xl border border-border-light space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-border-light">
                  <span className="text-charcoal-faint">Node Region</span>
                  <span className="text-charcoal font-medium">South Korea (Seoul)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border-light">
                  <span className="text-charcoal-faint">Virtual Machine</span>
                  <span className="text-charcoal font-medium">Standard B2ts v2 (2 vCPU)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border-light">
                  <span className="text-charcoal-faint">TLS Certificate</span>
                  <span className="text-emerald-deep font-semibold">Let&apos;s Encrypt (Verified)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-faint">DNS Egress</span>
                  <span className="text-charcoal font-medium">Azure Internal (168.63.129.16)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. FINAL ELEVATED CTA
         ───────────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="card-premium bg-white p-10 sm:p-16 border-border-light shadow-elevated relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -z-10" />
          
          <div className="w-14 h-14 rounded-2xl bg-emerald-deep text-white flex items-center justify-center mx-auto mb-6 shadow-emerald">
            <Sparkles size={24} />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal mb-4">
            Experience unhindered browsing.
          </h2>
          <p className="text-charcoal-muted text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Download the JeevVPN extension directly as a lightweight ZIP. Takes less than sixty seconds to load into your browser.
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
              <span>Read Architecture</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
