import {
  Workflow,
  Gauge,
  MessageSquareQuote,
  Target,
  FileText,
} from 'lucide-react';
import { Eyebrow } from '../components/ui/Eyebrow';

type Tool = {
  code: string;
  title: string;
  eng: string;
  lead: string;
  body: string;
  icon: typeof Workflow;
  span: string;
  accent?: boolean;
};

const TOOLS: Tool[] = [
  {
    code: '01',
    title: 'MARS',
    eng: 'Multi Agent Recipe System',
    lead: 'GEO 운영을 자동화한 멀티에이전트 파이프라인',
    body: '크롤링 → AI 가시성 분석 → SOV 분석 → 기술진단 → 레포트. 사람이 하던 14일을 48시간으로 압축합니다.',
    icon: Workflow,
    span: 'md:col-span-6 lg:col-span-4 lg:row-span-2',
    accent: true,
  },
  {
    code: '02',
    title: 'GEO 대시보드',
    eng: 'Monitoring Console',
    lead: 'AI 가시성 점수 · 플랫폼별 인용률 · 경쟁사 SOV',
    body: '부서별 현황까지 한 화면. 숫자로 보고, 숫자로 움직입니다.',
    icon: Gauge,
    span: 'md:col-span-6 lg:col-span-2',
  },
  {
    code: '03',
    title: '엔티티 회침기',
    eng: 'Entity Probe',
    lead: 'LLM에게 직접 묻는 지식공백 진단기',
    body: 'AI가 우리 브랜드에 대해 무엇을 알고, 무엇을 모르는지. 공백을 드러내야 채울 수 있습니다.',
    icon: MessageSquareQuote,
    span: 'md:col-span-6 lg:col-span-3',
  },
  {
    code: '04',
    title: '인텐트 나침반',
    eng: 'Intent Compass',
    lead: '인텐트별 인용률 히트맵',
    body: '어느 인텐트가 강하고 어디가 공백인지 한눈에. 우선순위는 지도가 결정합니다.',
    icon: Target,
    span: 'md:col-span-6 lg:col-span-3',
  },
  {
    code: '05',
    title: 'GEO 콘텐츠 생성기',
    eng: 'Content Forge',
    lead: '인텐트 선택 → 포맷 자동 분기 → GEO 최적화 콘텐츠 생성',
    body: '정보탐색=설명서 · 추천=FAQ · 비교=비교표 · 가격=데이터테이블. 인텐트가 포맷을 정합니다.',
    icon: FileText,
    span: 'md:col-span-6 lg:col-span-6',
  },
];

export function Tools() {
  return (
    <section id="tools" className="relative py-28 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>Built In-House</Eyebrow>
            <h2
              className="reveal mt-6 text-4xl leading-[1.15] font-semibold tracking-tight break-keep text-white sm:text-5xl lg:text-[3.25rem]"
              style={{ ['--i' as string]: 0 }}
            >
              제안하기 전에, 직접 만들어
              <br />
              <span className="display-italic text-brand-500">운영</span>했습니다.
            </h2>
          </div>
          <p
            className="reveal max-w-md text-base leading-relaxed text-ink-400 break-keep sm:text-lg"
            style={{ ['--i' as string]: 1 }}
          >
            eTribe AX Force는 GEO를 클라이언트에 제안하기 전, 자체 시스템을
            먼저 구축하고 실측 데이터를 축적했습니다. 이 다섯 가지 도구가
            그 증거입니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5 lg:mt-20 lg:grid-cols-6 lg:grid-rows-2 lg:gap-5">
          {TOOLS.map((t, i) => (
            <article
              key={t.code}
              className={`reveal group relative overflow-hidden rounded-[28px] border p-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                t.accent
                  ? 'border-brand-500/30 bg-gradient-to-br from-brand-500/12 via-brand-500/4 to-transparent hover:border-brand-500/50'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
              } ${t.span}`}
              style={{ ['--i' as string]: i + 2 }}
            >
              <div
                className={`relative flex h-full flex-col justify-between gap-8 rounded-[22px] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8 ${
                  t.accent
                    ? 'bg-gradient-to-b from-ink-950/20 via-ink-950/50 to-ink-950/80'
                    : 'bg-gradient-to-b from-white/[0.03] to-transparent'
                }`}
              >
                <header className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      t.accent
                        ? 'bg-brand-500/15 ring-1 ring-brand-500/30'
                        : 'bg-white/5 ring-1 ring-white/10'
                    }`}
                  >
                    <t.icon
                      className={`h-5 w-5 ${
                        t.accent ? 'text-brand-500' : 'text-white'
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-mono text-[11px] text-ink-400">
                    / {t.code}
                  </span>
                </header>

                <div>
                  <p className="font-display text-xs tracking-[0.3em] text-ink-400 uppercase">
                    {t.eng}
                  </p>
                  <h3
                    className={`mt-3 leading-tight font-semibold tracking-tight break-keep ${
                      t.accent
                        ? 'text-3xl sm:text-4xl lg:text-[3rem]'
                        : 'text-2xl sm:text-[1.6rem]'
                    } text-white`}
                  >
                    {t.title}
                  </h3>
                  <p
                    className={`mt-4 font-medium break-keep ${
                      t.accent ? 'text-lg text-white sm:text-xl' : 'text-[15px] text-ink-100'
                    }`}
                  >
                    {t.lead}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed break-keep text-ink-400">
                    {t.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
