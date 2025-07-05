import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import Terminal from '@/components/magicui/terminal';
import NumberTicker from '@/components/magicui/number-ticker';
import RetroGrid from '@/components/magicui/retro-grid';
import { AnimatedList, TradingActivity, WalletRanking } from '@/components/magicui/animated-list';
import Logo from '@/components/ui/logo';
import ProblemStatement from '@/components/ui/problem-statement';
import EnhancedCTA from '@/components/ui/enhanced-cta';

export default function HomePage() {
  // Demo data for Bloomberg-style displays
  const demoTradingActivity = [
    {
      wallet: '0x42a1...9f3e',
      action: 'BUY' as const,
      amount: 12450,
      market: 'Trump 2024',
      price: 67.5,
      timestamp: new Date(Date.now() - 60000),
    },
    {
      wallet: '0x7b8c...2d1a',
      action: 'SELL' as const,
      amount: 8920,
      market: 'Fed Rate Cut',
      price: 34.2,
      timestamp: new Date(Date.now() - 120000),
    },
    {
      wallet: '0x9e3f...5c4b',
      action: 'BUY' as const,
      amount: 7330,
      market: 'BTC $100k',
      price: 89.1,
      timestamp: new Date(Date.now() - 180000),
    },
  ];

  const demoWalletRankings = [
    {
      rank: 1,
      wallet: '0x42a1...9f3e',
      profit24h: 12450,
      winRate: 84.2,
      totalTrades: 47,
      isActive: true,
    },
    {
      rank: 2,
      wallet: '0x7b8c...2d1a',
      profit24h: 8920,
      winRate: 79.6,
      totalTrades: 33,
    },
    {
      rank: 3,
      wallet: '0x9e3f...5c4b',
      profit24h: 7330,
      winRate: 76.8,
      totalTrades: 28,
    },
  ];

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Polyburg Terminal',
    applicationCategory: 'FinanceApplication',
    description: 'Professional-grade intelligence on Polymarket\'s most profitable traders. Real-time data feeds, AI-powered insights, and actionable signals.',
    url: 'https://polyburg.com',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Organization',
      name: 'Polyburg',
      url: 'https://polyburg.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Polyburg',
      url: 'https://polyburg.com',
    },
    featureList: [
      'Real-time smart wallet tracking',
      'AI-powered trading insights',
      'Polymarket intelligence',
      'Professional trader signals',
    ],
  };

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Polyburg',
    url: 'https://polyburg.com',
    description: 'See what profitable Polymarket wallets are buying before everyone else. AI-powered insights and real-time alerts.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://polyburg.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      
      <main className="min-h-screen bg-terminal-bg text-terminal-primary relative overflow-hidden">
        {/* Retro grid background */}
        <RetroGrid />
        
        {/* Header */}
        <header className="relative z-10 border-b border-terminal-primary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Logo variant="landscape" size="lg" priority />
              <div className="flex items-center space-x-4 font-mono text-sm">
                <span className="text-terminal-success">●</span>
                <span className="text-terminal-muted">LIVE</span>
              </div>
            </div>
          </div>
        </header>
      
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 scanline-effect">
        <div className="text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-mono font-bold glow-text">
            See what smart wallets are buying
            <br />
            <span className="text-terminal-secondary">before everyone else notices</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-terminal-muted">
            Real-time intelligence on Polymarket&apos;s most profitable traders. 
            AI-powered insights. Daily wallet rankings. Actionable signals.
          </p>
          
          {/* Live stats ticker */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center font-mono max-w-2xl mx-auto">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-terminal-success">
                <NumberTicker value={1247} />
              </div>
              <div className="text-xs sm:text-sm text-terminal-muted">Monitored Wallets</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-terminal-primary">
                $<NumberTicker value={2.4} decimalPlaces={1} />M
              </div>
              <div className="text-xs sm:text-sm text-terminal-muted">Daily Volume</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-terminal-secondary">
                <NumberTicker value={87.3} decimalPlaces={1} />%
              </div>
              <div className="text-xs sm:text-sm text-terminal-muted">Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Problem Statement Section - Moved above terminal */}
        <ProblemStatement className="scanline-effect mb-12 sm:mb-16" />

        {/* Bloomberg-style Dashboard with Enhanced CTA Overlay */}
        <div className="relative max-w-7xl mx-auto mb-12 sm:mb-16">
          <BentoGrid className="w-full" data-bento-grid>
          {/* Terminal Interface */}
          <BentoCard
            name="POLYBURG TERMINAL"
            className="col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2"
            description="Live command interface for smart wallet intelligence"
          >
            <div className="h-full p-3 md:p-4 scanline-effect">
              <Terminal className="w-full h-full" />
            </div>
          </BentoCard>

          {/* Live Trading Activity */}
          <BentoCard
            name="LIVE ACTIVITY FEED"
            className="col-span-1 row-span-1 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2"
            description="Real-time smart wallet transactions"
          >
            <div className="h-full p-3 md:p-4 overflow-hidden">
              <AnimatedList delay={3000} className="space-y-1 md:space-y-2">
                {demoTradingActivity.map((activity, idx) => (
                  <TradingActivity key={idx} {...activity} />
                ))}
              </AnimatedList>
            </div>
          </BentoCard>

          {/* Top Performers */}
          <BentoCard
            name="TOP PERFORMERS"
            className="col-span-1 row-span-1 md:col-span-2 lg:col-span-2"
            description="Highest profit wallets in the last 24 hours"
          >
            <div className="h-full p-3 md:p-4 space-y-2 md:space-y-3 overflow-hidden">
              {demoWalletRankings.map((wallet, idx) => (
                <WalletRanking key={idx} {...wallet} />
              ))}
            </div>
          </BentoCard>

          {/* Market Overview */}
          <BentoCard
            name="MARKET OVERVIEW"
            className="col-span-1 row-span-1 md:col-span-1 lg:col-span-1"
            description="Key market metrics and trends"
          >
            <div className="h-full p-3 md:p-4 font-mono text-sm space-y-3 md:space-y-4">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <div className="text-terminal-muted text-xs">TOTAL VOLUME</div>
                  <div className="text-base md:text-lg font-bold text-terminal-primary">
                    $<NumberTicker value={2.4} decimalPlaces={1} />M
                  </div>
                </div>
                <div>
                  <div className="text-terminal-muted text-xs">ACTIVE TRADERS</div>
                  <div className="text-base md:text-lg font-bold text-terminal-secondary">
                    <NumberTicker value={3247} />
                  </div>
                </div>
                <div>
                  <div className="text-terminal-muted text-xs">AVG PROFIT</div>
                  <div className="text-base md:text-lg font-bold text-terminal-success">
                    +<NumberTicker value={12.3} decimalPlaces={1} />%
                  </div>
                </div>
                <div>
                  <div className="text-terminal-muted text-xs">SUCCESS RATE</div>
                  <div className="text-base md:text-lg font-bold text-terminal-primary">
                    <NumberTicker value={76.8} decimalPlaces={1} />%
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>
          </BentoGrid>
          
          {/* Enhanced CTA Overlay */}
          <EnhancedCTA />
        </div>
      </section>

        </main>
    </>
  );
} 