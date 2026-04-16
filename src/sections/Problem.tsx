import { Eyebrow } from '../components/ui/Eyebrow';

const POINTS = [
  {
    headline: '기존 SEO 키워드 최적화 → AI 가시성에 효과 없음',
    source: 'Princeton GEO 논문, ACM KDD 2024',
  },
  {
    headline: '통계·출처 기반 콘텐츠 → AI 가시성 최대 +115% 향상',
    source: '동일 연구, 8가지 GEO 전략 실험 결과',
  },
  {
    headline: 'AI 채널의 SOV(점유율)는 지금 이 순간 무주공산',
    source: '한국 시장 실측 모니터링, 2026',
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-28 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left: numbering + headline */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <Eyebrow>Problem</Eyebrow>
              <h2
                className="reveal mt-8 text-4xl leading-[1.15] font-semibold tracking-tight break-keep text-white sm:text-5xl lg:text-[3.25rem]"
                style={{ ['--i' as string]: 0 }}
              >
                검색이 바뀌었는데,
                <br />
                <span className="display-italic text-white">전략</span>은
                그대로입니까?
              </h2>
              <p
                className="reveal mt-6 max-w-md text-base leading-relaxed text-ink-400 break-keep sm:text-lg"
                style={{ ['--i' as string]: 1 }}
              >
                소비자는 이미 ChatGPT, Perplexity, Claude, Gemini에게 묻습니다.
                "이 카테고리에서 믿을 만한 브랜드 어디야?" "제품 추천해줘."
                AI가 생성하는 그 답변 안에, 우리 브랜드가 있습니까?
              </p>
            </div>
          </div>

          {/* Right: 3 point cards */}
          <div className="lg:col-span-7">
            <ol className="space-y-4">
              {POINTS.map((p, i) => (
                <li
                  key={p.headline}
                  className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/20 hover:bg-white/[0.035]"
                  style={{ ['--i' as string]: i + 1 }}
                >
                  <div className="relative rounded-[22px] bg-gradient-to-b from-white/[0.04] to-transparent p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-9">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <p className="text-lg leading-snug font-semibold break-keep text-white sm:text-xl">
                          {p.headline}
                        </p>
                        <p className="mt-3 text-[13px] tracking-wide text-ink-400 italic">
                          — {p.source}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
