import { Shield, Server, Lock, Eye, Heart, Zap, Github } from 'lucide-react';

const sections = [
  {
    icon: Heart,
    color: '#00E27A',
    title: 'What is JeevVPN?',
    body: `JeevVPN is a personal, self-hosted VPN project built for private, reliable everyday browsing. It was created to give a small, trusted group of people access to a fast VPN without relying on commercial providers, third-party apps, or subscription fees.

It is not a product. It is infrastructure — built, maintained and operated by one person, shared with a trusted few.`,
  },
  {
    icon: Server,
    color: '#12D9A8',
    title: 'Self-hosted infrastructure',
    body: `JeevVPN runs on private cloud servers — currently hosted on Microsoft Azure across two regions (India · Pune and Korea Central). There is no shared VPN provider in the middle. Traffic exits directly from the server and goes nowhere else.

The browser extension and the Android app both connect to the same infrastructure. The backend is managed privately and updated independently of this website.`,
  },
  {
    icon: Zap,
    color: '#7BFFC4',
    title: 'How the tunnel works',
    body: `JeevVPN uses the Trojan protocol over TLS on port 443 — the same port as ordinary HTTPS. This makes VPN traffic indistinguishable from regular web traffic to most network inspectors and firewalls.

QUIC (UDP/443) is intentionally blocked so Chrome and other browsers fall back to reliable TCP. IPv6 is disabled in the tunnel to eliminate black-hole routing issues. DNS resolves inside the tunnel through the exit server, so ISP DNS-based blocks do not apply.`,
  },
  {
    icon: Eye,
    color: '#00C46B',
    title: 'Privacy',
    body: `No connection logs are kept. This website collects no analytics, sets no cookies, and uses no third-party tracking scripts.

The Android app previously used email-OTP authentication through a Vercel backend. That authentication flow required an email address — no other personal data was stored. Future versions of the browser extension may use a simpler credential model.`,
  },
  {
    icon: Lock,
    color: '#00E27A',
    title: 'Security',
    body: `All traffic through the tunnel is encrypted end-to-end using TLS 1.3. The server certificate is validated by the client on every connection — a misconfigured or fake server cannot intercept traffic.

Credentials are never stored inside the app binary or the browser extension. The server configuration is private and not published in this repository.`,
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      {/* Aurora */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 40% at 50% 0%, rgba(0,196,107,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 35% at 90% 70%, rgba(18,217,168,0.07) 0%, transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <Shield size={13} className="text-green-main" />
            <span className="text-white/60 text-xs font-medium">About this project</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight leading-tight">
            JeevVPN — built for{' '}
            <span className="text-gradient">privacy by default</span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl">
            A self-hosted, private VPN project. No commercial interests, no data harvesting, no subscriptions.
          </p>
        </div>

        {/* Content sections */}
        <div className="flex flex-col gap-8">
          {sections.map(({ icon: Icon, color, title, body }) => (
            <div key={title} className="glass rounded-2xl p-7 glass-hover">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${color}1A` }}
                >
                  <Icon size={20} style={{ color }} strokeWidth={1.8} />
                </div>
                <h2 className="font-display font-semibold text-white text-xl pt-1.5">{title}</h2>
              </div>
              <div className="pl-14">
                {body.split('\n\n').map((para, i) => (
                  <p key={i} className={`text-white/55 text-sm leading-relaxed ${i > 0 ? 'mt-3' : ''}`}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div
          className="glass rounded-2xl p-6 mt-10"
          style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.025)' }}
        >
          <h3 className="font-display font-semibold text-white/70 text-sm mb-2">Disclaimer</h3>
          <p className="text-white/35 text-xs leading-relaxed">
            JeevVPN is a personal infrastructure project and is not offered as a commercial service. It is not affiliated with any commercial VPN provider. Access is by invitation only. The operators make no warranty of uptime or availability. Use responsibly and in compliance with applicable laws in your region.
          </p>
        </div>

        {/* GitHub link */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/jahajeevan/JeevVPN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 btn-ghost px-7 py-3 text-sm"
          >
            <Github size={16} />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
