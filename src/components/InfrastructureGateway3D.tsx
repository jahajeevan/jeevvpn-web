'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Cpu, 
  Globe2, 
  Chrome, 
  Server,
  Zap,
  Activity
} from 'lucide-react';

export default function InfrastructureGateway3D() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-[560px] mx-auto select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background volumetric glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full -z-10 pointer-events-none transition-opacity duration-700 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(11, 100, 58, 0.08) 50%, transparent 75%)',
          opacity: isHovered ? 1 : 0.75,
        }}
      />

      {/* Main Perspective Container */}
      <div className="relative w-full aspect-[4/3.4] flex items-center justify-center">
        
        {/* SVG Isometric Infrastructure Scene */}
        <svg 
          viewBox="0 0 540 440" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_20px_40px_rgba(18,21,26,0.06)]"
        >
          <defs>
            {/* Gradients for Gateway Prism */}
            <linearGradient id="prismTop" x1="270" y1="120" x2="270" y2="185" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#F4F9F5" stopOpacity="0.8" />
            </linearGradient>
            
            <linearGradient id="prismLeft" x1="200" y1="150" x2="270" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B643A" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#063E24" stopOpacity="0.95" />
            </linearGradient>

            <linearGradient id="prismRight" x1="340" y1="150" x2="270" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0F864F" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#08522E" stopOpacity="0.92" />
            </linearGradient>

            {/* Glowing Core Gradient */}
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0B643A" stopOpacity="0" />
            </radialGradient>

            {/* Circuit Grid Gradient */}
            <linearGradient id="gridFade" x1="270" y1="360" x2="270" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B643A" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0B643A" stopOpacity="0" />
            </linearGradient>

            {/* Animated Conduit Gradients */}
            <linearGradient id="flowEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0B643A" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0B643A" stopOpacity="0.2" />
            </linearGradient>

            {/* Soft Shadow Filter */}
            <filter id="softGroundedShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="16" />
              <feOffset dx="0" dy="18" result="offsetblur" />
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.12" />
              </feComponentTransfer>
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ────────────────────────────────────────────────────────
              1. ISOMETRIC BASE GRID & GROUND TRACES
             ──────────────────────────────────────────────────────── */}
          <g opacity="0.85">
            {/* Ground Elliptical Shadow */}
            <ellipse cx="270" cy="330" rx="190" ry="70" fill="url(#gridFade)" />
            
            {/* Concentric Isometric Grid Lines */}
            <ellipse cx="270" cy="320" rx="170" ry="60" stroke="#E2DFD6" strokeWidth="1.2" strokeDasharray="4 6" />
            <ellipse cx="270" cy="320" rx="125" ry="44" stroke="#D1FAE5" strokeWidth="1.4" />
            <ellipse cx="270" cy="320" rx="80" ry="28" stroke="#10B981" strokeWidth="1.6" strokeOpacity="0.4" />

            {/* Radiating Isometric Axis Traces */}
            <line x1="100" y1="320" x2="270" y2="320" stroke="#E2DFD6" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="270" y1="320" x2="440" y2="320" stroke="#E2DFD6" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="270" y1="260" x2="270" y2="380" stroke="#E2DFD6" strokeWidth="1" strokeDasharray="3 3" />
          </g>

          {/* ────────────────────────────────────────────────────────
              2. ACTIVE NETWORK PATHWAYS (DATA CONDUITS)
             ──────────────────────────────────────────────────────── */}
          {/* Left Ingress Conduit: Client -> Central Gateway */}
          <path 
            d="M 120 230 C 180 230, 200 240, 240 235" 
            stroke="#CBD5E1" 
            strokeWidth="2.5" 
            fill="none" 
            strokeLinecap="round"
          />
          <path 
            d="M 120 230 C 180 230, 200 240, 240 235" 
            stroke="#10B981" 
            strokeWidth="3" 
            fill="none" 
            strokeDasharray="14 40" 
            strokeLinecap="round"
            className="animate-[dash_3s_linear_infinite]"
          />

          {/* Right Egress Conduit: Central Gateway -> Internet */}
          <path 
            d="M 300 235 C 340 240, 360 230, 420 230" 
            stroke="#CBD5E1" 
            strokeWidth="2.5" 
            fill="none" 
            strokeLinecap="round"
          />
          <path 
            d="M 300 235 C 340 240, 360 230, 420 230" 
            stroke="#10B981" 
            strokeWidth="3" 
            fill="none" 
            strokeDasharray="14 40" 
            strokeDashoffset="25"
            strokeLinecap="round"
            className="animate-[dash_3s_linear_infinite]"
          />

          {/* Vertical Gateway Energy Pillars */}
          <line x1="270" y1="70" x2="270" y2="135" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
          <line x1="270" y1="275" x2="270" y2="320" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />

          {/* ────────────────────────────────────────────────────────
              3. 3D CENTRAL GLASS GATEWAY PRISM (ISOMETRIC NODE)
             ──────────────────────────────────────────────────────── */}
          {/* Ambient Core Glow beneath Prism */}
          <circle cx="270" cy="205" r="60" fill="url(#coreGlow)" />

          {/* Lower Floating Ground Ring */}
          <ellipse cx="270" cy="255" rx="55" ry="20" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.7" fill="none" />

          {/* Left Facet (Deep Shaded Glass) */}
          <polygon 
            points="270,205 200,165 200,240 270,280" 
            fill="url(#prismLeft)"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1"
          />

          {/* Right Facet (Emerald Translucent Glass) */}
          <polygon 
            points="270,205 340,165 340,240 270,280" 
            fill="url(#prismRight)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="1"
          />

          {/* Top Facet (Frosted Refractive Glass) */}
          <polygon 
            points="270,130 340,165 270,205 200,165" 
            fill="url(#prismTop)"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.5"
          />

          {/* Specular Highlight Ribs on Top Facet */}
          <line x1="270" y1="130" x2="270" y2="205" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.8" />
          <line x1="200" y1="165" x2="340" y2="165" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" />

          {/* Inner Glowing Emerald Core Crystal */}
          <g transform="translate(0, -3)">
            <polygon points="270,188 288,198 270,208 252,198" fill="#6EE7B7" opacity="0.95" />
            <polygon points="252,198 270,208 270,224 252,214" fill="#0B643A" opacity="0.9" />
            <polygon points="270,208 288,198 288,214 270,224" fill="#10B981" opacity="0.9" />
          </g>

          {/* Upper Floating Orbit Ring with Data Node */}
          <ellipse 
            cx="270" 
            cy="150" 
            rx="75" 
            ry="26" 
            stroke="#10B981" 
            strokeWidth="1.5" 
            strokeDasharray="6 8" 
            strokeOpacity="0.5" 
            fill="none" 
          />
          {/* Orbiting Satellite Node */}
          <circle cx="342" cy="153" r="5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="198" cy="147" r="4" fill="#0B643A" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Connection Sparkles / Optic Pins */}
          <circle cx="270" cy="70" r="4.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="270" cy="320" r="4.5" fill="#0B643A" stroke="#FFFFFF" strokeWidth="2" />
        </svg>

        {/* ────────────────────────────────────────────────────────
            4. FLOATING GLASS-UI OVERLAY CARDS (HTML/TAILWIND)
           ──────────────────────────────────────────────────────── */}

        {/* Card A: Top-Left — Browser Egress Client Node */}
        <div 
          className="absolute -top-1 left-2 sm:left-4 bg-white/95 backdrop-blur-md border border-border-light rounded-2xl p-3.5 shadow-medium transition-transform duration-500 hover:-translate-y-1 w-[205px]"
          style={{
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          }}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-light/70">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-deep flex items-center justify-center">
                <Chrome size={12} />
              </div>
              <span className="text-[11px] font-semibold text-charcoal">Chromium Client</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
              MV3
            </span>
          </div>
          
          <div className="space-y-1 text-[10px] font-mono text-charcoal-muted">
            <div className="flex justify-between items-center">
              <span>Tunnel Port</span>
              <span className="text-charcoal font-semibold">443 (HTTPS)</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Alt-Svc Policy</span>
              <span className="text-emerald-deep font-semibold">Suppressed</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Local Daemon</span>
              <span className="text-charcoal font-semibold">Zero Root</span>
            </div>
          </div>
        </div>

        {/* Card B: Bottom-Right — Seoul Cloud Gateway Telemetry */}
        <div 
          className="absolute -bottom-2 right-2 sm:right-4 bg-white/95 backdrop-blur-md border border-border-light rounded-2xl p-3.5 shadow-medium transition-transform duration-500 hover:-translate-y-1 w-[215px]"
          style={{
            transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          }}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-light/70">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-deep" />
              </span>
              <span className="text-[11px] font-semibold text-charcoal">Seoul Cloud Node</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-ivory-200 text-charcoal-secondary font-medium">
              Zone 1
            </span>
          </div>

          <div className="space-y-1 text-[10px] font-mono text-charcoal-muted">
            <div className="flex justify-between items-center">
              <span>Node Region</span>
              <span className="text-charcoal font-semibold">South Korea</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Encryption</span>
              <span className="text-emerald-deep font-semibold">TLS 1.3 Verified</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Infrastructure</span>
              <span className="text-charcoal font-semibold">Single Server</span>
            </div>
          </div>
        </div>

        {/* Card C: Floating Protocol Badge (Top-Right) */}
        <div className="absolute top-6 right-6 hidden sm:flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-border-light shadow-soft text-[11px] text-charcoal font-medium">
          <Lock size={12} className="text-emerald-deep" />
          <span>Encapsulated Tunnel</span>
        </div>

        {/* Card D: Floating Platform Pill (Bottom-Left) */}
        <div className="absolute bottom-6 left-6 hidden sm:flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-border-light shadow-soft text-[11px] text-charcoal font-medium">
          <Server size={12} className="text-emerald-deep" />
          <span>Private Cloud Transit</span>
        </div>

      </div>
    </div>
  );
}
