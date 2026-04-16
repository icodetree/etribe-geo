import { Eyebrow } from '../components/ui/Eyebrow';
import { ScrollDivider } from '../components/ui/ScrollDivider';

const POINTS = [
  {
    num: '01.',
    headline: '기존 SEO 키워드 최적화 → AI 가시성에 효과 없음',
    source: 'Princeton GEO 논문, ACM KDD 2024',
  },
  {
    num: '02.',
    headline: '통계·출처 기반 콘텐츠 → AI 가시성 최대 +115% 향상',
    source: '동일 연구, 8가지 GEO 전략 실험 결과',
  },
  {
    num: '03.',
    headline: 'AI 채널의 SOV(점유율)는 지금 무주공산',
    source: '한국 시장 실측 모니터링, 2026',
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-28 sm:py-32 lg:py-40">
      <ScrollDivider />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="lg:w-1/2">
            <Eyebrow>Problem</Eyebrow>
            <h2
              className="reveal mt-6 text-4xl leading-[1.15] font-bold tracking-tight break-keep text-white sm:text-5xl lg:text-[3.25rem]"
              style={{ ['--i' as string]: 0 }}
            >
              검색이 바뀌었는데,
              <br />
              <span className="text-brand-red">전략</span>은 그대로입니까?
            </h2>
          </div>
          <div className="lg:w-1/3">
            <p
              className="reveal text-base leading-relaxed text-ink-400 break-keep sm:text-lg"
              style={{ ['--i' as string]: 1 }}
            >
              소비자는 이미 ChatGPT, Perplexity, Claude, Gemini에게 묻습니다. 
              "믿을 만한 브랜드 어디야?" AI가 생성하는 그 답변 안에, 우리 브랜드가 있습니까?
            </p>
          </div>
        </div>

        {/* Bottom Horizontal Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {POINTS.map((p, i) => {
            const isHighlighted = i === 1; // Middle card is highlighted
            return (
              <div
                key={p.num}
                className={`reveal group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-8 sm:p-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[320px] ${
                  isHighlighted
                    ? 'bg-brand-red text-white shadow-2xl scale-105 z-10'
                    : 'bg-gradient-to-br from-white/[0.08] to-white/[0.01] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] text-white/70 backdrop-blur-sm hover:border-white/20'
                }`}
                style={{ ['--i' as string]: i + 2 }}
              >
                {!isHighlighted && (
                  <div className="pointer-events-none absolute inset-0 bg-white/[0.04] opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />
                )}
                
                <div className="relative z-10">
                  <div className={`text-2xl font-bold mb-6 ${isHighlighted ? 'text-white' : 'text-brand-red'}`}>
                    {p.num}
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-semibold leading-snug break-keep ${isHighlighted ? 'text-white' : 'text-white/90'}`}>
                    {p.headline}
                  </h3>
                </div>
                
                <div className="relative z-10 mt-12">
                  <p className={`text-sm tracking-wide ${isHighlighted ? 'text-white/90' : 'text-ink-500'}`}>
                    {p.source}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
