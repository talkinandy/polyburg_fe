import type { Metadata, Viewport } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ff9100',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://polyburg.com'),
  title: 'Polyburg Terminal - Smart Wallet Intelligence',
  description: 'See what smart wallets are buying before everyone else notices. Professional-grade intelligence on Polymarket\'s most profitable traders.',
  keywords: ['polymarket', 'prediction markets', 'smart wallets', 'trading signals', 'polyburg', 'crypto trading', 'wallet tracking'],
  authors: [{ name: 'Polyburg Team' }],
  creator: 'Polyburg Team',
  publisher: 'Polyburg',
  applicationName: 'Polyburg Terminal',
  openGraph: {
    siteName: 'Polyburg Terminal',
    title: 'Polyburg Terminal - Smart Wallet Intelligence',
    description: 'See what smart wallets are buying before everyone else notices. Professional-grade intelligence on Polymarket\'s most profitable traders.',
    type: 'website',
    locale: 'en_US',
    url: 'https://polyburg.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Polyburg - Smart Wallet Intelligence for Polymarket',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@polyburg',
    creator: '@polyburg',
    title: 'Polyburg Terminal - Smart Wallet Intelligence',
    description: 'See what smart wallets are buying before everyone else notices. Professional-grade intelligence on Polymarket\'s most profitable traders.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Polyburg - Smart Wallet Intelligence for Polymarket',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  verification: {
    google: 'verification-token-here',
  },
  alternates: {
    canonical: 'https://polyburg.com',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/polyburg-square-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/polyburg-square-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/polyburg-square-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/polyburg-square-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  appleWebApp: {
    title: 'Polyburg Terminal',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${inter.variable} ${spaceMono.variable} font-sans bg-terminal-black text-terminal-green antialiased`}
      >
        {children}
      </body>
    </html>
  );
} 