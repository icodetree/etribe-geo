import type { ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'outline';

export function CTAButton({
  children,
  href = '#cta',
  variant = 'primary',
  size = 'lg',
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  icon?: boolean;
  size?: 'md' | 'lg';
}) {
  const base =
    'group relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';

  const sizing = size === 'lg' ? 'px-7 py-4 text-[15px]' : 'px-5 py-3 text-sm';

  const theme: Record<Variant, string> = {
    primary: 'bg-white text-ink-950 hover:bg-ink-100',
    ghost:
      'bg-white/5 text-white hover:bg-white/10 ring-1 ring-white/10 backdrop-blur-xl',
    outline:
      'bg-transparent text-white ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/[0.03]',
  };

  return (
    <a href={href} className={`${base} ${sizing} ${theme[variant]}`}>
      <span className="relative z-10">{children}</span>
    </a>
  );
}
