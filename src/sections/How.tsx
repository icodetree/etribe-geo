import {
  Activity,
  Compass,
  Layers,
  Code2,
  LineChart,
} from 'lucide-react';
import { Eyebrow } from '../components/ui/Eyebrow';

const STEPS = [
  {
    n: '01',
    icon: Activity,
    title: '진단',
    lead: '현재 AI 가시성 측정',
    body: '플랫폼별 인용률, SOV, 경쟁사 점유율을 수치화합니다. 추측이 아닌 크롤링 기반 실측 리포트.',
  },
  {
    n: '02',
    icon: Compass,
    title: '인텐트 설계',
    lead: '노출되어야 할 쿼리 정의',
    body: '추천 / 비교 / 가격 / 정보탐색 / 제안. 우리 카테고리에서 가장 중요한 질문 5계열을 먼저 설계합니다.',
  },
  {
    n: '03',
    icon: Layers,
    title: '엔티티 구축',
    lead: '인텐트별 GEO 콘텐츠 생성',
    body: '통계·출처·수치 — AI가 신뢰하는 방식으로 작성합니다. FAQ, 비교표, 데이터카드, 가이드 문서.',
  },
  {
    n: '04',
    icon: Code2,
    title: '기술 최적화',
    lead: 'AI가 읽을 수 있게',
    body: 'Schema.org JSON-LD, Canonical, Sitemap. 콘텐츠가 아무리 좋아도 기술이 빠지면 AI가 읽지 못합니다.',
  },
  {
    n: '05',
    icon: LineChart,
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
            GEO는 <span className="display-italic text-brand-500">5단계</span>로
            작동합니다.
          </h2>
        </div>

        {/* Desktop: horizontal stepper with connecting line */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute top-10 right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <ol className="grid grid-cols-5 gap-6">
              {STEPS.map((s, i) => (
                <li
                  key={s.n}
                  className="reveal relative"
                  style={{ ['--i' as string]: i + 1 }}
                >
                  <div className="flex flex-col items-start">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-ink-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <s.icon
                        className="h-6 w-6 text-brand-500"
                        strokeWidth={1.5}
                      />
                      <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 font-mono text-[11px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(229,38,44,0.8)]">
                        {s.n}
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold tracking-tight text-white">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-brand-500/90">
                      {s.lead}
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed break-keep text-ink-400">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="mt-14 space-y-4 lg:hidden">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
              style={{ ['--i' as string]: i + 1 }}
            >
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/10 ring-1 ring-brand-500/20">
                    <s.icon
                      className="h-5 w-5 text-brand-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-ink-400">
                      {s.n}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand-500/90">
                    {s.lead}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed break-keep text-ink-400">
                    {s.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
