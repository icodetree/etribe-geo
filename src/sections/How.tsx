import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import type { MotionValue } from 'motion/react';
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

const HEIGHTS = ['h-[45%]', 'h-[55%]', 'h-[70%]', 'h-[85%]', 'h-[100%]'];
const Z_INDICES = [50, 40, 30, 20, 10];

function GrowBar({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof STEPS)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Staggered scaleY: each bar starts growing at a different scroll point
  const staggerStart = index * 0.06;
  const scaleY = useTransform(progress, [staggerStart, staggerStart + 0.4], [0, 1], { clamp: true });
  const contentOpacity = useTransform(progress, [staggerStart + 0.15, staggerStart + 0.35], [0, 1], { clamp: true });
  const labelOpacity = useTransform(progress, [staggerStart, staggerStart + 0.15], [0, 1], { clamp: true });

  const overlapClass = index < total - 1 ? '-mr-6 lg:-mr-8' : '';

  return (
    <div
      className={`relative flex-1 flex flex-col justify-end ${HEIGHTS[index]} ${overlapClass}`}
      style={{ zIndex: Z_INDICES[index] }}
    >
      {/* Floating Step Number Label */}
      <motion.div className="absolute -top-10 left-0 w-full text-center" style={{ opacity: labelOpacity }}>
        <span className="text-xl lg:text-2xl font-bold tracking-tight text-white/90">
          Step 0{index + 1}
        </span>
      </motion.div>

      {/* Glass Bar — grows via scaleY from bottom */}
      <motion.div
        className="relative w-full h-full rounded-t-[28px] border-t border-x border-white/10 bg-white/[0.02] transition-colors duration-500 hover:border-brand-red/90 hover:ring-[3px] hover:ring-brand-red/90 hover:bg-white/[0.04] hover:shadow-[0_-20px_40px_rgba(255,0,0,0.2)] group [mask-image:linear-gradient(to_bottom,black_calc(100%_-_30px),transparent_100%)] origin-bottom"
        style={{ scaleY }}
      >
        <motion.div
          className="relative w-full h-full flex flex-col items-center text-center rounded-t-[22px] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl p-5 lg:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_1px_5px_rgba(255,255,255,0.05)]"
          style={{ opacity: contentOpacity }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 pt-2 transition-transform duration-500 group-hover:scale-105 relative z-10">
            {step.title}
          </h3>
          <p className="text-[13px] sm:text-[15px] font-medium text-white/90 mb-5 lg:mb-6 break-keep relative z-10">
            {step.lead}
          </p>
          <p className="text-[12px] sm:text-sm text-ink-300 break-keep leading-relaxed pt-5 lg:pt-6 border-t border-white/10 w-[90%] mx-auto relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
            {step.body}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function How() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 30%', 'start -10%'],
  });

  return (
    <section
      ref={sectionRef}
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

        {/* Process Bar Chart — scroll-driven scaleY growth */}
        <div className="mt-8 w-full overflow-x-auto pt-16 pb-10 no-scrollbar">
          <div className="flex items-end h-[450px] lg:h-[650px] min-w-[1000px] lg:min-w-full px-2 lg:px-8">
            {STEPS.map((s, i) => (
              <GrowBar key={s.title} step={s} index={i} total={STEPS.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
