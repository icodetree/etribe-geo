import { Eyebrow } from '../components/ui/Eyebrow';

const CONCEPTS = [
  {
    eng: 'Entity',
    kor: '엔티티',
    lead: 'AI 지식그래프 안에 존재하는 "것"',
    body: 'AI가 브랜드에 대해 알고 있는 것 전체. 이름, 속성, 연결된 정보, 맥락까지 — 하나의 노드로 조직된 우리 브랜드의 디지털 기억입니다.',
  },
  {
    eng: 'Intent',
    kor: '인텐트',
    lead: '사용자가 AI에게 원하는 행위',
    body: '"추천해줘", "비교해줘", "가격 알려줘" — 우리가 등장해야 할 순간. 고객의 질문을 먼저 설계하는 사람이 답변을 설계합니다.',
  },
  {
    eng: 'GEO',
    kor: 'GEO',
    lead: '인텐트에 맞게 엔티티를 채우는 작업',
    body: 'AI의 지식 공백을 우리 정보로 채워, 답변 안에 우리가 포함되도록 설계합니다. 검색 엔진이 아닌 생성 엔진을 위한 최적화.',
    emphasize: true,
  },
];

export function Definition() {
  return (
    <section
      id="definition"
      className="relative border-y border-white/5 bg-gradient-to-b from-ink-950 via-ink-900/40 to-ink-950 py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>Definition</Eyebrow>
          <h2
            className="reveal max-w-4xl text-4xl leading-[1.15] font-semibold tracking-tight break-keep text-white sm:text-5xl lg:text-[3.75rem]"
            style={{ ['--i' as string]: 0 }}
          >
            <span className="font-display italic font-medium text-brand-500">
              GEO.
            </span>{' '}
            Generative Engine Optimization.
          </h2>
          <p
            className="reveal max-w-2xl text-base leading-relaxed text-ink-400 break-keep sm:text-lg"
            style={{ ['--i' as string]: 1 }}
          >
            SEO가 검색엔진 순위를 관리하듯, GEO는 AI 답변 안에서의 브랜드
            위치를 관리합니다. 세 가지 개념만 기억하면 됩니다.
          </p>
        </div>

        {/* Bento grid — asymmetric with GEO emphasized */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5 lg:mt-20">
          {CONCEPTS.map((c, i) => (
            <article
              key={c.eng}
              className={`reveal group relative overflow-hidden rounded-[28px] border p-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                c.emphasize
                  ? 'md:col-span-6 lg:col-span-4 lg:row-span-2 border-brand-500/30 bg-gradient-to-br from-brand-500/15 via-brand-500/5 to-transparent hover:border-brand-500/50'
                  : 'md:col-span-3 lg:col-span-2 border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.035]'
              }`}
              style={{ ['--i' as string]: i + 2 }}
            >
              <div
                className={`relative h-full rounded-[22px] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-10 ${
                  c.emphasize
                    ? 'bg-gradient-to-b from-ink-950/30 via-ink-950/60 to-ink-950/80'
                    : 'bg-gradient-to-b from-white/[0.03] to-transparent'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-display text-sm tracking-[0.3em] text-ink-400 uppercase">
                      {c.eng}
                    </p>
                    <p
                      className={`mt-4 font-display text-5xl leading-none font-medium tracking-tight sm:text-6xl lg:text-[5rem] ${
                        c.emphasize ? 'text-brand-500' : 'text-white'
                      }`}
                    >
                      {c.kor}
                    </p>
                  </div>
                  <span className="font-display text-3xl italic text-white/15">
                    / 0{i + 1}
                  </span>
                </div>

                <div
                  className={`mt-8 border-t pt-6 ${
                    c.emphasize ? 'border-brand-500/20' : 'border-white/10'
                  }`}
                >
                  <p
                    className={`text-base font-medium break-keep sm:text-lg ${
                      c.emphasize ? 'text-white' : 'text-ink-100'
                    }`}
                  >
                    {c.lead}
                  </p>
                  <p
                    className={`mt-4 text-[15px] leading-relaxed break-keep ${
                      c.emphasize ? 'text-ink-300' : 'text-ink-400'
                    }`}
                  >
                    {c.body}
                  </p>
                </div>

                {c.emphasize && (
                  <div className="mt-10 flex items-end gap-8">
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.22em] text-brand-500/90 uppercase">
                        공식
                      </p>
                      <p className="mt-2 font-display text-2xl italic text-white sm:text-3xl">
                        Intent × Entity = Visibility
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
