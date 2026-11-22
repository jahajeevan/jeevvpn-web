import React from 'react';
import Link from 'next/link';
import { 
  Shield, 
  Server, 
  Lock, 
  Terminal, 
  ArrowRight, 
  Cpu, 
  Globe2, 
  Layers, 
  AlertTriangle,
  Github
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-28 sm:pt-36 pb-24">
      {/* Ambient background soft glow */}
      <div className="ambient-glow absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* ─────────────────────────────────────────────────────────────
            HEADER & MANIFESTO
           ───────────────────────────────────────────────────────────── */}
        <div className="mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border-light shadow-soft text-xs text-charcoal mb-4">
            <Shield size={13} className="text-emerald-deep" />
            <span className="font-medium">Engineering Manifesto</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-charcoal tracking-tight">
            About JeevVPN
          </h1>
          <p className="text-base sm:text-lg text-charcoal-muted mt-3 leading-relaxed max-w-2xl">
            An independent privacy project engineered to demonstrate that reliable, secure network transit does not require corporate middlemen or privacy compromises.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 1: THE ORIGIN & PROBLEM
           ───────────────────────────────────────────────────────────── */}
        <div className="card-premium p-8 sm:p-12 mb-10 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-deep flex items-center justify-center">
              <Layers size={20} />
            </div>
            <h2 className="font-display font-bold text-2xl text-charcoal">
              Why JeevVPN Was Built
            </h2>
          </div>
          <div className="space-y-4 text-charcoal-secondary text-[15px] leading-relaxed">
            <p>
              Most university campuses and corporate networks operate aggressive Deep Packet Inspection (DPI) appliances. These systems routinely inspect traffic signatures, drop standard VPN protocols (like WireGuard, OpenVPN, and IPsec), and restrict access to essential modern platforms like Instagram, research repositories, and streaming CDNs.
            </p>
            <p>
              Students and researchers typically turn to &quot;free&quot; VPN apps from mobile app stores. Unfortunately, those commercial services frequently harvest user telemetry, log browsing activity, inject advertisements, or sell proxy bandwidth to commercial third-party aggregators.
            </p>
            <p className="font-medium text-charcoal">
              JeevVPN was built as a clean, single-tenant alternative: a lightweight browser extension backed by private cloud infrastructure that you control completely.
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 2: INFRASTRUCTURE REALITY & HONEST TELEMETRY
           ───────────────────────────────────────────────────────────── */}
        <div className="card-premium p-8 sm:p-12 mb-10 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-deep flex items-center justify-center">
              <Server size={20} />
            </div>
            <h2 className="font-display font-bold text-2xl text-charcoal">
              Actual Infrastructure Deployment
            </h2>
          </div>
          
          <div className="space-y-4 text-charcoal-secondary text-[15px] leading-relaxed mb-6">
            <p>
              Commercial VPN providers often boast about having &quot;thousands of global servers&quot; — most of which are cheap virtual IPs or rented third-party VPS nodes with unknown logging practices.
            </p>
            <p>
              In contrast, JeevVPN is completely transparent about its operational reality: we currently maintain <strong>one active production node</strong> provisioned in <strong>Microsoft Azure Korea Central</strong> (Seoul).
            </p>
          </div>

          {/* Infrastructure Spec Sheet */}
          <div className="bg-ivory-100 rounded-2xl p-6 border border-border-light font-mono text-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border-light">
              <span className="text-charcoal-faint">Host Provider</span>
              <span className="text-charcoal font-semibold">Microsoft Azure (Korea Central Zone 1)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border-light">
              <span className="text-charcoal-faint">Deployment Node</span>
              <span className="text-charcoal font-semibold">Seoul Cloud Node · Active</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border-light">
              <span className="text-charcoal-faint">Active Port & Protocol</span>
              <span className="text-charcoal font-semibold">Port 443 · TLS 1.3 Encapsulation</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border-light">
              <span className="text-charcoal-faint">Proxy Core</span>
              <span className="text-charcoal font-semibold">Squid 6.14 (Authenticated Egress)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-border-light">
              <span className="text-charcoal-faint">SSL Certificate</span>
              <span className="text-emerald-deep font-bold">Let&apos;s Encrypt Authority (Verified)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between py-1">
              <span className="text-charcoal-faint">DNS Resolver</span>
              <span className="text-charcoal font-semibold">Private Cloud Virtual DNS (IPv4-First)</span>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 3: HOW THE TUNNEL WORKS (TECHNICAL SPEC)
           ───────────────────────────────────────────────────────────── */}
        <div className="card-premium p-8 sm:p-12 mb-10 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-deep flex items-center justify-center">
              <Cpu size={20} />
            </div>
            <h2 className="font-display font-bold text-2xl text-charcoal">
              How the Tunnel Works
            </h2>
          </div>
          <div className="space-y-4 text-charcoal-secondary text-[15px] leading-relaxed">
            <p>
              When you enable JeevVPN in your browser, traffic undergoes a multi-layer routing process designed to blend into ordinary internet traffic:
            </p>
            <ol className="list-decimal pl-5 space-y-3 pt-2">
              <li>
                <strong>Browser Proxy Rule:</strong> The extension configures Chromium&apos;s native <code className="text-xs bg-ivory-200 px-1.5 py-0.5 rounded text-charcoal">chrome.proxy</code> subsystem to route web traffic securely through an authenticated HTTPS gateway on port 443 (<code className="text-xs bg-ivory-200 px-1.5 py-0.5 rounded text-charcoal">TLS 1.3 / Port 443</code>).
              </li>
              <li>
                <strong>Alt-Svc Dynamic Suppression:</strong> Chromium extensions normally only proxy TCP. Media services like Instagram attempt to break out onto raw UDP/QUIC streams, which trigger campus blocks. The extension dynamically intercepts and strips the <code className="text-xs bg-ivory-200 px-1.5 py-0.5 rounded text-charcoal">Alt-Svc</code> header using declarative net requests, keeping the stream entirely within the TCP tunnel.
              </li>
              <li>
                <strong>TLS Encapsulation:</strong> Packets travel out of your machine wrapped in standard TLS 1.3 encryption on port 443. To local network monitors, this looks identical to regular HTTPS browsing to an enterprise service.
              </li>
              <li>
                <strong>Server Egress:</strong> The Korea node decapsulates the TLS session and proxies requests directly to their destination servers, returning responses cleanly.
              </li>
            </ol>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 4: TRANSPARENT PRIVACY & ETHICS
           ───────────────────────────────────────────────────────────── */}
        <div className="card-premium p-8 sm:p-12 mb-10 bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-deep flex items-center justify-center">
              <Lock size={20} />
            </div>
            <h2 className="font-display font-bold text-2xl text-charcoal">
              Privacy & Data Ethics
            </h2>
          </div>
          <div className="space-y-4 text-charcoal-secondary text-[15px] leading-relaxed">
            <p>
              We do not market hyperbolic claims about &quot;military-grade 100% untraceable dark-web anonymity&quot;. Instead, we offer verifiable technical realities:
            </p>
            <ul className="space-y-2.5 pt-2">
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-deep mt-2 shrink-0" />
                <span><strong>No Analytics on Website:</strong> This website collects zero cookies, contains no Google Analytics, and includes no advertising scripts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-deep mt-2 shrink-0" />
                <span><strong>Single-Tenant Server:</strong> Only trusted members connect to the node, drastically reducing the risk of IP reputation poisoning.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-deep mt-2 shrink-0" />
                <span><strong>Open Source Architecture:</strong> Both the extension code and the web client are maintained in public GitHub repositories for independent peer inspection.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 5: RESPONSIBLE USE DISCLAIMER
           ───────────────────────────────────────────────────────────── */}
        <div className="bg-ivory-200 border border-border-light rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-2.5 text-charcoal font-semibold text-sm mb-3">
            <AlertTriangle size={16} className="text-emerald-deep" />
            <span>Responsible Use & Disclaimer</span>
          </div>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            JeevVPN is an experimental, non-commercial research initiative provided on an &quot;as-is&quot; basis for personal privacy, academic research, and censorship resilience testing. It is not intended for unlawful activities, unauthorized access, or commercial distribution. Users remain solely responsible for compliance with their local telecommunications regulations and terms of service.
          </p>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/downloads"
            className="btn-emerald inline-flex items-center gap-2 px-8 py-3.5 text-sm shadow-emerald"
          >
            <span>Proceed to Downloads</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
