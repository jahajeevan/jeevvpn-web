import React from 'react';
import Link from 'next/link';
import { Shield, Github, Globe2, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-[#F7F5EF] pt-16 pb-12 mt-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border-light">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-deep flex items-center justify-center">
                <Shield size={14} className="text-white fill-white/20" strokeWidth={2.4} />
              </div>
              <span className="font-display font-bold text-charcoal text-base">JeevVPN</span>
            </div>
            <p className="text-sm text-charcoal-muted leading-relaxed max-w-sm">
              An independent, self-hosted VPN project engineered for private, unrestricted browsing.
              Zero data-mining, zero third-party brokers, and no commercial subscription traps.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border-light text-xs text-charcoal-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-deep" />
              <span>Dedicated Korea Central Node (20.41.107.22)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-charcoal uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-charcoal-muted hover:text-emerald-deep transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-charcoal-muted hover:text-emerald-deep transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-charcoal-muted hover:text-emerald-deep transition-colors">
                  About & Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Open Source / Tech Details */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-charcoal uppercase tracking-wider">Open Infrastructure</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/jahajeevan/JeevVPN" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-charcoal-muted hover:text-emerald-deep flex items-center gap-1.5 transition-colors"
                >
                  <Github size={14} />
                  <span>JeevVPN Android</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/jahajeevan/jeevvpn-web" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-charcoal-muted hover:text-emerald-deep flex items-center gap-1.5 transition-colors"
                >
                  <Globe2 size={14} />
                  <span>Website Source</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </li>
              <li className="text-xs text-charcoal-faint pt-1">
                Manifest V3 Chromium Extension · TLS 1.3
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted">
          <p>© {new Date().getFullYear()} JeevVPN. Self-hosted personal project by Jahajeevan.</p>
          <p className="text-center sm:text-right text-charcoal-faint">
            Private use only. Not a commercial service. Intended for privacy compliance and legitimate research.
          </p>
        </div>
      </div>
    </footer>
  );
}
