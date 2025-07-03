# Environment Configuration

This document explains how to configure environment variables for different deployment environments.

## Overview

The Polyburg application uses environment variables to handle configuration for different environments:
- **Staging**: `https://polyburg.netlify.app` (current)
- **Production**: `https://polyburg.com` (future)

## Quick Setup

### For Local Development (Staging)
1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. The file is already configured for staging with:
   - Domain: `https://polyburg.netlify.app`
   - Telegram Bot: `polyburg_dev_bot`

### For Production Deployment
1. Copy the production example:
   ```bash
   cp .env.production.example .env.production
   ```

2. Update the values for production:
   - Domain: `https://polyburg.com`
   - Telegram Bot: `polyburg_bot`

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_DOMAIN_NAME` | Full domain URL with protocol | `https://polyburg.netlify.app` |
| `NEXT_PUBLIC_SITE_URL` | Same as domain name (for consistency) | `https://polyburg.netlify.app` |
| `NEXT_PUBLIC_TELEGRAM_BOT_NAME` | Telegram bot username | `polyburg_dev_bot` |
| `NEXT_PUBLIC_TELEGRAM_BOT_URL` | Full Telegram bot URL | `https://t.me/polyburg_dev_bot` |

### Optional Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_TWITTER_HANDLE` | Twitter/X handle | `@polyburg` |
| `NEXT_PUBLIC_COMPANY_NAME` | Company name for meta tags | `Polyburg` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible analytics domain | `polyburg.netlify.app` |

## Usage in Code

Environment variables are accessed through the centralized config:

```typescript
import { config } from '@/lib/config';

// Access domain configuration
const siteUrl = config.domain.url;
const domainName = config.domain.name;

// Access Telegram configuration
const botName = config.telegram.botName;
const botUrl = config.telegram.botUrl;

// Access social media configuration
const twitterHandle = config.social.twitterHandle;
const companyName = config.social.companyName;
```

## Deployment Environments

### Netlify (Current Staging)
Environment variables are configured in Netlify dashboard:
1. Go to Site Settings → Environment Variables
2. Add each `NEXT_PUBLIC_*` variable
3. Deploy to apply changes

### Production (Future)
When migrating to production:
1. Update environment variables to production values
2. Change domain from `polyburg.netlify.app` to `polyburg.com`
3. Update Telegram bot from `polyburg_dev_bot` to `polyburg_bot`

## Files Structure

```
.env.local          # Local development (not in git)
.env.example        # Staging template (in git)
.env.production.example  # Production template (in git)
src/lib/config.ts   # Centralized config management
```

## Social Media Impact

These variables automatically configure:
- **Open Graph** meta tags for Facebook, LinkedIn, Discord
- **Twitter Card** meta tags for X/Twitter  
- **Meta tags** for WhatsApp, Telegram link previews
- **Canonical URLs** for SEO

## Security Notes

- ✅ All variables use `NEXT_PUBLIC_` prefix (safe for client-side)
- ✅ No sensitive data (API keys) in these variables
- ✅ `.env.local` is ignored by git
- ✅ Only example files are committed to repository 