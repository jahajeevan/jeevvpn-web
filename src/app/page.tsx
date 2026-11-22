import Link from 'next/link';
import { Shield, Zap, Lock, Globe, ArrowRight, Chrome } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Zero logs',
    desc: 'Your traffic is never recorded. What you browse stays between you and the sites you visit.',
    color: '#00E27A',
  },
  {
    icon: Zap,
    title: 'Stealth tunnel',
    desc: 'TLS-on-443 disguises VPN traffic as regular HTTPS, beating deep-packet inspection on most networks.',
    color: '#12D9A8',
  },
  {
    icon: Globe,
    title: 'Self-hosted infrastructure',
    desc: 'JeevVPN runs on our own servers — no third-party VPN provider, no shared infrastructure.',
    color: '#7BFFC4',
  },
  {
    icon: Shield,
    title: 'Browser extension',
    desc: 'Lightweight extension for Chrome, Edge and Brave. Routes browser traffic through the tunnel — no system config needed.',
    color: '#00C46B',
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(0,196,107,0.18) 0%, transparent 60%), radial-gradient(ellipse 55% 40% at 85% 85%, rgba(18,217,168,0.10) 0%, transparent 55%)',
        }}
      />

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-main animate-pulse-slow" />
            <span className="text-white/60 text-xs font-medium">Self-hosted · Private · Open infrastructure</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.08] tracking-tight mb-6">
            Browse like the{' '}
            <span className="text-gradient">firewall isn&apos;t</span>
            <br />
            even there.
          </h1>

          <p className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            JeevVPN is a fast, self-hosted VPN you and your close circle can actually use — private, lightweight, and always yours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/downloads" className="btn-primary px-8 py-3.5 text-base flex items-center gap-2 group">
              Get the Extension
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="/about" className="btn-ghost px-8 py-3.5 text-base">
              Learn more
            </Link>
          </div>

          {/* Browser badges */}
          <div className="mt-8 flex items-center justify-center gap-5 text-white/35 text-xs">
            <div className="flex items-center gap-1.5">
              <Chrome size={13} />
              <span>Chrome</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Chrome size={13} />
              <span>Edge</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Chrome size={13} />
              <span>Brave</span>
            </div>
          </div>
        </div>

        {/* Hero orb visual */}
        <div className="mt-20 flex justify-center">
          <div className="relative">
            {/* Outer glow rings */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0,196,107,0.22) 0%, transparent 70%)',
                transform: 'scale(2.5)',
              }}
            />
            <div
              className="absolute inset-0 rounded-full border border-green-core/20 animate-pulse-slow"
              style={{ transform: 'scale(1.9)' }}
            />
            <div
              className="absolute inset-0 rounded-full border border-green-core/10"
              style={{ transform: 'scale(1.5)' }}
            />
            {/* Core orb */}
            <div
              className="relative w-32 h-32 rounded-full flex items-center justify-center animate-float"
              style={{
                background: 'linear-gradient(135deg, #00E27A 0%, #00C46B 50%, #00934F 100%)',
                boxShadow: '0 0 60px rgba(0,196,107,0.55), 0 0 120px rgba(0,196,107,0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
              }}
            >
              <Shield size={48} className="text-ink" strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-3">
              Built different, by design
            </h2>
            <p className="text-white/45 text-base max-w-xl mx-auto">
              Every decision in JeevVPN prioritises your privacy and reliability over convenience shortcuts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${color}1A` }}
                >
                  <Icon size={22} style={{ color }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base mb-1.5">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommended usage banner ── */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-3xl">
          <div
            className="glass rounded-2xl p-7 flex flex-col sm:flex-row gap-5 items-start"
            style={{ borderColor: 'rgba(18,217,168,0.15)' }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(18,217,168,0.14)' }}
            >
              <Zap size={22} style={{ color: '#12D9A8' }} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white text-base mb-2">Recommended usage</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                JeevVPN is tuned for secure browsing, social media, messaging and everyday use. For the best experience, go easy on heavy-bandwidth activities like large downloads or competitive gaming — the shared infrastructure is optimised for reliability, not raw throughput.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA section ── */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <div
            className="glass rounded-3xl px-8 py-14"
            style={{
              background: 'linear-gradient(135deg, rgba(0,196,107,0.08) 0%, rgba(18,217,168,0.04) 100%)',
              borderColor: 'rgba(0,196,107,0.15)',
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'linear-gradient(135deg, #7BFFC4, #00C46B)', boxShadow: '0 6px 20px rgba(0,196,107,0.4)' }}
            >
              <Shield size={28} className="text-ink" strokeWidth={2} />
            </div>
            <h2 className="font-display font-bold text-3xl text-white mb-3">
              Ready to browse freely?
            </h2>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              Install the browser extension in under a minute. Works on Chrome, Edge and Brave.
            </p>
            <Link href="/downloads" className="btn-primary px-10 py-3.5 text-base inline-flex items-center gap-2 group">
              Download Now
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
