import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';
import { Eyebrow } from '../components/ui/Eyebrow';

const METRICS = [
  { k: 18, u: '년', v: '디지털 SI 에이전시 경력' },
  { k: 25, u: '일', v: '실측 모니터링 운영' },
  { k: 900, u: '건', v: '수집 응답 데이터' },
];

const TAGS = [
  'AX Force TFT',
  'Generative Engine',
  'Entity Engineering',
  'MARS Pipeline',
];

function Counter({ value, suffixContent }: { value: number; suffixContent?: React.ReactNode }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="inline">
      <span>
        {displayValue}
        {suffixContent}
      </span>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900/30 to-ink-950 py-16 sm:py-28 lg:py-40"
    >
      {/* Decorative vertical red hairline */}
      <div
        className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-brand-red/[0.07] to-transparent lg:left-[12%]"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-20">
          {/* ─── Left: Content ─── */}
          <div className="lg:col-span-7">
            <Eyebrow>About</Eyebrow>

            <h2
              className="reveal mt-6 text-[1.75rem] leading-[1.2] font-semibold tracking-tight break-keep text-white sm:text-4xl sm:leading-[1.15] lg:text-[3.25rem]"
              style={{ ['--i' as string]: 0 }}
            >
              AI에 가장 가깝게
              <br />
              <span className="text-brand-red">일하는 팀.</span>
            </h2>

            {/* Red divider line */}
            <div
              className="reveal mt-8 sm:mt-10"
              style={{ ['--i' as string]: 1 }}
            >
              <div className="line-h h-px w-full max-w-xs bg-gradient-to-r from-white/30 to-transparent" />
            </div>

            <p
              className="reveal mt-6 max-w-xl text-sm leading-relaxed text-ink-400 break-keep sm:mt-8 sm:text-base lg:text-lg"
              style={{ ['--i' as string]: 2 }}
            >
              eTribe는 18년 경력의 디지털 SI 에이전시입니다. 155명 중 AI 업무에
              가장 근접한 인력으로 구성된{' '}
              <span className="font-medium text-white">AX Force TFT</span>가
              GEO 전략 설계부터 기술 구현, 모니터링 내재화까지 전담합니다.
            </p>

            <div
              className="reveal mt-8 flex flex-wrap items-center gap-2.5 sm:mt-10 sm:gap-3"
              style={{ ['--i' as string]: 3 }}
            >
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-ink-300 backdrop-blur-xl transition-colors duration-300 hover:border-brand-red/40 hover:text-white sm:px-3.5 sm:text-[12px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ─── Right: Metric pillars ─── */}
          <div className="lg:col-span-5">
            <div className="relative flex flex-col gap-3 sm:gap-4">
              {METRICS.map((m, i) => (
                <div
                  key={m.v}
                  className="reveal"
                  style={{ ['--i' as string]: i + 4 }}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.04] hover:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.05)] sm:rounded-3xl">
                    {/* Beam FX - Changed to White & 50% Opacity */}
                    <div className="mask-border-beam absolute inset-0 z-0 pointer-events-none rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-50">
                      <div className="absolute top-1/2 left-1/2 w-[250%] aspect-square bg-[conic-gradient(from_0deg,transparent_75%,rgba(255,255,255,0.2)_85%,rgba(255,255,255,1)_100%)] animate-spin-beam" />
                    </div>

                    <div className="relative z-10 flex items-baseline justify-between gap-4 rounded-[18px] bg-gradient-to-b from-white/[0.035] to-transparent p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:gap-6 sm:rounded-[22px] sm:p-6 lg:p-8">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-5xl font-medium tracking-tight text-white tabular sm:text-6xl lg:text-7xl">
                        <Counter value={m.k} />
                      </span>
                      <span className="font-display text-lg text-brand-500 sm:text-xl">
                        {m.u}
                      </span>
                    </div>
                    <p className="max-w-[10rem] text-right text-[12px] font-medium tracking-wide text-ink-300 break-keep sm:text-[13px] lg:text-sm">
                      {m.v}
                    </p>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

