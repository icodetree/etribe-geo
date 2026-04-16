import { CTAButton } from '../components/ui/Button';

export function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden py-32 sm:py-40 lg:py-52"
    >
      {/* Premium Vignette & Epic Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#030303]">
        {/* Deep Mars Brand Red radiating from the bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-[100%] opacity-80"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(252,0,17,0.18) 0%, rgba(252,0,17,0.04) 40%, transparent 70%)',
          }}
        />
        {/* Soft white focus highlight in the absolute center for the text */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.035) 0%, transparent 60%)',
          }}
        />
        {/* Top subtle hairline glow connecting from the previous section */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
        <p
          className="reveal font-display text-sm tracking-[0.35em] text-white/70 uppercase"
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
          <span className="display-italic text-white">SEE</span> YOUR BRAND.
        </h2>
        <p
          className="reveal mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-ink-300 break-keep sm:text-xl"
          style={{ ['--i' as string]: 2 }}
        >
          지금 AI가 귀사 브랜드를 어떻게 설명하는지 확인해 보세요.
          <br className="hidden sm:block" />
          플랫폼별 인용률, SOV, 경쟁사 점유율 1~2주 이내 리포트 제공.
        </p>

        <div
          className="reveal mt-12 flex flex-wrap items-center justify-center gap-3"
          style={{ ['--i' as string]: 3 }}
        >
          <CTAButton href="mailto:ax@etribe.co.kr?subject=GEO 무료 진단 신청">
            무료 진단 신청하기
          </CTAButton>
          <CTAButton href="mailto:ax@etribe.co.kr" variant="outline">
            ax@etribe.co.kr
          </CTAButton>
        </div>

        <div
          className="reveal mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-10 text-[12px] font-medium tracking-[0.18em] text-ink-400 uppercase"
          style={{ ['--i' as string]: 4 }}
        >
          <span>4 Platforms</span>
          <span className="text-ink-600">/</span>
          <span>900 Responses</span>
          <span className="text-ink-600">/</span>
          <span>25 Day Live Data</span>
          <span className="text-ink-600">/</span>
          <span>Korea-first</span>
        </div>
      </div>
    </section>
  );
}
