import { Check, Minus } from 'lucide-react';
import { Eyebrow } from '../components/ui/Eyebrow';

type Cell = boolean | string | 'partial';

type ColKey = 'brightedge' | 'geoptie' | 'etribe';

type Column = {
  key: ColKey;
  label: string;
  sub: string;
  accent?: boolean;
};

const COLS: ReadonlyArray<Column> = [
  { key: 'brightedge', label: '브라이트엣지', sub: 'SaaS · BII 지표' },
  { key: 'geoptie', label: 'Geoptie', sub: 'SaaS · 감사 툴킷' },
  {
    key: 'etribe',
    label: 'eTribe GEO',
    sub: '분석 + 실행 + 내재화',
    accent: true,
  },
];

const ROWS: Array<{
  category: string;
  metric: string;
  values: Record<ColKey, Cell>;
}> = [
  {
    category: '제품',
    metric: '형태',
    values: {
      brightedge: 'SaaS 분석 플랫폼',
      geoptie: 'SaaS 분석 + 감사 툴킷',
      etribe: '에이전시 (분석+실행+대행)',
    },
  },
  {
    category: '분석',
    metric: '가시성 분석 엔진',
    values: { brightedge: 'BII 지표', geoptie: '감사 점수', etribe: 'MARS 엔진' },
  },
  {
    category: '산출물',
    metric: '진단 리포트',
    values: { brightedge: '3종', geoptie: '감사 보고서', etribe: '커스텀 리포트' },
  },
  {
    category: '실행',
    metric: '콘텐츠 최적화 가이드',
    values: {
      brightedge: '전략 보고서',
      geoptie: '콘텐츠 검사기',
      etribe: '완성 가이드 문서',
    },
  },
  {
    category: '실행',
    metric: '실제 페이지 수정',
    values: { brightedge: false, geoptie: false, etribe: true },
  },
  {
    category: '설계',
    metric: '엔티티 설계 / 쿼리 생성',
    values: {
      brightedge: false,
      geoptie: 'partial',
      etribe: true,
    },
  },
  {
    category: '기술',
    metric: '구조화 데이터 적용',
    values: { brightedge: false, geoptie: false, etribe: '구축 Standard 이상' },
  },
  {
    category: '운영',
    metric: '지속 이행 대행',
    values: { brightedge: false, geoptie: false, etribe: true },
  },
  {
    category: '커버리지',
    metric: 'AI 플랫폼 수',
    values: { brightedge: '3개', geoptie: '6개', etribe: '4개' },
  },
  {
    category: '로컬',
    metric: '한국어 특화',
    values: {
      brightedge: false,
      geoptie: 'partial',
      etribe: '네이티브',
    },
  },
  {
    category: '가격',
    metric: '시작 가격대',
    values: {
      brightedge: '비공개',
      geoptie: '$41–$166',
      etribe: '99만–399만원',
    },
  },
];

