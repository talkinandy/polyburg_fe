'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 1000 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const itemsToShow = useMemo(
      () => childrenArray.slice(0, index + 1).reverse(),
      [index, childrenArray],
    );

    return (
      <div className={cn('flex flex-col items-center gap-4', className)}>
        {itemsToShow.map((item, idx) => (
          <AnimatedListItem key={idx} index={idx}>
            {item}
          </AnimatedListItem>
        ))}
      </div>
    );
  },
);

AnimatedList.displayName = 'AnimatedList';

export function AnimatedListItem({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const animations = [
    'slide-in-from-right-80',
    'slide-in-from-left-80',
    'slide-in-from-top-80',
    'slide-in-from-bottom-80',
  ];

  return (
    <div
      className={cn(
        'mx-auto w-full animate-in',
        animations[index % animations.length],
      )}
    >
      {children}
    </div>
  );
}

// Trading activity item component for Bloomberg-style feeds
interface TradingActivityProps {
  wallet: string;
  action: 'BUY' | 'SELL';
  amount: number;
  market: string;
  price: number;
  timestamp: Date;
}

export function TradingActivity({
  wallet,
  action,
  amount,
  market,
  price,
  timestamp,
}: TradingActivityProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <div className="flex items-center justify-between w-full p-3 rounded border border-terminal-border bg-terminal-bg/50 font-mono text-sm">
      <div className="flex items-center space-x-4">
        <span className="text-terminal-muted text-xs">{formatTime(timestamp)}</span>
        <span
          className={cn(
            'px-2 py-1 rounded text-xs font-bold',
            action === 'BUY'
              ? 'bg-terminal-success/20 text-terminal-success'
              : 'bg-terminal-danger/20 text-terminal-danger',
          )}
        >
          {action}
        </span>
        <span className="text-terminal-secondary">{wallet}</span>
      </div>
      
      <div className="flex items-center space-x-4 text-right">
        <div>
          <div className="text-terminal-primary">${amount.toLocaleString()}</div>
          <div className="text-terminal-muted text-xs">{market}</div>
        </div>
        <div className="text-terminal-secondary">
          @{price.toFixed(2)}¢
        </div>
      </div>
    </div>
  );
}

// Smart wallet ranking item for Bloomberg-style displays
interface WalletRankingProps {
  rank: number;
  wallet: string;
  profit24h: number;
  winRate: number;
  totalTrades: number;
  isActive?: boolean;
}

export function WalletRanking({
  rank,
  wallet,
  profit24h,
  winRate,
  totalTrades,
  isActive = false,
}: WalletRankingProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between w-full p-3 rounded border font-mono text-sm transition-all',
        isActive
          ? 'border-terminal-primary bg-terminal-primary/10'
          : 'border-terminal-border bg-terminal-bg/50',
      )}
    >
      <div className="flex items-center space-x-4">
        <span className="text-terminal-primary w-6 text-center">#{rank}</span>
        <span className="text-terminal-secondary">{wallet}</span>
      </div>
      
      <div className="flex items-center space-x-6 text-right text-xs">
        <div>
          <div className={cn(
            'font-bold',
            profit24h >= 0 ? 'text-terminal-success' : 'text-terminal-danger'
          )}>
            {profit24h >= 0 ? '+' : ''}${profit24h.toLocaleString()}
          </div>
          <div className="text-terminal-muted">24h Profit</div>
        </div>
        <div>
          <div className="text-terminal-primary">{winRate.toFixed(1)}%</div>
          <div className="text-terminal-muted">Win Rate</div>
        </div>
        <div>
          <div className="text-terminal-secondary">{totalTrades}</div>
          <div className="text-terminal-muted">Trades</div>
        </div>
      </div>
    </div>
  );
} 