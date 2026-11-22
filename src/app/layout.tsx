import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'JeevVPN — Browse like the firewall isn\'t even there.',
  description: 'JeevVPN is an independent, single-tenant private VPN engineered for campus firewall bypass and secure everyday browsing.',
  keywords: ['VPN', 'privacy', 'browser extension', 'self-hosted', 'secure browsing', 'Korea proxy', 'campus firewall bypass'],
  openGraph: {
    title: 'JeevVPN — Premium Self-Hosted VPN',
    description: 'Browse like the firewall isn\'t even there. Built with TLS 1.3 encapsulation and single-tenant Korean infrastructure.',
    url: 'https://jeevvpn-web.vercel.app',
    siteName: 'JeevVPN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JeevVPN',
    description: 'Browse like the firewall isn\'t even there.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ivory-100 text-charcoal font-body antialiased flex flex-col justify-between">
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
