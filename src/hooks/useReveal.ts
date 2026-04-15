import { useEffect } from 'react';

/**
 * Global IntersectionObserver that adds `.is-visible` to every `.reveal`
 * element as it enters the viewport. Staggering is done via a CSS variable
 * --i on the element: `style={{ ['--i' as any]: index }}`.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.reveal');
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const i = Number(el.style.getPropertyValue('--i') || '0');
            window.setTimeout(() => el.classList.add('is-visible'), i * 80);
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
