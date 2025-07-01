import { cn } from '@/lib/utils';

interface RetroGridProps {
  className?: string;
  angle?: number;
}

export default function RetroGrid({ className, angle = 65 }: RetroGridProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden [perspective:200px]',
        className,
      )}
      style={{
        '--grid-angle': `${angle}deg`,
      } as React.CSSProperties & { '--grid-angle': string }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 140, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 140, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            height: '300vh',
            width: '300vw',
            marginLeft: '-50vw',
            marginTop: '-100vh',
          }}
        />
      </div>

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-terminal-bg via-transparent to-terminal-bg"></div>
    </div>
  );
} 