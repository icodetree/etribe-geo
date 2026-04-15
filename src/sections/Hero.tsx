import { CTAButton } from '../components/ui/Button';
import { DotWave } from '../components/DotWave';

const PLATFORMS = ['ChatGPT', 'Perplexity', 'Claude', 'Gemini'];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* Layer 1 — Deep navy/purple base gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 78% 22%, #2a1454 0%, #160a30 35%, #0a061b 70%, #07040f 100%)',
        }}
      />

      {/* Layer 2 — Magenta hotspot glow (top-right) */}
      <div
        className="pointer-events-none absolute -top-32 -right-40 -z-20 h-[44rem] w-[44rem] rounded-full sm:h-[58rem] sm:w-[58rem]"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(229,72,189,0.32) 0%, rgba(150,50,200,0.18) 35%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="pointer-events-none absolute top-40 right-10 -z-20 h-[20rem] w-[20rem] rounded-full"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle, rgba(229,38,44,0.22) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Layer 3 — Dot-wave canvas */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <DotWave />
      </div>

      {/* Layer 4 — Subtle bottom fade for legibility */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink-950 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Top label */}
        <div
          className="reveal mb-4 flex items-center gap-4"
          style={{ ['--i' as string]: 0 }}
        >
          <span className="text-[11px] font-medium tracking-[0.3em] text-white/70 uppercase">
            Generative Engine Optimization
          </span>
        </div>

        {/* English signature slogan — single line */}
        <p
          className="reveal text-3xl leading-none font-bold tracking-[-0.02em] text-white/95 sm:text-4xl lg:text-[2.75rem]"
          style={{ ['--i' as string]: 1 }}
        >
          Appear in <span className="text-brand-500">AI</span> answers.
        </p>

        {/* Divider */}
        <div
          className="reveal mt-10 h-px w-full max-w-md bg-gradient-to-r from-white/30 via-white/10 to-transparent"
          style={{ ['--i' as string]: 2 }}
        />

        {/* Korean main headline */}
        <h1
          className="reveal mt-10 max-w-5xl text-5xl leading-[1.1] font-bold tracking-tight break-keep text-white sm:text-6xl lg:text-[5rem] xl:text-[5.75rem]"
          style={{ ['--i' as string]: 3 }}
        >
          AI에게 물어봤을 때,
          <br />
          <span className="relative whitespace-nowrap">
            <span className="relative z-10">당신의 브랜드</span>
            <span className="absolute right-0 bottom-2 left-0 z-0 h-[0.28em] bg-brand-500/80" />
          </span>
          가
          <br />
          답변에 나옵니까?
        </h1>

        {/* Sub copy + CTA grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div
            className="reveal lg:col-span-7"
            style={{ ['--i' as string]: 4 }}
          >
            <p className="max-w-2xl text-base leading-relaxed text-white/70 break-keep sm:text-lg">
              검색의 시대는 끝났습니다. 이제 답변의 시대입니다.<br className="hidden sm:block" />
              <span className="font-semibold text-white">
                GEO는 인공지능
              </span>이 당신의 브랜드를 가장 먼저 추천하도록 설계합니다.
            </p>
          </div>

          <div
            className="reveal flex flex-col gap-7 lg:col-span-5"
            style={{ ['--i' as string]: 5 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <CTAButton href="#cta">무료 진단 시작하기</CTAButton>
              <CTAButton href="#how" variant="outline" icon={false}>
                작동 원리 보기
              </CTAButton>
            </div>

            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] text-white/50 uppercase">
                4개 AI 플랫폼 실측 크롤링 운영
              </p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-white/80">
                {PLATFORMS.map((p) => (
                  <span key={p} className="flex items-center gap-1.5">
                    <span className="block h-1 w-1 rounded-full bg-brand-500" />
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div
          className="reveal mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md sm:grid-cols-4"
          style={{ ['--i' as string]: 6 }}
        >
          {[
            { k: '25일', v: '실측 모니터링 기간' },
            { k: '900건', v: '수집 응답 데이터' },
            { k: '0%', v: '경쟁사 추천 인용률' },
            { k: '+115%', v: 'GEO 적용 가시성 향상' },
          ].map((s) => (
            <div
              key={s.v}
              className="bg-ink-950/40 p-5 backdrop-blur-md transition-colors duration-500 hover:bg-white/[0.04] sm:p-7"
            >
              <div className="text-3xl leading-none font-bold tracking-tight text-white tabular sm:text-4xl">
                {s.k}
              </div>
              <div className="mt-2.5 text-[11px] font-medium tracking-[0.18em] text-white/55 uppercase">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
