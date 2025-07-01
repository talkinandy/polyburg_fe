'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface NumberTickerProps {
  value: number;
  direction?: 'up' | 'down';
  delay?: number;
  className?: string;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
}

export default function NumberTicker({
  value,
  direction,
  delay = 0,
  className,
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const updateCounter = () => {
      if (!ref.current) return;

      const startValue = 0;
      const endValue = value;
      const duration = 2000; // 2 seconds
      const startTime = Date.now() + delay;

      const formatNumber = (num: number) => {
        return prefix + num.toFixed(decimalPlaces) + suffix;
      };

      const updateValue = () => {
        const now = Date.now();
        const elapsed = now - startTime;

        if (elapsed < 0) {
          requestAnimationFrame(updateValue);
          return;
        }

        if (elapsed < duration) {
          const progress = elapsed / duration;
          const easedProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
          const currentValue = startValue + (endValue - startValue) * easedProgress;
          ref.current!.textContent = formatNumber(currentValue);
          requestAnimationFrame(updateValue);
        } else {
          ref.current!.textContent = formatNumber(endValue);
        }
      };

      updateValue();
    };

    updateCounter();
  }, [value, delay, decimalPlaces, prefix, suffix]);

  return (
    <span
      ref={ref}
      className={cn(
        'inline-block tabular-nums tracking-wider font-mono',
        direction === 'up' && 'text-terminal-success',
        direction === 'down' && 'text-terminal-danger',
        !direction && 'text-terminal-primary',
        className,
      )}
      suppressHydrationWarning
    >
      {prefix}0{suffix}
    </span>
  );
} 