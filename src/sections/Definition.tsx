import { Eyebrow } from '../components/ui/Eyebrow';

const CONCEPTS = [
  {
    eng: 'Entity',
    kor: '엔티티',
    label: 'KNOWLEDGE GRAPH',
    lead: 'AI 지식그래프 안에 존재하는 "것"',
    body: 'AI가 브랜드에 대해 알고 있는 것 전체. 이름, 속성, 연결된 정보, 맥락까지 — 하나의 노드로 조직된 우리 브랜드의 디지털 기억입니다.',
  },
  {
    eng: 'Intent',
    kor: '인텐트',
    label: 'USER SEARCH CONTEXT',
    lead: '사용자가 AI에게 원하는 행위',
    body: '"추천해줘", "비교해줘", "가격 알려줘" — 우리가 등장해야 할 순간. 고객의 질문을 먼저 설계하는 사람이 답변을 설계합니다.',
  },
  {
    eng: 'GEO',
    kor: 'GEO',
    label: 'GENERATIVE OPTIMIZATION',
    lead: '인텐트에 맞게 엔티티를 채우는 작업',
    body: 'AI의 지식 공백을 우리 정보로 채워, 답변 안에 우리가 포함되도록 설계합니다. 검색 엔진이 아닌 생성 엔진을 위한 완벽한 최적화입니다.',
  },
];

export function Definition() {
  return (
    <section
      id="definition"
      className="relative overflow-hidden bg-gradient-to-b from-ink-950 via-[#450a0a] to-ink-950 py-28 sm:py-32 lg:py-48"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 lg:mb-40">
          <Eyebrow>Definition</Eyebrow>
          <h2
            className="reveal max-w-4xl text-4xl leading-[1.15] font-semibold tracking-tight break-keep text-white sm:text-5xl lg:text-[3.75rem]"
            style={{ ['--i' as string]: 0 }}
          >
            <span className="font-display font-extrabold text-brand-red mr-2">
              GEO.
            </span>
            Generative Engine Optimization.
          </h2>
          <p
            className="reveal max-w-2xl text-base leading-relaxed text-white/60 break-keep sm:text-lg"
            style={{ ['--i' as string]: 1 }}
          >
            SEO가 검색엔진 순위를 관리하듯, GEO는 AI 답변 안에서의 브랜드
            위치를 관리합니다.<br /> 세 가지 핵심 개념을 소개합니다.
          </p>
        </div>

        {/* Alternating Open Layout Rows */}
        <div className="flex flex-col gap-32 lg:gap-40">
          {CONCEPTS.map((c, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={c.eng}
                className={`reveal flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ ['--i' as string]: i + 2 }}
              >
                {/* Text Block */}
                <div className={`flex-1 lg:w-1/2 flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-3">
                    {c.kor}
                  </h3>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-6 mt-1">
                    {c.label}
                  </p>
                  <p className="text-xl font-medium text-white/90 mb-5 break-keep">
                    {c.lead}
                  </p>
                  <p className="text-base text-white/60 leading-relaxed max-w-md break-keep">
                    {c.body}
                  </p>
                </div>

                {/* Abstract Graphic Block */}
                <div className="flex-1 lg:w-1/2 flex justify-center">
                  <div className="relative w-72 h-72 sm:w-96 sm:h-96 group">
                    {/* Glowing background blob */}
                    <div className="absolute inset-10 bg-brand-red/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                    
                    {/* Glass shapes composing an abstract 3D-like object */}
                    {i === 0 && (
                      // Entity visual (Cube-ish structure)
                      <>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 bg-gradient-to-br from-white/20 to-white/5 border border-white/30 backdrop-blur-md rounded-2xl rotate-12 transition-transform duration-700 group-hover:rotate-45" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-bl from-white/30 to-transparent border border-white/20 backdrop-blur-xl rounded-full -rotate-12 transition-transform duration-700 group-hover:-rotate-45" />
                      </>
                    )}
                    {i === 1 && (
                      // Intent visual (Floating layered planes)
                      <>
                        <div className="absolute top-[10%] left-[10%] w-36 h-48 sm:w-44 sm:h-60 bg-gradient-to-tr from-white/10 to-white/5 border-t border-l border-white/20 backdrop-blur-lg rounded-xl -rotate-12 transition-transform duration-700 group-hover:-translate-y-4" />
                        <div className="absolute top-[20%] left-[25%] w-36 h-48 sm:w-44 sm:h-60 bg-gradient-to-bl from-brand-red/20 to-transparent border border-white/10 backdrop-blur-md rounded-xl rotate-6 transition-transform duration-700 group-hover:translate-x-4" />
                        <div className="absolute top-[30%] left-[40%] w-36 h-48 sm:w-44 sm:h-60 bg-gradient-to-br from-white/30 to-white/0 border border-white/30 backdrop-blur-2xl rounded-xl rotate-12 transition-transform duration-700 group-hover:translate-y-4 group-hover:rotate-0" />
                      </>
                    )}
                    {i === 2 && (
                      // GEO visual (Intersecting ring/sphere)
                      <>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 border-[12px] sm:border-[16px] border-white/10 backdrop-blur-md rounded-full rotate-[60deg] transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-52 sm:h-52 bg-gradient-to-tr from-brand-red/40 to-white/10 border border-white/30 backdrop-blur-xl rounded-full shadow-[inset_0_20px_40px_rgba(255,255,255,0.2)] transition-transform duration-700 group-hover:rotate-90" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
