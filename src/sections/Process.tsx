import { Eyebrow } from '../components/ui/Eyebrow';

const PHASES = [
  {
    duration: '1–2일',
    title: '진단',
    body: 'AI 가시성 진단. 인용률·SOV·경쟁사 점유율 측정.',
    deliverable: '현황 리포트',
  },
  {
    duration: '1–10일',
    title: '설계',
    body: '인텐트 맵 설계. 우선순위 쿼리 확정.',
    deliverable: '인텐트 맵 + 콘텐츠 플랜',
  },
  {
    duration: '5일',
    title: '구현',
    body: '기술 최적화 + GEO 콘텐츠 1차 배포.',
    deliverable: '스키마 · 페이지 · 가이드',
  },
  {
    duration: '9주~',
    title: '이행',
    body: '모니터링 시스템 가동, 주간 사이클 내재화.',
    deliverable: '대시보드 + 주간 리포트',
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative border-y border-white/5 bg-ink-900/40 py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>Engagement</Eyebrow>
          <h2
            className="reveal max-w-3xl text-4xl leading-[1.15] font-semibold tracking-tight break-keep text-white sm:text-5xl lg:text-[3.25rem]"
            style={{ ['--i' as string]: 0 }}
          >
            이렇게 <span className="display-italic text-brand-500">함께</span>{' '}
            일합니다.
          </h2>
          <p
            className="reveal max-w-2xl text-base leading-relaxed text-ink-400 break-keep sm:text-lg"
            style={{ ['--i' as string]: 1 }}
          >
            4개의 단계로 구성된 engagement. 진단부터 내재화까지 약 11–12주 내
            궤도에 올립니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {PHASES.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04] sm:p-8"
              style={{ ['--i' as string]: i + 2 }}
            >
              <h3 className="text-3xl font-semibold tracking-tight text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-[13px] font-medium tracking-wide text-ink-300">
                {p.duration}
              </p>

              <p className="mt-6 text-[14px] leading-relaxed break-keep text-ink-400">
                {p.body}
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-[10px] font-medium tracking-[0.22em] text-ink-400 uppercase">
                  Deliverable
                </p>
                <p className="mt-1.5 text-[13px] font-medium text-white break-keep">
                  {p.deliverable}
                </p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
