import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'JeevVPN — Browse like the firewall isn\'t even there.',
  description: 'JeevVPN is a self-hosted, privacy-first VPN built for secure everyday browsing. Fast, lightweight, and yours.',
  keywords: ['VPN', 'privacy', 'browser extension', 'self-hosted', 'secure browsing'],
  openGraph: {
    title: 'JeevVPN',
    description: 'Browse like the firewall isn\'t even there.',
    url: 'https://jeevvpn.vercel.app',
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
    <html lang="en" className="dark">
      <body className="min-h-screen bg-surface antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
