import { Eyebrow } from '../components/ui/Eyebrow';
import { ScrollDivider } from '../components/ui/ScrollDivider';

type Tool = {
  title: string;
  eng: string;
  lead: string;
  body: string;
  span: string;
  accent?: boolean;
};

const TOOLS: Tool[] = [
  {
    title: 'MARS',
    eng: 'Multi Agent Recipe System',
    lead: 'GEO 운영을 자동화한 멀티에이전트 파이프라인',
    body: '크롤링 → AI 가시성 분석 → SOV 분석 → 기술진단 → 레포트. 사람이 하던 14일을 48시간으로 압축합니다.',
    span: 'md:col-span-6 lg:col-span-4 lg:row-span-2',
    accent: true,
  },
  {
    title: 'GEO 대시보드',
    eng: 'Monitoring Console',
    lead: 'AI 가시성 점수 · 플랫폼별 인용률 · 경쟁사 SOV',
    body: '부서별 현황까지 한 화면. 숫자로 보고, 숫자로 움직입니다.',
    span: 'md:col-span-6 lg:col-span-2',
  },
  {
    title: '엔티티 회침기',
    eng: 'Entity Probe',
    lead: 'LLM에게 직접 묻는 지식공백 진단기',
    body: 'AI가 우리 브랜드에 대해 무엇을 알고, 무엇을 모르는지. 공백을 드러내야 채울 수 있습니다.',
    span: 'md:col-span-6 lg:col-span-3',
  },
  {
    title: '인텐트 나침반',
    eng: 'Intent Compass',
    lead: '인텐트별 인용률 히트맵',
    body: '어느 인텐트가 강하고 어디가 공백인지 한눈에. 우선순위는 지도가 결정합니다.',
    span: 'md:col-span-6 lg:col-span-3',
  },
  {
    title: 'GEO 콘텐츠 생성기',
    eng: 'Content Forge',
    lead: '인텐트 선택 → 포맷 자동 분기 → GEO 최적화 콘텐츠 생성',
    body: '정보탐색=설명서 · 추천=FAQ · 비교=비교표 · 가격=데이터테이블. 인텐트가 포맷을 정합니다.',
    span: 'md:col-span-6 lg:col-span-6',
  },
];

