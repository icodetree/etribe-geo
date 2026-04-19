import { CTAButton } from '../components/ui/Button';
// import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { DotWave } from '../components/DotWave';

const PLATFORMS = ['ChatGPT', 'Perplexity', 'Claude', 'Gemini'];

// const STATS = [
//   { value: 25, suffix: '일', label: '실측 모니터링 기간' },
//   { value: 900, suffix: '건', label: '수집 응답 데이터' },
//   { value: 0, suffix: '%', label: '경쟁사 추천 인용률' },
//   { value: 115, prefix: '+', suffix: '%', label: 'GEO 적용 가시성 향상' },
// ];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      {/* DotWave particle background (30fps, paused off-screen) */}
      <DotWave className="absolute -top-30 inset-0 -z-20 opacity-60" />

      {/* Readability overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-[15]"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.15) 40%, rgba(10,10,10,0.4) 100%)',
        }}
      />

      {/* Bottom fade for next-section transition */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink-950 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
        {/* Top label */}
        <div
          className="reveal mb-4 flex items-center justify-center gap-4"
          style={{ ['--i' as string]: 0 }}
        >
          <span className="text-[11px] font-medium tracking-[0.3em] text-white/70 uppercase">
            Generative Engine Optimization
          </span>
        </div>

        {/* English signature slogan
        <p
          className="reveal text-3xl leading-none font-bold tracking-[-0.02em] text-white/95 sm:text-4xl lg:text-[2.75rem]"
          style={{ ['--i' as string]: 1 }}
        >
          Appear in AI answers.
        </p> */}

        {/* Divider */}
        <div
          className="reveal mx-auto mt-10 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ ['--i' as string]: 2 }}
        />

        {/* Korean main headline */}
        <h1
          className="reveal mx-auto mt-10 max-w-4xl text-[2.75rem] leading-[1.12] font-bold tracking-tight break-keep text-white sm:text-6xl lg:text-[5rem] xl:text-[5rem]"
          style={{ ['--i' as string]: 3 }}
        >
          AI 답변에
          <br />
          <span className="accent-underline">당신의 브랜드</span>가
          <br />
           나옵니까?
        </h1>

        {/* Sub copy
        <p
          className="reveal mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/70 break-keep sm:text-lg"
          style={{ ['--i' as string]: 4 }}
        >
          생성형 AI가 고객의 첫 번째 검색창이 된 지금,
          <br className="hidden sm:block" />
          <span className="font-semibold text-white">
            노출되지 않으면 존재하지 않는 것
          </span>
          과 같습니다.
        </p> */}

        {/* CTA buttons */}
        <div
          className="reveal mt-10 flex flex-wrap items-center justify-center gap-3"
          style={{ ['--i' as string]: 5 }}
        >
          <CTAButton href="#cta">
            우리 브랜드 AI 가시성 무료 진단받기
          </CTAButton>
          <CTAButton href="#how" variant="outline">
            작동 원리 보기
          </CTAButton>
        </div>

        {/* Platform list */}
        <div
          className="reveal mt-8"
          style={{ ['--i' as string]: 6 }}
        >
          {/* <p className="text-[11px] font-medium tracking-[0.22em] text-white/50 uppercase">
            4개 AI 플랫폼 실측 크롤링 운영
          </p> */}
          <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px] font-medium text-white/80">
            {PLATFORMS.map((p, i) => (
              <span key={p}>
                {p}
                {i < PLATFORMS.length - 1 && (
                  <span className="ml-5 text-white/30">/</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom stat strip 
        <div
          className="reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md sm:grid-cols-4"
          style={{ ['--i' as string]: 7 }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-ink-950/40 p-5 text-center backdrop-blur-md transition-colors duration-500 hover:bg-white/[0.04] sm:p-7"
            >
              <AnimatedCounter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                className="text-3xl leading-none font-bold tracking-tight text-white tabular sm:text-4xl"
              />
              <div className="mt-2.5 text-[11px] font-medium tracking-[0.18em] text-white/55 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        */}

        {/* ─── Service Preview — MacBook Frame ─── */}
        <div
          className="reveal mt-10 sm:mt-14"
          style={{ ['--i' as string]: 8 }}
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Bottom fade — blends into page background */}
            <div
              className="pointer-events-none absolute inset-0 z-20 rounded-[inherit]"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(to top, var(--color-ink-950) 8%, rgba(10,10,10,0.5) 25%, transparent 55%)',
              }}
            />

            {/* MacBook outer shell */}
            <div
              className="relative overflow-hidden rounded-xl sm:rounded-2xl"
              style={{
                background:
                  'linear-gradient(180deg, #2a2a2e 0%, #1c1c1f 40%, #161618 100%)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.4), 0 25px 80px -15px rgba(0,0,0,0.7)',
              }}
            >
              {/* Border beam — soft white, short tail, hidden at bottom */}
              <div
                className="absolute inset-0 z-30 pointer-events-none rounded-[inherit]"
                style={{
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 45%, transparent 80%)',
                  maskImage:
                    'linear-gradient(to bottom, black 45%, transparent 80%)',
                }}
              >
                <div className="mask-border-beam absolute inset-0 rounded-[inherit]">
                  <div
                    className="absolute top-1/2 left-1/2 w-[250%] aspect-square"
                    style={{
                      background:
                        'conic-gradient(from 0deg, transparent 82%, rgba(255,255,255,0.06) 88%, rgba(255,255,255,0.2) 94%, rgba(255,255,255,0.45) 100%)',
                      animation: 'spinBeam 12s linear infinite',
                    }}
                  />
                </div>
              </div>

              {/* Top bezel — camera notch */}
              <div className="relative flex items-center justify-center py-2 sm:py-2.5">
                <div className="h-[5px] w-[5px] rounded-full bg-white/[0.06] ring-1 ring-white/[0.04] sm:h-1.5 sm:w-1.5" />
              </div>

              {/* Screen area with inner shadow */}
              <div className="relative mx-1.5 mb-1.5 overflow-hidden rounded-lg sm:mx-2 sm:mb-2 sm:rounded-xl">
                {/* Inner bezel highlight */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
                  aria-hidden="true"
                  style={{
                    boxShadow:
                      'inset 0 1px 2px rgba(0,0,0,0.5), inset 0 0 0 0.5px rgba(255,255,255,0.05)',
                  }}
                />

                {/* Video */}
                <video
                  className="relative block w-full aspect-video bg-black object-cover"
                  src="/main_01.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Bottom chin — metallic gradient */}
              <div
                className="relative flex items-center justify-center py-2.5 sm:py-3"
                style={{
                  background:
                    'linear-gradient(180deg, #1a1a1d 0%, #141416 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
