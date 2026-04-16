import { Eyebrow } from '../components/ui/Eyebrow';

const STEPS = [
  {
    title: '진단',
    lead: '현재 AI 가시성 측정',
    body: '플랫폼별 인용률, SOV, 경쟁사 점유율을 수치화합니다. 추측이 아닌 크롤링 기반 실측 리포트.',
  },
  {
    title: '인텐트 설계',
    lead: '노출되어야 할 쿼리 정의',
    body: '추천 / 비교 / 가격 / 정보탐색 / 제안. 우리 카테고리에서 가장 중요한 질문 5계열을 먼저 설계합니다.',
  },
  {
    title: '엔티티 구축',
    lead: '인텐트별 GEO 콘텐츠 생성',
    body: '통계·출처·수치 — AI가 신뢰하는 방식으로 작성합니다. FAQ, 비교표, 데이터카드, 가이드 문서.',
  },
  {
    title: '기술 최적화',
    lead: 'AI가 읽을 수 있게',
    body: 'Schema.org JSON-LD, Canonical, Sitemap. 콘텐츠가 아무리 좋아도 기술이 빠지면 AI가 읽지 못합니다.',
  },
  {
    title: '모니터링',
    lead: '매일 자동 크롤링',
    body: '인용 현황 대시보드, 엔티티 그래프 갱신. 숫자로 확인하고, 숫자로 개선합니다.',
  },
];

export function How() {
  return (
    <section
      id="how"
      className="relative border-y border-white/5 bg-ink-900/40 py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>Process</Eyebrow>
          <h2
            className="reveal max-w-3xl text-4xl leading-[1.15] font-semibold tracking-tight break-keep text-white sm:text-5xl lg:text-[3.25rem]"
            style={{ ['--i' as string]: 0 }}
          >
            GEO는 <span className="font-extrabold text-brand-red">5단계</span>로
            작동합니다.
          </h2>
        </div>

        {/* Process Bar Chart Layout */}
        <div className="mt-8 w-full overflow-x-auto pt-16 pb-10 no-scrollbar">
          <div className="flex items-end h-[450px] lg:h-[550px] min-w-[1000px] lg:min-w-full px-2 lg:px-8">
            {STEPS.map((s, i) => {
              // Ascending height array for 5 steps
              const heights = ['h-[45%]', 'h-[55%]', 'h-[70%]', 'h-[85%]', 'h-[100%]'];
              // Stack left on top of right (highest z-index on left)
              const zIndices = [50, 40, 30, 20, 10];
              // Overlap rightward
              const overlapClass = i < STEPS.length - 1 ? '-mr-6 lg:-mr-8' : '';

              return (
                <div
                  key={s.title}
                  className={`reveal relative flex-1 flex flex-col justify-end ${heights[i]} ${overlapClass}`}
                  style={{ zIndex: zIndices[i], ['--i' as string]: i + 1 }}
                >
                  {/* Floating Step Number Label */}
                  <div className="absolute -top-10 left-0 w-full text-center">
                    <span className="text-xl lg:text-2xl font-bold tracking-tight text-white/90">
                      Step 0{i + 1}
                    </span>
                  </div>

                  {/* Overlapping Glass Bar via Gradient Border Wrapper */}
                  <div className="relative w-full h-full rounded-t-[2rem] bg-gradient-to-b from-white/[0.15] via-white/[0.04] to-transparent p-[1px] transition-all duration-500 hover:from-brand-red/40 hover:shadow-[0_-20px_40px_rgba(255,0,0,0.1)] group [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
                    <div className="relative w-full h-full flex flex-col items-center text-center rounded-t-[2rem] bg-gradient-to-b from-white/[0.08] via-ink-950/60 to-transparent backdrop-blur-xl p-5 lg:p-8 transition-colors duration-500 hover:bg-white/[0.02]">
                      {/* Inner glowing top highlight */}
                      <div className="absolute inset-0 rounded-t-[2rem] shadow-[inset_0_2px_10px_rgba(255,255,255,0.15)] pointer-events-none" />
                      
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 pt-2 transition-transform duration-500 group-hover:scale-105 relative z-10">
                        {s.title}
                      </h3>
                      
                      <p className="text-[13px] sm:text-[15px] font-medium text-white/90 mb-5 lg:mb-6 break-keep relative z-10">
                        {s.lead}
                      </p>
                      
                      <p className="text-[12px] sm:text-sm text-ink-300 break-keep leading-relaxed pt-5 lg:pt-6 border-t border-white/10 w-[90%] mx-auto relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