export function Tools() {
  return (
    <section id="tools" className="relative py-28 sm:py-32 lg:py-40 bg-ink-950">
      <ScrollDivider />
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        {/* Header Area exactly mimicking the image layout */}
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-24">
          <div className="mb-6">
            <Eyebrow>Built In-House</Eyebrow>
          </div>

          <h2
            className="reveal text-[2rem] leading-[1.15] font-semibold tracking-tight text-white mb-5 sm:text-[2.75rem] lg:text-[3.5rem]"
            style={{ ['--i' as string]: 0 }}
          >
            제안하기 전에, 직접 만들어 <span className="font-extrabold text-brand-red">운영</span>했습니다
          </h2>

          <p
            className="reveal max-w-[640px] text-[16px] leading-relaxed text-ink-300 break-keep sm:text-[18px]"
            style={{ ['--i' as string]: 1 }}
          >
            eTribe AX Force는 GEO를 클라이언트에 제안하기 전, 자체 시스템을 먼저
            구축하고 실측 데이터를 축적했습니다. 이 다섯 가지 도구가 그 증거입니다.
          </p>
        </div>

        {/* Bento Grid layout: 3 cols, 2 rows exactly matching image */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          
          {/* Card 1: MARS (col-span-2) - Text at TOP, Graphic at BOTTOM */}
          <article
            className="reveal relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:col-span-2"
            style={{ ['--i' as string]: 2 }}
          >
            <div className="relative z-10 p-8 pb-0 lg:p-10 lg:pb-0 text-left max-w-[600px]">
              <h3 className="text-[20px] lg:text-[22px] font-bold text-white mb-3">
                MARS (Multi Agent Recipe System)
              </h3>
              <p className="text-[14px] lg:text-[15px] leading-relaxed text-ink-400 font-medium">
                GEO 운영을 자동화한 멀티에이전트 파이프라인. 크롤링부터 분석, 기술진단, 레포트까지 사람이 하던 14일을 48시간으로 압축합니다.
              </p>
            </div>

            <div className="relative h-[280px] lg:h-[340px] w-full mt-4 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(252,0,17,0.06),transparent_60%)] pointer-events-none" />
              
              {/* Graphic: Branching Node Graph */}
              <div className="relative w-full h-full max-w-[700px] mx-auto text-white/20">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 340" fill="none" preserveAspectRatio="none">
                  {/* Left to right flow lines */}
                  <path d="M120,170 C200,170 200,100 280,100" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M120,170 C200,170 200,240 280,240" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M280,100 C360,100 360,170 440,170" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M280,240 C360,240 360,170 440,170" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M440,170 L580,170" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                
                {/* Nodes (Glass Boxes) */}
                <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/[0.08] bg-[#141414] shadow-lg">
                  <div className="w-5 h-5 rounded-[4px] bg-white/20"></div>
                </div>
                <div className="absolute left-[35%] top-[25%] -translate-y-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/[0.08] bg-[#141414] shadow-lg">
                  <div className="w-5 h-5 rounded-[4px] bg-white/20"></div>
                </div>
                <div className="absolute left-[35%] top-[75%] -translate-y-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/[0.08] bg-[#141414] shadow-lg">
                  <div className="w-5 h-5 rounded-[4px] bg-white/20"></div>
                </div>
                <div className="absolute left-[60%] top-1/2 -translate-y-1/2 flex h-[60px] w-[60px] items-center justify-center rounded-[16px] border border-brand-red/40 bg-gradient-to-b from-[#2a080a] to-[#120405] shadow-[0_0_30px_rgba(252,0,17,0.2)]">
                  <svg className="w-7 h-7 text-brand-red" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
                </div>
                <div className="absolute left-[82%] top-1/2 -translate-y-1/2 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-white/[0.08] bg-[#141414] shadow-lg">
                  <div className="w-5 h-5 rounded-[4px] bg-brand-red/80"></div>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: GEO Dashboard (col-span-1) - Graphic at TOP, Text at BOTTOM */}
          <article
            className="reveal relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            style={{ ['--i' as string]: 3 }}
          >
            <div className="relative flex-1 w-full flex flex-col items-center justify-center min-h-[220px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
              
              {/* Graphic: Glowing Line Chart */}
              <div className="relative w-full h-full flex items-center justify-center mt-6">
                <svg className="absolute w-[80%] h-[120px] top-[120px]" viewBox="0 0 200 120" fill="none" preserveAspectRatio="none">
                  {/* Background grid line */}
                  <line x1="100" y1="0" x2="100" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  {/* Faded line */}
                  <path d="M0,80 Q50,20 100,50 T200,30" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  {/* Highlight line */}
                  <path d="M0,80 Q50,20 100,50" stroke="#fc0011" strokeWidth="2" />
                  <circle cx="100" cy="50" r="4" fill="#fc0011" stroke="#0e0e0e" strokeWidth="2" />
                </svg>

                {/* Tooltip & Arrow */}
                <div className="absolute top-[20px] rounded-full border border-white/10 bg-[#1f1f1f] px-3 py-1.5 text-[11px] font-medium text-white shadow-lg">
                  Insight Updated
                </div>
                <svg className="absolute top-[85px] left-[52%] w-4 h-4 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 2L2 9.5l9 3 3 9L22 2z" />
                </svg>
              </div>
            </div>

            <div className="relative z-10 p-8 pt-0 lg:p-10 lg:pt-0 text-left mt-auto">
              <h3 className="text-[19px] lg:text-[21px] font-bold text-white mb-2">GEO 대시보드</h3>
              <p className="text-[13px] lg:text-[14px] leading-relaxed text-ink-400 font-medium">
                AI 가시성 점수, 인용률, 경쟁사 SOV. 부서별 현황을 하나의 화면으로 조망합니다.
              </p>
            </div>
          </article>

          {/* Row 2: Card 3, 4, 5 (all spanning 1 col, graphic TOP, text BOTTOM) */}
          
          {/* Card 3: Entity Probe */}
          <article
            className="reveal relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            style={{ ['--i' as string]: 4 }}
          >
            <div className="relative flex-1 w-full min-h-[220px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(252,0,17,0.05),transparent_70%)] pointer-events-none" />
              
              {/* Graphic: Concentric Rings */}
              <div className="relative flex items-center justify-center w-full h-[250px] mt-4">
                <div className="absolute w-[180px] h-[180px] rounded-full border border-white/[0.04]" />
                <div className="absolute w-[120px] h-[120px] rounded-full border border-white/[0.08]" />
                <div className="absolute w-[60px] h-[60px] rounded-full border border-brand-red/30 bg-brand-red/5 flex items-center justify-center text-brand-red shadow-[0_0_20px_rgba(252,0,17,0.1)]">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/></svg>
                </div>
                {/* Floating nodes */}
                <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-white/40" />
                <div className="absolute bottom-[25%] right-[25%] w-3 h-3 rounded-full bg-white/20" />
                <div className="absolute top-[40%] right-[15%] w-[6px] h-[6px] rounded-full bg-brand-red/70 shadow-[0_0_10px_rgba(252,0,17,0.8)]" />
              </div>
            </div>

            <div className="relative z-10 p-8 pt-0 lg:p-10 lg:pt-0 text-left mt-auto">
              <h3 className="text-[19px] lg:text-[21px] font-bold text-white mb-2">엔티티 회침기</h3>
              <p className="text-[13px] lg:text-[14px] leading-relaxed text-ink-400 font-medium">
                LLM에게 직접 묻는 지식공백 진단기. AI가 브랜드에 대해 무엇을 아는지 확인합니다.
              </p>
            </div>
          </article>

          {/* Card 4: Intent Compass */}
          <article
            className="reveal relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            style={{ ['--i' as string]: 5 }}
          >
            <div className="relative flex-1 w-full min-h-[220px] flex flex-col items-center justify-start pt-10">
              <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none" />
              
              {/* Graphic: Vertical Flowchart */}
              <div className="flex gap-2.5 mb-8 opacity-30">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full border border-white bg-transparent" />
                ))}
              </div>
              
              <div className="relative flex flex-col items-center gap-3 w-full px-10">
                <div className="absolute top-2 bottom-2 w-px bg-white/10" />
                <div className="relative rounded-[8px] border border-white/10 bg-[#161616] px-5 py-2 text-[12px] font-medium text-white/50 w-[140px] text-center z-10">추천 쿼리 진단</div>
                <div className="relative rounded-[8px] border border-brand-red/40 bg-[#250a0a] px-5 py-2 text-[12px] font-semibold text-brand-red/90 w-[160px] text-center z-10 shadow-[0_0_15px_rgba(252,0,17,0.15)]">
                  인텐트 패스 분석
                  <svg className="absolute -bottom-2 -left-2 w-4 h-4 text-brand-red" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 2L2 9.5l9 3 3 9L22 2z" />
                  </svg>
                </div>
                <div className="relative rounded-[8px] border border-white/10 bg-[#161616] px-5 py-2 text-[12px] font-medium text-white/50 w-[140px] text-center z-10">매핑 최적화</div>
              </div>
            </div>

            <div className="relative z-10 p-8 pt-0 lg:p-10 lg:pt-0 text-left mt-auto">
              <h3 className="text-[19px] lg:text-[21px] font-bold text-white mb-2">인텐트 나침반</h3>
              <p className="text-[13px] lg:text-[14px] leading-relaxed text-ink-400 font-medium">
                인텐트별 인용률 히트맵. 어느 인텐트가 강하고 공백인지 우선순위 지도를 설계합니다.
              </p>
            </div>
          </article>

          {/* Card 5: Content Forge */}
          <article
            className="reveal relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            style={{ ['--i' as string]: 6 }}
          >
            <div className="relative flex-1 w-full min-h-[220px] flex items-center justify-center pt-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />
              
              {/* Graphic: Document / Profile Card */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[16px] border border-white/[0.08] bg-[#1a1a1a] shadow-xl mb-4">
                  <svg className="w-7 h-7 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-[14px] font-semibold text-white/90">포맷 엔진 활성화</div>
                <div className="text-[11px] text-brand-red/90 mt-1 mb-8 font-medium">AI 최적화 문서 • Ready</div>
                
                <svg className="w-[120px] h-[30px]" viewBox="0 0 120 30" fill="none" preserveAspectRatio="none">
                  <path d="M0,25 Q15,5 30,20 T60,15 T90,20 T120,10" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="relative z-10 p-8 pt-0 lg:p-10 lg:pt-0 text-left mt-auto">
              <h3 className="text-[19px] lg:text-[21px] font-bold text-white mb-2">GEO 콘텐츠 생성기</h3>
              <p className="text-[13px] lg:text-[14px] leading-relaxed text-ink-400 font-medium">
                인텐트에 맞는 포맷으로 콘텐츠 타겟 분기 생성. JSON-LD와 스키마를 완벽히 준수합니다.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
