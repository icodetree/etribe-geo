import { CTAButton } from '../components/ui/Button';

export function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden py-32 sm:py-40 lg:py-52"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[45rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(229,38,44,0.08), transparent 70%)',
        }}
      />

      {/* Decorative concentric rings — echo of hero */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="relative h-[44rem] w-[44rem]">
          <div className="absolute inset-0 rounded-full border border-white/[0.04]" />
          <div className="absolute inset-[10%] rounded-full border border-white/[0.05] animate-[rotateSlow_90s_linear_infinite]" />
          <div className="absolute inset-[25%] rounded-full border border-brand-500/15" />
          <div className="absolute inset-[42%] rounded-full border border-white/[0.06]" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
        <p
          className="reveal font-display text-sm tracking-[0.35em] text-brand-500/90 uppercase"
          style={{ ['--i' as string]: 0 }}
        >
          Free Diagnosis
        </p>
        <h2
          className="reveal mt-8 font-display text-5xl leading-[0.95] font-medium tracking-tight text-white sm:text-6xl lg:text-[7rem]"
          style={{ ['--i' as string]: 1 }}
        >
          ASK AI.
          <br />
          <span className="display-italic text-brand-500">SEE</span> YOUR BRAND.
        </h2>
        <p
          className="reveal mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-ink-300 break-keep sm:text-xl"
          style={{ ['--i' as string]: 2 }}
        >
          지금 AI가 귀사 브랜드를 어떻게 설명하는지 확인해 보세요.
          <br className="hidden sm:block" />
          플랫폼별 인용률, SOV, 경쟁사 점유율 — 1–2주 이내 리포트 제공.
        </p>

        <div
          className="reveal mt-12 flex flex-wrap items-center justify-center gap-3"
          style={{ ['--i' as string]: 3 }}
        >
          <CTAButton href="mailto:ax@etribe.co.kr?subject=GEO 무료 진단 신청">
            무료 진단 신청하기
          </CTAButton>
          <CTAButton
            href="mailto:ax@etribe.co.kr"
            variant="outline"
            icon={false}
          >
            ax@etribe.co.kr
          </CTAButton>
        </div>

        <div
          className="reveal mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-10 text-[12px] font-medium tracking-[0.18em] text-ink-400 uppercase"
          style={{ ['--i' as string]: 4 }}
        >
          <span>4 Platforms</span>
          <span className="h-1 w-1 rounded-full bg-ink-600" />
          <span>900 Responses</span>
          <span className="h-1 w-1 rounded-full bg-ink-600" />
          <span>25 Day Live Data</span>
          <span className="h-1 w-1 rounded-full bg-ink-600" />
          <span>Korea-first</span>
        </div>
      </div>
    </section>
  );
}
