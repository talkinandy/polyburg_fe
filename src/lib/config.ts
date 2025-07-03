/**
 * Centralized configuration for Polyburg
 * Manages environment variables and provides type-safe access
 */

// Validate required environment variables
const requiredEnvVars = {
  NEXT_PUBLIC_DOMAIN_NAME: process.env.NEXT_PUBLIC_DOMAIN_NAME,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_TELEGRAM_BOT_NAME: process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME,
  NEXT_PUBLIC_TELEGRAM_BOT_URL: process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL,
};

// Check for missing required variables
const missingVars = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0 && process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.warn(`Missing environment variables: ${missingVars.join(', ')}`);
}

export const config = {
  // Domain Configuration
  domain: {
    name: process.env.NEXT_PUBLIC_DOMAIN_NAME || 'https://polyburg.com',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://polyburg.com',
  },
  
  // Telegram Configuration
  telegram: {
    botName: process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME || 'polyburg_bot',
    botUrl: process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL || 'https://t.me/polyburg_bot',
  },
  
  // Social Media Configuration
  social: {
    twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@polyburg',
    companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Polyburg',
  },
  
  // Analytics Configuration
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  },
  
  // Meta Configuration
  meta: {
    title: 'Polyburg Terminal - Smart Wallet Intelligence',
    description: 'See what smart wallets are buying before everyone else notices. Professional-grade intelligence on Polymarket\'s most profitable traders.',
    keywords: ['polymarket', 'prediction markets', 'smart wallets', 'trading signals', 'polyburg', 'crypto trading', 'wallet tracking'] as string[],
    authors: 'Polyburg Team',
  },
};

// Type exports for better TypeScript support
export type Config = typeof config;
export type DomainConfig = typeof config.domain;
export type TelegramConfig = typeof config.telegram;
export type SocialConfig = typeof config.social; 