'use client';

import React from 'react';

export default function Shield3D() {
  return (
    <div className="relative w-72 h-80 sm:w-80 sm:h-96 flex items-center justify-center select-none perspective-[1000px]">
      {/* Soft diffused ambient floor shadow */}
      <div 
        className="absolute bottom-6 w-52 h-10 rounded-[100%] bg-charcoal/10 blur-xl transform scale-y-50 transition-transform duration-700" 
      />

      {/* Outer ambient glow halo */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-emerald-100/60 blur-3xl -z-10 pointer-events-none"
      />

      {/* Animated Floating Container */}
      <div className="relative animate-float-slow transform-gpu flex items-center justify-center">
        {/* Layer 1: Back shadow silhouette for realistic rim depth */}
        <div className="absolute inset-0 translate-y-3 translate-x-1 blur-md opacity-25">
          <svg viewBox="0 0 240 280" className="w-60 sm:w-68 h-auto fill-charcoal">
            <path d="M120 10 L220 50 C220 160, 160 230, 120 270 C80 230, 20 160, 20 50 Z" />
          </svg>
        </div>

        {/* Layer 2: Main Shield Body with multi-stop lighting gradient */}
        <svg 
          viewBox="0 0 240 280" 
          className="w-60 sm:w-68 h-auto drop-shadow-[0_20px_35px_rgba(11,100,58,0.18)]"
        >
          <defs>
            {/* Smooth outer shield bevel gradient */}
            <linearGradient id="shieldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Inner Emerald Core Metallic Gradient */}
            <linearGradient id="emeraldCore" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="30%" stopColor="#0D7847" />
              <stop offset="75%" stopColor="#0B643A" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>

            {/* Specular Glare / Reflection */}
            <linearGradient id="shieldGlassReflection" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.12" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Center Lock Glow */}
            <radialGradient id="centerGlow" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0B643A" stopOpacity="0" />
            </radialGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Titanium Rim */}
          <path 
            d="M120 12 L216 48 C216 155, 158 226, 120 264 C82 226, 24 155, 24 48 Z" 
            fill="url(#shieldRim)"
          />

          {/* Beveled Edge Highlight */}
          <path 
            d="M120 18 L208 52 C208 152, 154 220, 120 256 C86 220, 32 152, 32 52 Z" 
            fill="#064E3B"
            opacity="0.25"
          />

          {/* Emerald Ceramic Shield Surface */}
          <path 
            d="M120 22 L204 55 C204 148, 152 214, 120 250 C88 214, 36 148, 36 55 Z" 
            fill="url(#emeraldCore)"
          />

          {/* Ambient Lighting Node in Upper Center */}
          <ellipse cx="120" cy="110" rx="55" ry="55" fill="url(#centerGlow)" />

          {/* Diagonal Glass Reflection Curve */}
          <path 
            d="M120 22 L204 55 C204 100, 175 140, 120 170 C70 140, 48 100, 36 55 Z" 
            fill="url(#shieldGlassReflection)" 
          />

          {/* Center Insignia: Clean Minimal Keyhole / Tunnel Port */}
          <g transform="translate(120, 130)">
            {/* Outer ring */}
            <circle cx="0" cy="-6" r="28" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            {/* Active tunnel aperture */}
            <circle cx="0" cy="-6" r="18" fill="#043A23" />
            <circle cx="0" cy="-6" r="8" fill="#34D399" filter="url(#softGlow)" />
            {/* Shackle */}
            <path 
              d="M-8 -14 C-8 -26, 8 -26, 8 -14" 
              fill="none" 
              stroke="#FFFFFF" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
            />
            {/* Status pulse dot */}
            <circle cx="0" cy="-6" r="3" fill="#FFFFFF" />
          </g>

          {/* Refined Ridge Line down center spine */}
          <path 
            d="M120 22 L120 250" 
            stroke="rgba(255,255,255,0.2)" 
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Floating Interactive Telemetry Pill */}
        <div className="absolute -bottom-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-border-light shadow-medium flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-deep" />
          </span>
          <span className="text-xs font-mono font-medium text-charcoal">
            Seoul Cloud Node · Active
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
            TLS 1.3
          </span>
        </div>
      </div>
    </div>
  );
}
