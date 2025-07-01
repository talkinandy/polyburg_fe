import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'square' | 'landscape';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
}

const sizeClasses = {
  square: {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  },
  landscape: {
    sm: 'h-8 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto', 
    xl: 'h-24 w-auto',
  },
};

export default function Logo({
  variant = 'landscape',
  size = 'md',
  className,
  priority = false,
}: LogoProps) {
  const logoSrc = variant === 'square' ? '/polyburg-square.png' : '/polyburg-landscape.png';
  const sizeClass = sizeClasses[variant][size];
  
  return (
    <div className={cn('flex items-center', className)}>
      <Image
        src={logoSrc}
        alt="Polyburg Terminal"
        width={variant === 'square' ? 200 : 600}
        height={200}
        priority={priority}
        className={cn(sizeClass, 'object-contain')}
        sizes={
          variant === 'square' 
            ? '(max-width: 768px) 32px, (max-width: 1200px) 48px, 64px'
            : '(max-width: 768px) 120px, (max-width: 1200px) 180px, 240px'
        }
      />
    </div>
  );
} 