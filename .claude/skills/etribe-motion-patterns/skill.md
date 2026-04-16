---
name: etribe-motion-patterns
description: "eTribe GEO 랜딩페이지의 프리미엄 모션·타이포·레이아웃 패턴. Motion v12(프레이머 후속), Tailwind 4, Pretendard 기반 스크롤 애니메이션·숫자 카운트업·스태거 reveal·호버·한국어 타이포그래피를 이 프로젝트의 기존 토큰(ink-*/.reveal/.bezel)과 완벽히 정합되게 구현. 섹션 비주얼 강화·모션 추가·타이포 조정·레이아웃 재설계 작업 시 반드시 이 스킬을 열어볼 것."
---

# eTribe Motion Patterns

이 스킬은 **이 프로젝트에 이미 존재하는 시각 언어**(ink-* 팔레트, `.reveal` 스태거, `.bezel`/`.hairline`, Pretendard/Playfair/JetBrains Mono)와 새 모션을 정합시키는 실전 패턴 모음이다. 범용 "예쁜 모션" 가이드가 아니라 **이 프로젝트 전용**.

## 원칙

1. **기존 토큰 우선** — 새 그림자/그라디언트/커브를 만들기 전에 `.bezel`, `.hairline`, `.mesh-ambient`, `ease-spring`으로 해결되는지 본다
2. **useReveal과 Motion을 혼용하지 않는다** — 같은 요소에 `.reveal` 클래스와 Motion의 `initial/animate`를 동시에 걸면 충돌. 한 종류만 쓴다
3. **한국어는 `break-keep` + 의도적 `<br />`** — `text-wrap: balance`만 믿지 않는다. 의미 단위로 끊어주는 `<br className="hidden sm:block" />` 패턴 활용
4. **60fps를 유지하지 못할 모션은 없앤다** — blur/filter 애니메이션은 특히 주의. 대안: opacity + transform
5. **`prefers-reduced-motion` 존중** — 모든 새 Motion 컴포넌트는 reduced motion에서 트랜지션을 즉시 완료하도록

## 기존 시각 언어 치트시트

