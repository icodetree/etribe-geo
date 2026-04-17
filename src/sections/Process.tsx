import { Eyebrow } from '../components/ui/Eyebrow';

const PHASES = [
  {
    duration: '1–2일',
    title: '진단',
    body: 'AI 가시성 진단. 인용률·SOV·경쟁사 점유율 측정.',
    deliverable: '현황 리포트',
  },
  {
    duration: '1–10일',
    title: '설계',
    body: '인텐트 맵 설계. 우선순위 쿼리 확정.',
    deliverable: '인텐트 맵 + 콘텐츠 플랜',
  },
  {
    duration: '5일',
    title: '구현',
    body: '기술 최적화 + GEO 콘텐츠 1차 배포.',
    deliverable: '스키마 · 페이지 · 가이드',
  },
  {
    duration: '9주~',
    title: '이행',
    body: '모니터링 시스템 가동, 주간 사이클 내재화.',
    deliverable: '대시보드 + 주간 리포트',
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-brand-red/[0.08] bg-ink-900/40 py-16 sm:py-28 lg:py-40"
    >
      {/* Decorative red corner accent */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-24 w-px bg-gradient-to-b from-brand-red/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-0 left-0 h-px w-24 bg-gradient-to-r from-brand-red/30 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* ─── Header ─── */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6">
          <Eyebrow>Engagement</Eyebrow>

          <h2
            className="reveal mt-4 max-w-3xl text-[1.75rem] leading-[1.2] font-semibold tracking-tight break-keep text-white sm:mt-6 sm:text-4xl sm:leading-[1.15] lg:text-[3.25rem]"
            style={{ ['--i' as string]: 0 }}
          >
            이렇게{' '}
            <span className="text-brand-red">함께</span> 일합니다.
          </h2>
          <p
            className="reveal max-w-2xl text-sm leading-relaxed text-ink-400 break-keep sm:text-base lg:text-lg"
            style={{ ['--i' as string]: 1 }}
          >
            4개의 단계로 구성된 engagement. 진단부터 내재화까지 약 11–12주 내
            궤도에 올립니다.
          </p>
        </div>

        {/* ─── Desktop: Horizontal timeline ─── */}
        <div
          className="reveal mt-16 hidden lg:mt-20 lg:block"
          style={{ ['--i' as string]: 2 }}
        >
          <div className="relative">
            {/* Horizontal red connecting line */}
            <div className="absolute inset-x-0 top-5 h-px" aria-hidden="true">
              <div className="line-h h-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>

            <div className="grid grid-cols-4 gap-6">
              {PHASES.map((p, i) => (
                <div key={p.title} className="flex flex-col items-center h-full">
                  {/* Step marker on the line */}
                  <div
                    className="dot-pop relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 bg-ink-950 ring-4 ring-ink-900/40"
                    style={{ transitionDelay: `${i * 150 + 200}ms` }}
                  >
                    <span className="text-sm font-bold text-white tabular">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Vertical connector stem */}
                  <div className="h-6 w-px bg-gradient-to-b from-white/30 to-transparent" />

                  {/* Phase card */}
                  <article className="group relative overflow-hidden flex flex-col w-full h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/[0.04]">
                    {/* Beam FX */}
                    <div className="mask-border-beam absolute inset-0 z-0 pointer-events-none rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute top-1/2 left-1/2 w-[250%] aspect-square bg-[conic-gradient(from_0deg,transparent_75%,rgba(252,0,17,0.3)_85%,rgba(252,0,17,1)_100%)] animate-spin-beam" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full w-full">
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] font-medium tracking-wide text-white">
                        {p.duration}
                      </p>

                      <p className="mt-5 text-[14px] leading-relaxed break-keep text-ink-400 flex-1 min-h-[3.25rem]">
                        {p.body}
                      </p>

                      <div className="mt-6 mt-auto border-t border-white/10 pt-4">
                        <p className="text-[10px] font-medium tracking-[0.22em] text-ink-400 uppercase">
                          Deliverable
                        </p>
                        <p className="mt-1 text-[13px] font-medium text-white break-keep">
                          {p.deliverable}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Mobile / Tablet: Vertical timeline ─── */}
        <div className="mt-10 sm:mt-14 lg:hidden">
          <div className="relative">
            {/* Vertical red connecting line */}
            <div
              className="pointer-events-none absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-white/40 via-white/15 to-transparent sm:left-[18px]"
              aria-hidden="true"
            />

            <div className="space-y-5 sm:space-y-6">
              {PHASES.map((p, i) => (
                <div
                  key={p.title}
                  className="reveal relative pl-10 sm:pl-14"
                  style={{ ['--i' as string]: i + 2 }}
                >
                  {/* Step marker on the line */}
                  <div
                    className="dot-pop absolute left-0 top-5 flex h-[29px] w-[29px] items-center justify-center rounded-full border-2 border-white/40 bg-ink-950 sm:h-[37px] sm:w-[37px]"
                    style={{ transitionDelay: '0.15s' }}
                  >
                    <span className="text-[11px] font-bold text-white tabular sm:text-xs">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Phase card */}
                  <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-5 transition-all duration-500 hover:bg-white/[0.04]">
                    {/* Beam FX */}
                    <div className="mask-border-beam absolute inset-0 z-0 pointer-events-none rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute top-1/2 left-1/2 w-[250%] aspect-square bg-[conic-gradient(from_0deg,transparent_75%,rgba(252,0,17,0.3)_85%,rgba(252,0,17,1)_100%)] animate-spin-beam" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {p.title}
                        </h3>
                        <p className="text-[13px] font-medium text-brand-red">
                          {p.duration}
                        </p>
                      </div>

                      <p className="mt-3 text-[14px] leading-relaxed break-keep text-ink-400">
                        {p.body}
                      </p>

                      <div className="mt-4 border-t border-white/10 pt-3 sm:pt-4">
                        <p className="text-[10px] font-medium tracking-[0.22em] text-ink-400 uppercase">
                          Deliverable
                        </p>
                        <p className="mt-1 text-[13px] font-medium text-white break-keep">
                          {p.deliverable}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
