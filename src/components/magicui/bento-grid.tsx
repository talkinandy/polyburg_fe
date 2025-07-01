import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  name: string;
  className?: string;
  background?: ReactNode;
  icon?: ReactNode;
  description?: string;
  href?: string;
  cta?: string;
  children?: ReactNode;
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        // Mobile-first responsive grid - shorter rows on mobile
        'grid w-full auto-rows-[16rem] grid-cols-1 gap-4',
        // Tablet: taller rows, 2 columns
        'md:auto-rows-[20rem] md:grid-cols-2',
        // Desktop: full height, 3 columns
        'lg:auto-rows-[22rem] lg:grid-cols-3',
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  icon,
  description,
  href,
  cta,
  children,
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      'group relative col-span-3 flex flex-col overflow-hidden rounded-xl',
      // Bloomberg terminal styling
      'bg-terminal-bg border border-terminal-border',
      'hover:border-terminal-primary transition-all duration-300',
      className,
    )}
  >
    {/* Header - Fixed at top */}
    <div className="relative z-20 p-3 md:p-4 pb-2 md:pb-3 flex-shrink-0">
      {icon && (
        <div className="mb-2 text-terminal-primary">
          {icon}
        </div>
      )}
      <h2 className="text-sm md:text-lg font-semibold text-terminal-primary font-mono leading-tight">
        {name}
      </h2>
      <p className="text-xs md:text-sm text-terminal-muted mt-1 leading-snug">{description}</p>
    </div>

    {/* Content area - Takes remaining space */}
    <div className="relative flex-1 min-h-0">
      {children}
    </div>

    {/* CTA - Only show if provided */}
    {href && cta && (
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20">
        <button className="pointer-events-auto px-4 py-2 text-sm font-medium text-terminal-primary border border-terminal-primary rounded hover:bg-terminal-primary hover:text-terminal-bg transition-colors">
          {cta}
        </button>
      </div>
    )}

    {/* Background */}
    {background && (
      <div className="pointer-events-none absolute inset-0 z-0">
        {background}
      </div>
    )}
  </div>
);

export { BentoCard, BentoGrid }; 