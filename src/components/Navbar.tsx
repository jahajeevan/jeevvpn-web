'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, ArrowRight, Menu, X, Download } from 'lucide-react';

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/about',     label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-border-light py-3.5 shadow-soft' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-deep flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Shield size={16} className="text-white fill-white/20" strokeWidth={2.4} />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-charcoal text-[17px] tracking-tight leading-none">
              JeevVPN
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-light px-2 py-1.5 rounded-full border border-border-light shadow-soft">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                  active
                    ? 'bg-ivory-200 text-charcoal shadow-sm font-semibold'
                    : 'text-charcoal-muted hover:text-charcoal hover:bg-ivory-100'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/downloads"
            className="btn-emerald px-5 py-2 text-[13.5px] flex items-center gap-2 group"
          >
            <span>Get Extension</span>
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-charcoal-secondary hover:bg-ivory-200 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-white/98 backdrop-blur-xl border border-border-light rounded-3xl p-6 shadow-elevated transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                    active
                      ? 'bg-ivory-200 text-emerald-deep font-semibold'
                      : 'text-charcoal-secondary hover:bg-ivory-100'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-border-light">
              <Link
                href="/downloads"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-emerald w-full py-3 text-center text-sm flex items-center justify-center gap-2"
              >
                <Download size={16} />
                <span>Download Extension</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
