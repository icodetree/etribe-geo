import { Eyebrow } from '../components/ui/Eyebrow';
import { motion } from 'motion/react';

const CONCEPTS = [
  {
    eng: 'Entity',
    kor: '엔티티',
    label: 'KNOWLEDGE GRAPH',
    lead: 'AI 지식그래프 안에 존재하는 "것"',
    body: 'AI가 브랜드에 대해 알고 있는 것 전체. 이름, 속성, 연결된 정보, 맥락까지 -  하나의 노드로 조직된 우리 브랜드의 디지털 기억입니다.',
  },
  {
    eng: 'Intent',
    kor: '인텐트',
    label: 'USER SEARCH CONTEXT',
    lead: '사용자가 AI에게 원하는 행위',
    body: '"추천해줘", "비교해줘", "가격 알려줘" - 우리가 등장해야 할 순간. 고객의 질문을 먼저 설계하는 사람이 답변을 설계합니다.',
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
        <div className="flex flex-col gap-10 lg:gap-20">
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
                <div className={`flex-1 lg:w-1/2 flex ${i === 0 ? 'justify-center lg:justify-end' : 'justify-center'}`}>
                  <div className="relative w-72 h-72 sm:w-96 sm:h-96 group">
                    {/* Glowing background blob */}
                    <div className="absolute inset-10 bg-brand-red/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                    
                    {/* Glass shapes composing an abstract 3D-like object */}
                    {i === 0 && (
                      // Entity visual — Knowledge Graph Node
                      <>
                        {/* Outer orbit ring */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-white/[0.06]" />
                        {/* Mid orbit ring */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-white/[0.10]" />
                        {/* Inner orbit ring */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/[0.08]" />

                        {/* Center Core — brand entity */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-brand-red/40 bg-brand-red/10 shadow-[0_0_30px_rgba(252,0,17,0.2)] flex items-center justify-center z-10 transition-shadow duration-700 group-hover:shadow-[0_0_50px_rgba(252,0,17,0.35)]">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-brand-red shadow-[0_0_12px_rgba(252,0,17,0.8)]" />
                        </div>

                        {/* Outer orbit — rotating attribute nodes */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        >
                          {/* Node: I (Industry) */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center">
                            <span className="text-[10px] sm:text-[11px] font-semibold text-white/50">I</span>
                          </div>
                          {/* Node: L (Location) */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center">
                            <span className="text-[10px] sm:text-[11px] font-semibold text-white/50">L</span>
                          </div>
                          {/* Node: dot */}
                          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
                          {/* Node: dot */}
                          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
                        </motion.div>

                        {/* Mid orbit — counter-rotating nodes */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 pointer-events-none"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                        >
                          {/* Node: S (Service) */}
                          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-brand-red/25 bg-brand-red/[0.06] backdrop-blur-sm flex items-center justify-center">
                            <span className="text-[10px] sm:text-[11px] font-semibold text-brand-red/70">S</span>
                          </div>
                          {/* Node: A (Attribute) */}
                          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center">
                            <span className="text-[10px] sm:text-[11px] font-semibold text-white/50">A</span>
                          </div>
                          {/* Node: red dot */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-brand-red shadow-[0_0_12px_rgba(252,0,17,0.6)]" />
                        </motion.div>

                        {/* Inner orbit — slow rotation */}
                        <motion.div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        >
                          {/* Node: C (Context) */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center">
                            <span className="text-[10px] sm:text-[11px] font-semibold text-white/50">C</span>
                          </div>
                        </motion.div>

                        {/* Connecting lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 384 384">
                          <line x1="192" y1="192" x2="192" y2="32" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
                          <line x1="192" y1="192" x2="352" y2="192" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
                          <line x1="192" y1="192" x2="192" y2="352" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
                          <line x1="192" y1="192" x2="32" y2="192" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
                        </svg>
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
