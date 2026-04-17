import { Eyebrow } from '../components/ui/Eyebrow';
import { ScrollDivider } from '../components/ui/ScrollDivider';

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
    label: 'Etribe Mars',
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
      <span className="text-base font-semibold text-white">
        있음
      </span>
    );
  }
  if (v === false) {
    return <span className="text-base font-normal text-white/25">없음</span>;
  }
  if (v === 'partial') {
    return (
      <span className="text-[13px] font-medium text-white/55">부분</span>
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
    <section id="positioning" className="relative py-16 sm:py-28 lg:py-40">
      <ScrollDivider />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-end gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Positioning</Eyebrow>

            <h2
              className="reveal mt-6 text-[1.75rem] leading-[1.2] font-semibold tracking-tight break-keep text-white sm:text-4xl sm:leading-[1.15] lg:text-[3.25rem]"
              style={{ ['--i' as string]: 0 }}
            >
              분석만 하는{' '}
              <span className="text-brand-red">도구는 많습니다.</span>
            </h2>
            <p
              className="reveal mt-4 max-w-xl text-sm leading-relaxed text-ink-400 break-keep sm:mt-6 sm:text-base lg:text-lg"
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
            <span className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-[12px] font-medium tracking-wide text-white ring-1 ring-white/15 sm:text-[13px]">
              핵심 차별점 · 실행 대행
            </span>
          </div>
        </div>

        {/* ─── Desktop Table ─── */}
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
                    className={`relative w-[23%] px-6 py-5 text-left ${
                      c.accent ? 'bg-[#060606]' : ''
                    }`}
                  >
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-base font-semibold text-white">
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
                  className="group border-t border-white/[0.06] transition-all duration-300 hover:bg-white/[0.015]"
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
                      className={`px-6 py-5 transition-colors duration-300 ${
                        c.accent ? 'bg-[#060606] group-hover:bg-[#0a0a0a]' : ''
                      }`}
                    >
                      <CellRender v={r.values[c.key]} accent={c.accent} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* CTA bar with white accent glow */}
          <div className="relative border-t border-white/10 bg-[#060606] px-8 py-6">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed break-keep text-ink-400 sm:text-base lg:text-lg">
              분석만 하는 SaaS 도구는 많습니다.{' '}
              <span className="font-semibold text-white">
                AI가 실제로 당신의 브랜드를 추천하게 만드는 건 eTribe뿐입니다.
              </span>
            </p>
          </div>
        </div>

        {/* ─── Mobile stacked cards ─── */}
        <div className="mt-10 space-y-3 sm:space-y-4 lg:hidden">
          {COLS.map((c, i) => (
            <div
              key={c.key}
              className={`reveal relative overflow-hidden rounded-2xl border p-5 sm:rounded-3xl sm:p-6 ${
                c.accent
                  ? 'border-white/20 bg-[#060606]'
                  : 'border-white/10 bg-white/[0.02]'
              }`}
              style={{ ['--i' as string]: i + 3 }}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {c.label}
                  </h3>
                  <p className="mt-1 text-[12px] tracking-wide text-ink-400">
                    {c.sub}
                  </p>
                </div>
                {c.accent && (
                  <span className="text-[11px] font-medium tracking-[0.2em] text-white/50 uppercase">
                    권장
                  </span>
                )}
              </div>
              <dl className="mt-4 divide-y divide-white/[0.06] sm:mt-5">
                {ROWS.map((r) => (
                  <div
                    key={r.metric}
                    className="flex items-center justify-between gap-4 py-2.5 sm:py-3"
                  >
                    <dt className="text-[12px] text-ink-400 break-keep sm:text-[13px]">
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
