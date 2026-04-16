import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { href: '#problem', label: 'Problem' },
  { href: '#definition', label: 'Definition' },
  { href: '#data', label: 'Data' },
  { href: '#how', label: 'Process' },
  { href: '#tools', label: 'Tools' },
  { href: '#positioning', label: 'Positioning' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? 'pt-3' : 'pt-8'
        }`}
      >
       <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="group flex items-center gap-3 text-white"
            aria-label="eTribe GEO 홈"
          >
            <img
              src="/logo.png"
              alt="eTribe"
              className={`w-auto object-contain select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                scrolled ? 'h-[18px]' : 'h-[24px]'
              }`}
              draggable={false}
            />
            <span className="flex items-center gap-1.5 font-sans">
              <span className="text-[13px] font-light text-white/45">×</span>
              <span className="text-[13px] font-semibold tracking-tight text-white">
                MARS
              </span>
            </span>
          </a>

          <nav
            className={`hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1.5 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:flex ${
              scrolled ? 'shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)]' : ''
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#cta"
              className="hidden rounded-full bg-brand-red px-4 py-2 text-[13px] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:brightness-110 md:inline-flex transform-gpu antialiased"
            >
              무료 진단 신청하기
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl md:hidden"
              aria-label="메뉴 열기"
            >
              <span className="block h-px w-4 bg-white" />
              <span className="block h-px w-4 bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-[55] transition-opacity duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-2xl" />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-end px-5 sm:px-8 pt-5">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
              aria-label="메뉴 닫기"
            >
              <span className="absolute block h-px w-4 rotate-45 bg-white" />
              <span className="absolute block h-px w-4 -rotate-45 bg-white" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-start justify-center gap-1 px-8">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-4xl font-semibold tracking-tight text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1 hover:text-white/60"
                style={{
                  transform: open ? 'translateY(0)' : 'translateY(16px)',
                  opacity: open ? 1 : 0,
                  transition:
                    'transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.6s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex rounded-full bg-brand-red px-6 py-3.5 text-[15px] font-medium text-white transition-all duration-500 hover:brightness-110 transform-gpu antialiased"
            >
              무료 진단 신청하기
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
