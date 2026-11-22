'use client';

import React from 'react';
import { 
  Chrome, 
  Layers, 
  Server, 
  Globe2, 
  ArrowRight, 
  Lock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const stages = [
  {
    step: '01',
    label: 'Client Browser',
    title: 'Chromium Browser',
    desc: 'You navigate to sites normally in Chrome, Edge, or Brave. Web requests are prepared in user space.',
    badge: 'Chrome · Edge · Brave',
    icon: Chrome,
  },
  {
    step: '02',
    label: 'Local Control',
    title: 'JeevVPN Extension',
    desc: 'Applies proxy rules via Chrome API, dynamically strips Alt-Svc headers to avoid UDP/QUIC drops, and encapsulates traffic.',
    badge: 'Manifest V3 · Zero Root',
    icon: Layers,
  },
  {
    step: '03',
    label: 'Cloud Gateway',
    title: 'Seoul Cloud Server',
    desc: 'Dedicated single instance receives port 443 TLS 1.3 connection, verifies authentication, and manages forward transit.',
    badge: 'Seoul · Single Instance',
    icon: Server,
  },
  {
    step: '04',
    label: 'Destination',
    title: 'Global Internet',
    desc: 'Requests egress to Instagram, YouTube, research portals, and CDNs cleanly through private cloud routing.',
    badge: 'Direct Cloud Egress',
    icon: Globe2,
  },
];

export default function ConnectionArchitectureVisual() {
  return (
    <div className="w-full">
      {/* Visual Pipeline Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isServer = idx === 2;
          return (
            <div 
              key={stage.step}
              className={`relative rounded-2xl p-6 transition-all duration-300 border ${
                isServer 
                  ? 'bg-white border-emerald-500/40 shadow-medium ring-1 ring-emerald-500/20' 
                  : 'bg-white/90 border-border-light shadow-soft hover:shadow-medium'
              }`}
            >
              {/* Step indicator & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold text-charcoal-faint tracking-wider">
                  STAGE {stage.step}
                </span>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  isServer 
                    ? 'bg-emerald-deep text-white shadow-sm' 
                    : 'bg-ivory-200 text-charcoal-secondary border border-border-light'
                }`}>
                  <Icon size={18} />
                </div>
              </div>

              {/* Sub-label & Main Title */}
              <div className="mb-2">
                <p className="text-[11px] font-semibold text-emerald-deep uppercase tracking-wider">
                  {stage.label}
                </p>
                <h3 className="font-display font-bold text-lg text-charcoal">
                  {stage.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-charcoal-muted leading-relaxed mb-4">
                {stage.desc}
              </p>

              {/* Tag Pill */}
              <div className="pt-2 border-t border-border-light/70 flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-ivory-200 text-charcoal-secondary">
                  {stage.badge}
                </span>
                {idx < stages.length - 1 && (
                  <ArrowRight size={13} className="text-charcoal-faint hidden md:block" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Protocol Guarantee Footnote */}
      <div className="mt-4 bg-ivory-200/80 border border-border-light rounded-xl px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-secondary font-mono">
        <div className="flex items-center gap-2">
          <Lock size={13} className="text-emerald-deep shrink-0" />
          <span>Encapsulation Standard: <strong>TLS 1.3 on Standard Port 443</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={13} className="text-emerald-deep shrink-0" />
          <span>Infrastructure Policy: <strong>Single Dedicated Tenant (No Public Pool)</strong></span>
        </div>
      </div>
    </div>
  );
}
