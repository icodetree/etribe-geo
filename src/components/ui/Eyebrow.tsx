import type { ReactNode } from 'react';

export function Eyebrow({
  children,
  tone = 'brand',
}: {
  children: ReactNode;
  tone?: 'brand' | 'neutral';
}) {
  const color =
    tone === 'brand'
      ? 'text-brand-500 bg-brand-500/10 ring-brand-500/20'
      : 'text-ink-400 bg-white/5 ring-white/10';
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ring-1 ${color}`}
    >
      <span className="block h-1 w-1 rounded-full bg-current" />
      {children}
    </span>
  );
}
