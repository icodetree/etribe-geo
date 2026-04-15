import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'primary' | 'ghost' | 'outline';

export function CTAButton({
  children,
  href = '#cta',
  variant = 'primary',
  icon = true,
  size = 'lg',
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  icon?: boolean;
  size?: 'md' | 'lg';
}) {
  const base =
    'group relative inline-flex items-center gap-3 rounded-full font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';

  const sizing = size === 'lg' ? 'px-7 py-4 text-[15px]' : 'px-5 py-3 text-sm';

  const theme: Record<Variant, string> = {
    primary:
      'bg-brand-500 text-white hover:bg-brand-600 shadow-[0_20px_60px_-20px_rgba(229,38,44,0.6)]',
    ghost:
      'bg-white/5 text-white hover:bg-white/10 ring-1 ring-white/10 backdrop-blur-xl',
    outline:
      'bg-transparent text-white ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/[0.03]',
  };

  const iconBg: Record<Variant, string> = {
    primary: 'bg-white/15 group-hover:bg-white/20',
    ghost: 'bg-white/10 group-hover:bg-white/15',
    outline: 'bg-white/5 group-hover:bg-white/10',
  };

  return (
    <a href={href} className={`${base} ${sizing} ${theme[variant]}`}>
      <span className="relative z-10">{children}</span>
      {icon && (
        <span
          className={`relative z-10 -mr-2 flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 ${iconBg[variant]}`}
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </span>
      )}
    </a>
  );
}
