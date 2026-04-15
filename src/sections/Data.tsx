import { Eyebrow } from '../components/ui/Eyebrow';

const ROWS = [
  { query: '제품 추천', rate: 0, tone: 'alarm' as const },
  { query: '브랜드 비교', rate: 0, tone: 'alarm' as const },
  { query: '핵심 기능 정보', rate: 34, tone: 'neutral' as const },
  { query: '브랜드 직접 검색', rate: 30, tone: 'neutral' as const },
];

export function Data() {
  return (
    <section id="data" className="relative py-28 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Eyebrow>Evidence</Eyebrow>
            <h2
              className="reveal mt-6 text-4xl leading-[1.15] font-semibold tracking-tight break-keep text-white sm:text-5xl lg:text-[3.5rem]"
              style={{ ['--i' as string]: 0 }}
            >
              말이 아니라{' '}
              <span className="display-italic text-brand-500">
                데이터
              </span>
              로 확인했습니다.
            </h2>
            <p
              className="reveal mt-6 max-w-xl text-base leading-relaxed text-ink-400 break-keep sm:text-lg"
              style={{ ['--i' as string]: 1 }}
            >
              eTribe는 실제 브랜드를 대상으로 4개 AI 플랫폼 × 9개 쿼리 × 25일
              실측 크롤링을 운영합니다. 아래는 국내 S社 기준 25일간의 결과입니다.
            </p>
          </div>

          <div
            className="reveal lg:col-span-6"
            style={{ ['--i' as string]: 2 }}
          >
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-center">
              {[
                { k: '4', v: 'Platforms' },
                { k: '9', v: 'Queries' },
                { k: '25', v: 'Days' },
              ].map((x) => (
                <div key={x.v} className="bg-ink-950 px-4 py-5">
                  <div className="font-display text-4xl tracking-tight text-white tabular sm:text-5xl">
                    {x.k}
                  </div>
                  <div className="mt-1.5 text-[11px] font-medium tracking-[0.22em] text-ink-400 uppercase">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results table */}
        <div
          className="reveal mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent"
          style={{ ['--i' as string]: 3 }}
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-6 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-500 animate-[pulseRing_3s_ease-in-out_infinite]" />
              <span className="font-display text-sm tracking-[0.25em] text-ink-300 uppercase">
                Live Crawl · S社 실측
              </span>
            </div>
            <span className="font-mono text-[11px] text-ink-400">
              2025 · 900 responses
            </span>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {ROWS.map((r, i) => (
              <div
                key={r.query}
                className="reveal grid grid-cols-12 items-center gap-4 px-6 py-6 transition-colors duration-500 hover:bg-white/[0.02] sm:px-8 sm:py-7"
                style={{ ['--i' as string]: i + 4 }}
              >
                <div className="col-span-12 flex items-baseline gap-3 sm:col-span-4">
                  <span className="font-mono text-[12px] text-ink-400">
                    Q0{i + 1}
                  </span>
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {r.query}
                  </span>
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        r.tone === 'alarm'
                          ? 'bg-gradient-to-r from-brand-500 to-brand-600'
                          : 'bg-white/80'
                      }`}
                      style={{ width: `${Math.max(r.rate, 1.5)}%` }}
                    />
                  </div>
                </div>

                <div className="col-span-12 text-right sm:col-span-2">
                  <span
                    className={`font-display text-3xl font-medium tabular sm:text-4xl ${
                      r.tone === 'alarm' ? 'text-brand-500' : 'text-white'
                    }`}
                  >
                    {r.rate}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 bg-brand-500/[0.04] px-6 py-6 sm:px-8">
            <p className="text-base leading-relaxed break-keep text-ink-100 sm:text-lg">
              <span className="text-brand-500 font-semibold">
                소비자가 가장 많이 묻는 추천·비교 쿼리에서 25일 내내 전 플랫폼
                인용률 0%.
              </span>{' '}
              <span className="text-ink-400">
                콘텐츠가 없으면, AI는 경쟁사를 답합니다.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
