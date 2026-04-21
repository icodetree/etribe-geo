import { useRef } from 'react';
import { Eyebrow } from '../components/ui/Eyebrow';
import { motion, useScroll, useTransform } from 'motion/react';

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

function ConceptRow({ concept: c, index: i }: { concept: (typeof CONCEPTS)[number]; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isEven = i % 2 === 1;
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start 85%', 'start 35%'],
  });

  // Text slides in from its side, graphic slides in from the opposite side
  const dir = isEven ? -1 : 1;
  const textX = useTransform(scrollYProgress, [0, 1], [-60 * dir, 0]);
  const graphicX = useTransform(scrollYProgress, [0, 1], [60 * dir, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const graphicOpacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <div
      ref={rowRef}
      key={c.eng}
      role="region"
      aria-label={`${c.eng} 정의`}
      className={`reveal flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20 ${
        isEven ? 'lg:flex-row-reverse' : ''
      }`}
      style={{ ['--i' as string]: i + 2 }}
    >
      {/* Text Block — parallax: slides up from below */}
      <motion.div
        className={`flex-1 lg:w-1/2 flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}
        style={{ x: textX, opacity: textOpacity }}
      >
        <dt className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-3">
          {c.kor}
        </dt>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-6 mt-1">
          {c.label}
        </p>
        <dd className="text-xl font-medium text-white/90 mb-5 break-keep">
          {c.lead}
        </dd>
        <dd className="text-base text-white/60 leading-relaxed max-w-md break-keep">
          {c.body}
        </dd>
      </motion.div>

      {/* Abstract Graphic Block — parallax: slides down from above */}
      <motion.div
        className={`flex-1 lg:w-1/2 flex ${i === 0 ? 'justify-center lg:justify-end' : i === 1 ? 'justify-center lg:justify-start' : 'justify-center lg:justify-end'}`}
        style={{ x: graphicX, opacity: graphicOpacity }}
      >
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 group">
          {/* Glowing background blob */}
          <div className="absolute inset-10 bg-brand-red/20 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

          {/* === Entity visual === */}
          {i === 0 && (
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-white/[0.06]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-white/[0.10]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/[0.08]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-brand-red/40 bg-brand-red/10 shadow-[0_0_30px_rgba(252,0,17,0.2)] flex items-center justify-center z-10 transition-shadow duration-700 group-hover:shadow-[0_0_50px_rgba(252,0,17,0.35)]">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-brand-red shadow-[0_0_12px_rgba(252,0,17,0.8)]" />
              </div>
              <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center"><span className="text-[10px] sm:text-[11px] font-semibold text-white/50">I</span></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center"><span className="text-[10px] sm:text-[11px] font-semibold text-white/50">L</span></div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
              </motion.div>
              <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 pointer-events-none" animate={{ rotate: -360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-brand-red/25 bg-brand-red/[0.06] backdrop-blur-sm flex items-center justify-center"><span className="text-[10px] sm:text-[11px] font-semibold text-brand-red/70">S</span></div>
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center"><span className="text-[10px] sm:text-[11px] font-semibold text-white/50">A</span></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-brand-red shadow-[0_0_12px_rgba(252,0,17,0.6)]" />
              </motion.div>
              <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center"><span className="text-[10px] sm:text-[11px] font-semibold text-white/50">C</span></div>
              </motion.div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 384 384">
                <line x1="192" y1="192" x2="192" y2="32" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
                <line x1="192" y1="192" x2="352" y2="192" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
                <line x1="192" y1="192" x2="192" y2="352" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
                <line x1="192" y1="192" x2="32" y2="192" stroke="white" strokeOpacity="0.06" strokeWidth="1" />
              </svg>
            </>
          )}

          {/* === Intent visual === */}
          {i === 1 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 flex flex-col gap-4">
              <div className="relative rounded-2xl border border-white/10 bg-[#161616] backdrop-blur-xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.06]">
                  <div className="w-[7px] h-[7px] rounded-full bg-white/10" />
                  <div className="w-[7px] h-[7px] rounded-full bg-white/10" />
                  <div className="w-[7px] h-[7px] rounded-full bg-white/10" />
                  <span className="ml-2 text-[10px] font-medium text-white/20 tracking-wide">AI PROMPT</span>
                </div>
                <div className="px-5 py-5 sm:px-6 sm:py-6 flex flex-col gap-4">
                  {[
                    { text: '"강남 맛집 추천해줘"', times: [0, 0.02, 0.05, 0.28, 0.33, 1] },
                    { text: '"A사 vs B사 비교해줘"', times: [0, 0.30, 0.35, 0.60, 0.65, 1] },
                    { text: '"가격 얼마야?"', times: [0, 0.62, 0.67, 0.90, 0.95, 1] },
                  ].map((line) => (
                    <motion.div key={line.text} className="flex items-start gap-2.5" animate={{ opacity: [0.4, 0.4, 1, 1, 0.4, 0.4] }} transition={{ duration: 7.5, repeat: Infinity, times: line.times, ease: 'easeInOut' }}>
                      <motion.div className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" animate={{ backgroundColor: ['rgba(255,255,255,0.25)','rgba(255,255,255,0.25)','#fc0011','#fc0011','rgba(255,255,255,0.25)','rgba(255,255,255,0.25)'], boxShadow: ['0 0 0px rgba(252,0,17,0)','0 0 0px rgba(252,0,17,0)','0 0 8px rgba(252,0,17,0.6)','0 0 8px rgba(252,0,17,0.6)','0 0 0px rgba(252,0,17,0)','0 0 0px rgba(252,0,17,0)'] }} transition={{ duration: 7.5, repeat: Infinity, times: line.times, ease: 'easeInOut' }} />
                      <motion.span className="text-[13px] sm:text-[14px] font-medium leading-snug" animate={{ color: ['rgba(255,255,255,0.35)','rgba(255,255,255,0.35)','rgba(255,255,255,0.90)','rgba(255,255,255,0.90)','rgba(255,255,255,0.35)','rgba(255,255,255,0.35)'] }} transition={{ duration: 7.5, repeat: Infinity, times: line.times, ease: 'easeInOut' }}>{line.text}</motion.span>
                    </motion.div>
                  ))}
                </div>
                <div className="mx-4 mb-4 sm:mx-5 sm:mb-5 flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-2.5">
                  <div className="w-0.5 h-4 bg-white/30 animate-pulse" />
                  <span className="text-[12px] text-white/20 font-medium">질문을 입력하세요…</span>
                  <svg className="ml-auto w-4 h-4 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                {['Recommend', 'Compare', 'Price'].map((label, idx) => (
                  <motion.div key={label} className="px-3 py-1 rounded-full border text-[10px] sm:text-[11px] font-semibold tracking-wide" animate={{ borderColor: ['rgba(255,255,255,0.08)','rgba(255,255,255,0.08)','rgba(252,0,17,0.4)','rgba(252,0,17,0.4)','rgba(255,255,255,0.08)','rgba(255,255,255,0.08)'], color: ['rgba(255,255,255,0.25)','rgba(255,255,255,0.25)','#fc0011','#fc0011','rgba(255,255,255,0.25)','rgba(255,255,255,0.25)'] }} transition={{ duration: 7.5, repeat: Infinity, times: idx === 0 ? [0,0.02,0.05,0.28,0.33,1] : idx === 1 ? [0,0.30,0.35,0.60,0.65,1] : [0,0.62,0.67,0.90,0.95,1], ease: 'easeInOut' }}>{label}</motion.div>
                ))}
              </div>
            </div>
          )}

          {/* === GEO visual === */}
          {i === 2 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-72 flex flex-col gap-3 sm:gap-3.5">
              {[
                { label: 'Brand Name', delay: 0 },
                { label: 'Service Info', delay: 1.2 },
                { label: 'Competitor Context', delay: 2.4 },
                { label: 'Pricing Data', delay: 3.6 },
              ].map((slot) => (
                <div key={slot.label} className="relative">
                  <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.01] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between">
                    <span className="text-[11px] sm:text-[12px] font-medium text-white/15 tracking-wide">{slot.label}</span>
                    <span className="text-[10px] text-white/10">?</span>
                  </div>
                  <motion.div className="absolute inset-0 rounded-xl border border-white/15 bg-[#161616] px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between" initial={false} animate={{ opacity: [0,0,1,1,1,0], scale: [0.96,0.96,1,1,1,0.96] }} transition={{ duration: 8, repeat: Infinity, delay: slot.delay, times: [0,0.08,0.15,0.55,0.62,0.70], ease: 'easeOut' }}>
                    <span className="text-[11px] sm:text-[12px] font-semibold text-white/70 tracking-wide">{slot.label}</span>
                    <motion.svg className="w-3.5 h-3.5 text-brand-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" animate={{ opacity: [0,0,1,1,1,0], scale: [0.5,0.5,1,1,1,0.5] }} transition={{ duration: 8, repeat: Infinity, delay: slot.delay, times: [0,0.12,0.20,0.55,0.62,0.70], ease: 'easeOut' }}><path d="M20 6L9 17l-5-5" /></motion.svg>
                  </motion.div>
                </div>
              ))}
              <div className="mt-1 flex items-center gap-3">
                <div className="flex-1 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-red/80 to-brand-red" animate={{ width: ['0%','25%','50%','75%','100%','100%','0%'] }} transition={{ duration: 8, repeat: Infinity, times: [0,0.15,0.30,0.45,0.60,0.75,0.80], ease: 'easeInOut' }} />
                </div>
                <motion.span className="text-[11px] font-semibold tabular-nums w-8 text-right" animate={{ color: ['rgba(255,255,255,0.3)','rgba(255,255,255,0.5)','rgba(255,255,255,0.5)','#fc0011','#fc0011','rgba(255,255,255,0.3)'] }} transition={{ duration: 8, repeat: Infinity, times: [0,0.15,0.45,0.60,0.75,0.80], ease: 'easeInOut' }}>GEO</motion.span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export function Definition() {
  return (
    <section
      id="definition"
      className="relative overflow-hidden bg-gradient-to-b from-ink-950 via-[#2a0505] to-ink-950 py-28 sm:py-32 lg:py-48"
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
        <dl className="flex flex-col gap-10 lg:gap-20">
          {CONCEPTS.map((c, i) => (
            <ConceptRow key={c.eng} concept={c} index={i} />
          ))}
        </dl>
      </div>
    </section>
  );
}
