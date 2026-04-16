import { Eyebrow } from '../components/ui/Eyebrow';

const METRICS = [
  { k: '18', u: '년', v: '디지털 SI 에이전시 경력' },
  { k: '25', u: '일', v: '실측 모니터링 운영' },
  { k: '900', u: '건', v: '수집 응답 데이터' },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-ink-950 via-ink-900/30 to-ink-950 py-28 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Eyebrow>About</Eyebrow>
            <h2
              className="reveal mt-6 font-display text-5xl leading-[0.98] font-medium tracking-tight text-white sm:text-6xl lg:text-[5.5rem]"
              style={{ ['--i' as string]: 0 }}
            >
              AI에 가장
              <br />
              가깝게
              <br />
              <span className="display-italic text-brand-500">일하는 팀.</span>
            </h2>
            <p
              className="reveal mt-10 max-w-xl text-base leading-relaxed text-ink-400 break-keep sm:text-lg"
              style={{ ['--i' as string]: 1 }}
            >
              eTribe는 18년 경력의 디지털 SI 에이전시입니다. 155명 중 AI 업무에
              가장 근접한 인력으로 구성된{' '}
              <span className="font-medium text-white">AX Force TFT</span>가
              GEO 전략 설계부터 기술 구현, 모니터링 내재화까지 전담합니다.
            </p>

            <div
              className="reveal mt-10 flex flex-wrap items-center gap-3"
              style={{ ['--i' as string]: 2 }}
            >
              {[
                'AX Force TFT',
                'Generative Engine',
                'Entity Engineering',
                'MARS Pipeline',
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-ink-300 backdrop-blur-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics pillars */}
          <div className="lg:col-span-5">
            <div className="relative flex flex-col gap-4">
              {METRICS.map((m, i) => (
                <div
                  key={m.v}
                  className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-1.5 transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.04]"
                  style={{ ['--i' as string]: i + 3 }}
                >
                  <div className="flex items-baseline justify-between gap-6 rounded-[22px] bg-gradient-to-b from-white/[0.035] to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-6xl font-medium tracking-tight text-white tabular sm:text-7xl">
                        {m.k}
                      </span>
                      <span className="font-display text-xl text-brand-500">
                        {m.u}
                      </span>
                    </div>
                    <p className="max-w-[10rem] text-right text-[13px] font-medium tracking-wide text-ink-300 break-keep sm:text-sm">
                      {m.v}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
