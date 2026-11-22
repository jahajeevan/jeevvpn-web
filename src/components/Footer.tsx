import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] mt-24">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7BFFC4, #00C46B)' }}>
                <Shield size={14} className="text-ink" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-white text-sm">JeevVPN</span>
            </div>
            <p className="text-white/40 text-xs max-w-xs leading-relaxed">
              A self-hosted, privacy-first VPN project. Built for secure browsing — not for profit.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="flex flex-col gap-2.5">
              <span className="text-white/30 text-xs uppercase tracking-wider font-semibold">Product</span>
              <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">Home</Link>
              <Link href="/downloads" className="text-white/60 hover:text-white text-sm transition-colors">Downloads</Link>
              <Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">About</Link>
            </div>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} JeevVPN. Self-hosted. Private. Yours.</p>
          <p className="text-white/25 text-xs">No logs. No tracking. No ads.</p>
        </div>
      </div>
    </footer>
  );
}
