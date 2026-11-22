import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://jeevvpn-web.vercel.app'),
  title: 'JeevVPN — Private Browsing, Your Infrastructure',
  description:
    'Explore JeevVPN, a self-hosted browsing project powered by a Chromium browser extension and private cloud infrastructure.',
  keywords: [
    'JeevVPN',
    'self-hosted browsing',
    'Chromium extension',
    'private cloud infrastructure',
    'Chrome',
    'Edge',
    'Brave',
    'open-source proxy',
  ],
  authors: [{ name: 'Jahajeevan V', url: 'https://jahajeevan.lovable.app' }],
  creator: 'Jahajeevan V',
  openGraph: {
    title: 'JeevVPN — Private Browsing, Your Infrastructure',
    description:
      'Explore JeevVPN, a self-hosted browsing project powered by a Chromium browser extension and private cloud infrastructure.',
    url: 'https://jeevvpn-web.vercel.app',
    siteName: 'JeevVPN',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JeevVPN — Private Browsing, Your Infrastructure',
    description:
      'Explore JeevVPN, a self-hosted browsing project powered by a Chromium browser extension and private cloud infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
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
