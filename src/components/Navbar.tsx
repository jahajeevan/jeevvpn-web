'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { href: '/',          label: 'Home'      },
  { href: '/downloads', label: 'Downloads' },
  { href: '/about',     label: 'About'     },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-5">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7BFFC4, #00C46B)', boxShadow: '0 4px 14px rgba(0,196,107,0.45)' }}>
              <Shield size={16} className="text-ink" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-white text-[15px] tracking-tight">JeevVPN</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-green-core/20 text-green-main border border-green-core/30'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/downloads" className="btn-primary px-5 py-2 text-sm inline-block">
              Get Extension
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/60 hover:text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
            <div className="w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="glass rounded-2xl mt-2 px-4 py-4 flex flex-col gap-1 md:hidden">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  pathname === href
                    ? 'bg-green-core/20 text-green-main'
                    : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-white/[0.07]">
              <Link href="/downloads" onClick={() => setOpen(false)} className="btn-primary px-5 py-2.5 text-sm inline-block w-full text-center">
                Get Extension
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
