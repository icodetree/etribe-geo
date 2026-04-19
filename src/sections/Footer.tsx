export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        {/* Brand statement — echo of FEEL. CREATE. CONNECT */}
        <div className="border-b border-white/10 pb-14 text-center">
          <h3 className="font-display text-5xl leading-[0.95] font-medium tracking-tight text-white sm:text-6xl lg:text-[5.5rem]">
            APPEAR.{' '}
            <span className="display-italic text-brand-500">ANSWER.</span>{' '}
            AMPLIFY.
          </h3>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3.5">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="eTribe"
                className="h-6 w-auto object-contain select-none"
                draggable={false}
              />
              <span className="flex items-center gap-2 font-sans">
                <span className="text-base font-light text-white/40">×</span>
                <span className="text-base font-semibold tracking-tight text-white">
                  MARS
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed break-keep text-ink-400">
              AI 답변 안에 브랜드를 노출시키는 기술.
              <br />
              Generative Engine Optimization by eTribe AX Force.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-[11px] font-medium tracking-[0.22em] text-ink-400 uppercase">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-[14px]">
              <a
                href="mailto:ax@etribe.co.kr"
                className="block font-medium text-white underline-offset-4 transition-colors hover:text-brand-500 hover:underline"
              >
                ax@etribe.co.kr
              </a>
              <a
                href="https://etribe.co.kr"
                target="_blank"
                rel="noreferrer"
                className="block text-ink-400 transition-colors hover:text-white"
              >
                etribe.co.kr →
              </a>
            </div>
          </div>

          {/* Team */}
          <div className="md:col-span-4">
            <p className="text-[11px] font-medium tracking-[0.22em] text-ink-400 uppercase">
              Team
            </p>
            <p className="mt-4 text-[14px] leading-relaxed break-keep text-ink-300">
              ETRIBE AX Force TFT
              <br />
              디지털 SI 18년, AI에 가장 근접한 소수 인력으로 구성된 전담팀.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] tracking-wide text-ink-400">
            © 2026 ETRIBE AX Force. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px] font-medium tracking-[0.18em] text-ink-400 uppercase">
            <span>Curated with AX Force</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
