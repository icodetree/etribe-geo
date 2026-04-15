import type { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';

export function SectionHeader({
  eyebrow,
  english,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow?: string;
  english?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
}) {
  const justify = align === 'center' ? 'items-center text-center mx-auto' : 'items-start';
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${justify}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {english && (
        <p className="font-display text-sm tracking-[0.35em] text-brand-500/90 uppercase reveal">
          {english}
        </p>
      )}
      <h2
        className="reveal text-4xl leading-[1.15] font-semibold tracking-tight break-keep sm:text-5xl lg:text-6xl"
        style={{ ['--i' as string]: 1 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="reveal max-w-2xl text-base leading-relaxed text-ink-400 break-keep sm:text-lg"
          style={{ ['--i' as string]: 2 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
