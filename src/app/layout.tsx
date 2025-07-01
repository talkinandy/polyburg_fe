import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://polyburg.com'),
  title: 'Polyburg - Smart Wallet Tracking for Polymarket Traders',
  description: 'See what profitable Polymarket wallets are buying before everyone else. AI-powered insights and real-time alerts.',
  keywords: ['polymarket', 'prediction markets', 'smart wallets', 'trading signals', 'polyburg', 'crypto trading', 'wallet tracking'],
  authors: [{ name: 'Polyburg Team' }],
  creator: 'Polyburg Team',
  publisher: 'Polyburg',
  applicationName: 'Polyburg Terminal',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#FF8C00',
  colorScheme: 'dark',
  openGraph: {
    siteName: 'Polyburg',
    title: 'Polyburg - Smart Wallet Tracking for Polymarket Traders',
    description: 'See what profitable Polymarket wallets are buying before everyone else. AI-powered insights and real-time alerts.',
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
    title: 'Polyburg - Smart Wallet Tracking for Polymarket Traders',
    description: 'See what profitable Polymarket wallets are buying before everyone else. AI-powered insights and real-time alerts.',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
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