### 컬러
- 배경 `bg-ink-950` (#0a0a0a) → 섹션 주 배경
- 섹션 내부 카드 `bg-white/[0.03]` ~ `bg-white/[0.06]` (hover 시 +0.01~0.02)
- 보더 `border-white/10`, `border-white/5` (내부 구분선)
- 본문 `text-white` / `text-white/70` / `text-ink-400` (세미보조) / `text-ink-300` (강조 보조)
- 악센트 언더라인 `.accent-underline` 또는 `.display-italic` + `text-brand-500`

### 타이포 스케일 (기존 섹션의 공통 ramp)
- Hero h1: `text-5xl sm:text-6xl lg:text-[5rem] xl:text-[5.75rem]` + `leading-[1.1]` + `tracking-tight`
- Section h2: `text-4xl sm:text-5xl lg:text-[3.5rem]` + `leading-[1.15]`
- Sub: `text-base sm:text-lg` + `leading-relaxed` + `text-white/70`
- Eyebrow (소제목): `text-[11px] tracking-[0.3em] uppercase text-white/50~70` — 자음 살짝 트래킹
- 숫자 디스플레이: `font-display tabular text-3xl sm:text-4xl` (Playfair)

### 여백 스케일 (섹션 공통)
- 섹션 padding: `py-28 sm:py-32 lg:py-40` (Hero는 `pt-32 sm:pt-36 lg:pt-44 pb-20 lg:pb-28`)
- 컨테이너: `mx-auto w-full max-w-7xl px-5 sm:px-8`
- 그리드 gap: `gap-10 sm:gap-12 lg:gap-16`

### 이징·duration
- 모든 커스텀 트랜지션의 기본 이징: `ease-[cubic-bezier(0.16,1,0.3,1)]` (= `ease-spring`)
- 트랜지션 duration: UI 호버 300~500ms, reveal 900ms, 차트/바 채우기 1200ms
- `.reveal`은 `transition-duration: 0.9s var(--ease-spring)` 고정

## 패턴

### 1. 스태거 reveal (기본 패턴)

이미 `useReveal` 훅이 `.reveal` 클래스에 `.is-visible`를 부여한다. 스태거는 `--i` CSS 변수:

```tsx
<h2 className="reveal ..." style={{ ['--i' as string]: 0 }}>...</h2>
<p  className="reveal ..." style={{ ['--i' as string]: 1 }}>...</p>
<div className="reveal ..." style={{ ['--i' as string]: 2 }}>...</div>
```

지연 = `i * 80ms`. 섹션 내에서 `--i`는 **0부터 시작**, 순서대로 증가. 중복·점프 금지.

### 2. Motion v12로 하는 "커스텀" 애니메이션

`useReveal`로 충분하지 않은 경우에만 Motion 사용. 예: 숫자 카운트업, 무한 루프, 호버 시퀀스, 복잡한 스프링.

#### 숫자 카운트업 (Data/Hero 스탯용)

```tsx
import { motion, useInView, animate, useMotionValue, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="tabular">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
```

사용:
```tsx
<div className="font-display text-4xl text-white"><Counter to={900} suffix="건" /></div>
```

### 3. 한국어 헤드라인 패턴

```tsx
<h2 className="text-4xl lg:text-[3.5rem] leading-[1.15] tracking-tight break-keep text-white">
  말이 아니라{' '}
  <span className="display-italic text-brand-500">데이터</span>로<br />
  확인했습니다.
</h2>
```

- `break-keep` — 한국어 어절이 중간에 쪼개지지 않게
- 영어 강조는 `display-italic` (Playfair italic)로 톤 대비
- 의미 단위 줄바꿈은 `<br />` 명시

### 4. 카드 호버 패턴 (bezel)

```tsx
<div className="bezel rounded-2xl p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-white/[0.05]">
  ...
</div>
```

`bezel` 유틸은 이미 내부 하이라이트 + 외부 그림자를 포함. 여기에 `translateY` hover만 추가.

### 5. 바(bar) 채우기 애니메이션 (Data 섹션 패턴)

뷰포트 진입 시 width를 0→목표로:

```tsx
<div className="relative h-2.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
  <div
    className="absolute inset-y-0 left-0 rounded-full bg-white/80 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
    style={{ width: `${rate}%` }}
  />
</div>
```

뷰포트 진입 시 채우려면 초기 width 0, useReveal 기반 상태 전환 또는 Motion의 `whileInView`:

```tsx
<motion.div
  initial={{ width: 0 }}
  whileInView={{ width: `${rate}%` }}
  viewport={{ once: true, margin: '-10%' }}
  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
  className="absolute inset-y-0 left-0 rounded-full bg-white/80"
/>
```

### 6. 섹션 간 전환 (bottom fade)

현재 Hero만 아래쪽 fade 있음. 섹션 색이 바뀌거나 배경 그라디언트가 있는 섹션에서는 바닥 fade로 다음 섹션과 연결:

```tsx
<div
  className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink-950 to-transparent"
  aria-hidden="true"
/>
```

### 7. 섹션 상단 Eyebrow (소제목)

```tsx
<div className="reveal flex items-center gap-4" style={{ ['--i' as string]: 0 }}>
  <span className="h-px w-10 bg-white/20" />
  <span className="text-[11px] font-medium tracking-[0.3em] text-white/50 uppercase">
    Evidence
  </span>
</div>
```

이미 `src/components/ui/Eyebrow.tsx`가 존재할 가능성. Read 먼저 확인 후 재사용.

### 8. 테이블 밀도 (Positioning 섹션)

비교표는 정보 밀도가 높으므로:
- 행 높이 `py-3 sm:py-4`
- 컬럼 padding `px-4 sm:px-6`
- 구분선 `divide-y divide-white/[0.06]`
- 헤더 행 `bg-white/[0.03]` + `text-[11px] tracking-[0.2em] uppercase text-white/50`
- 강조 컬럼 (eTribe): `bg-white/[0.05]` + `text-white` (보통 행은 `text-ink-300`)

## 반응형 원칙

- **mobile(<640)**: 단일 컬럼, 큰 터치 타겟 (min 44×44), `text-base~lg`
- **sm(640+)**: 2컬럼 가능, 폰트 약 +10~20%
- **lg(1024+)**: 데스크톱 본격. `max-w-7xl` 활용, 3~12컬럼 그리드

중간 구간(640~1024)이 가장 깨지기 쉬움. 반드시 `sm:` 브레이크 체크.

## Reduced Motion 대응

`index.css`에 추가 (없으면 제안):

```css
@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none;
  }
  .reveal {
    opacity: 1;
    transform: none;
    filter: none;
  }
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Motion v12의 `MotionConfig`로 전역 제어도 가능:

```tsx
import { MotionConfig } from 'motion/react';
<MotionConfig reducedMotion="user">{/* children */}</MotionConfig>
```

## 금지 사항

- **새 색 추가 금지** — `brand-red-*`, `cyan-*` 같은 새 컬러 추가하지 않는다. 이 프로젝트는 모노크롬
- **drop-shadow 남발 금지** — 이미 `bezel` 유틸이 그림자를 책임진다
- **`animate-bounce`/`animate-ping`** 같은 Tailwind 기본 키프레임 사용 금지 — 톤이 안 맞는다
- **`backdrop-blur-sm` 이상의 과한 블러** — 이미 `backdrop-blur-xl` / `backdrop-blur-2xl`이 Navigation과 모바일 시트에 쓰임. 섹션 내 요소는 대부분 `backdrop-blur-md`로 충분

## 작업 후 체크

- [ ] `.reveal`과 Motion이 동일 요소에 없는가
- [ ] `--i` 스태거가 0부터 순서대로인가
- [ ] 한국어 헤드라인에 `break-keep`이 있는가
- [ ] 이징이 `ease-spring` 또는 `cubic-bezier(0.16,1,0.3,1)`인가
- [ ] 반응형 3단계(모바일/sm/lg) 모두 확인
- [ ] `prefers-reduced-motion` 사용자 관점에서 정보 손실이 없는가
- [ ] 기존 시각 언어(.bezel/.hairline/ink-*)를 우선 재사용했는가

## 협업

- **시맨틱 태그 변경 시** → geo-engineer에게 사전 통지 (예: 섹션 내 카드를 `<div>`에서 `<article>`로)
- **새 토큰 추가 필요 시** → landing-lead에게 제안 후 `src/index.css`의 `@theme`에 추가
- **섹션 완성 후** → landing-qa에게 incremental QA 요청