function CellRender({ v, accent }: { v: Cell; accent?: boolean }) {
  if (v === true) {
    return (
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
          accent ? 'bg-brand-500 text-white' : 'bg-white/10 text-white'
        }`}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  }
  if (v === false) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.04] text-ink-400">
        <Minus className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
    );
  }
  if (v === 'partial') {
    return (
      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[12px] font-medium text-ink-300 ring-1 ring-white/10">
        <span className="h-1 w-1 rounded-full bg-amber-400" />
        부분
      </span>
    );
  }
  return (
    <span
      className={`text-[13px] font-medium break-keep sm:text-sm ${
        accent ? 'text-white' : 'text-ink-300'
      }`}
    >
      {v}
    </span>
  );
}

export function Positioning() {
  return (
    <section id="positioning" className="relative py-28 sm:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Positioning</Eyebrow>
            <h2
              className="reveal mt-6 text-4xl leading-[1.15] font-semibold tracking-tight break-keep text-white sm:text-5xl lg:text-[3.25rem]"
              style={{ ['--i' as string]: 0 }}
            >
              분석만 하는 도구는 많습니다.
            </h2>
            <p
              className="reveal mt-6 max-w-xl text-base leading-relaxed text-ink-400 break-keep sm:text-lg"
              style={{ ['--i' as string]: 1 }}
            >
              분석 결과를 실제 AI 가시성으로 연결하는 건 다른 문제입니다.
              분석 플랫폼 대비 에이전시 모델의 차이를 비교해보세요.
            </p>
          </div>
          <div
            className="reveal flex items-center gap-3 lg:col-span-5 lg:justify-end"
            style={{ ['--i' as string]: 2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-4 py-2 text-[13px] font-medium text-brand-500 ring-1 ring-brand-500/20">
              <span className="h-1.5 w-1.5 animate-[pulseRing_3s_ease-in-out_infinite] rounded-full bg-brand-500" />
              핵심 차별점 · 실행 대행
            </span>
          </div>
        </div>

        {/* Desktop Table */}
        <div
          className="reveal mt-14 hidden overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent lg:block"
          style={{ ['--i' as string]: 3 }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="w-[30%] px-6 py-5 text-left text-[11px] font-medium tracking-[0.22em] text-ink-400 uppercase">
                  항목
                </th>
                {COLS.map((c) => (
                  <th
                    key={c.key}
                    className={`w-[23%] px-6 py-5 text-left ${
                      c.accent ? 'bg-brand-500/[0.08]' : ''
                    }`}
                  >
                    <div className="flex flex-col items-start gap-1">
                      <span
                        className={`text-base font-semibold ${
                          c.accent ? 'text-brand-500' : 'text-white'
                        }`}
                      >
                        {c.label}
                      </span>
                      <span className="text-[11px] tracking-wide text-ink-400">
                        {c.sub}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr
                  key={r.metric}
                  className="border-t border-white/[0.06] transition-colors hover:bg-white/[0.015]"
                >
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-medium tracking-[0.18em] text-ink-400 uppercase">
                        {r.category}
                      </span>
                      <span className="text-[15px] font-medium text-white break-keep">
                        {r.metric}
                      </span>
                    </div>
                  </td>
                  {COLS.map((c) => (
                    <td
                      key={c.key}
                      className={`px-6 py-5 ${
                        c.accent ? 'bg-brand-500/[0.04]' : ''
                      }`}
                    >
                      <CellRender v={r.values[c.key]} accent={c.accent} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-t border-brand-500/15 bg-brand-500/[0.06] px-8 py-6">
            <p className="text-base leading-relaxed break-keep text-white sm:text-lg">
              분석만 하는 SaaS 도구는 많습니다.{' '}
              <span className="font-semibold text-brand-500">
                AI가 실제로 당신의 브랜드를 추천하게 만드는 건 eTribe뿐입니다.
              </span>
            </p>
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-10 space-y-4 lg:hidden">
          {COLS.map((c, i) => (
            <div
              key={c.key}
              className={`reveal overflow-hidden rounded-3xl border p-6 ${
                c.accent
                  ? 'border-brand-500/30 bg-brand-500/[0.06]'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
              style={{ ['--i' as string]: i + 3 }}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3
                    className={`text-xl font-semibold tracking-tight ${
                      c.accent ? 'text-brand-500' : 'text-white'
                    }`}
                  >
                    {c.label}
                  </h3>
                  <p className="mt-1 text-[12px] tracking-wide text-ink-400">
                    {c.sub}
                  </p>
                </div>
                {c.accent && (
                  <span className="text-[11px] font-medium tracking-[0.2em] text-brand-500 uppercase">
                    권장
                  </span>
                )}
              </div>
              <dl className="mt-5 divide-y divide-white/[0.06]">
                {ROWS.map((r) => (
                  <div
                    key={r.metric}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <dt className="text-[13px] text-ink-400 break-keep">
                      {r.metric}
                    </dt>
                    <dd className="flex-shrink-0 text-right">
                      <CellRender v={r.values[c.key]} accent={c.accent} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
