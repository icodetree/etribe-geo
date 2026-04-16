---
name: landing-qa-checklist
description: "eTribe GEO 랜딩페이지의 품질 검증 체크리스트와 incremental QA 프로토콜. 타입체크(tsc), 반응형, 성능(LCP/CLS), 접근성(WCAG), 카피 싱크(docs↔UI), 경계면 정합성(DOM↔JSON-LD/앵커↔섹션id/수치↔카피)을 검증. 섹션 수정 후 검증, 전체 빌드 점검, 버그 추적, Lighthouse 스폿 체크 시 반드시 이 스킬을 따른다. '존재 확인'이 아니라 '경계면 일치'를 본다."
---

# Landing QA Checklist

이 스킬은 landing-qa가 섹션·경계면·전체 빌드를 검증할 때 따르는 프로토콜이다. **존재 확인이 아니라 일치 확인**이 핵심이다.

## 3단계 QA 사이클

| 단계 | 트리거 | 범위 | 소요 |
|------|--------|------|------|
| **1. Incremental** | "섹션 X 완성" 메시지 수신 | 해당 섹션 + 이웃과의 경계 | 빠르게 |
| **2. Integration** | 2~3개 섹션 완성 후 | 섹션 간 연속성·전체 앵커·JSON-LD 전체 | 중간 |
| **3. Final** | 리더의 "전체 검증" 요청 | lint/build + Lighthouse + 전체 카피 싱크 | 느림 |

## 1단계: Incremental QA (섹션 단위)

섹션 X 수정 완료 알림이 오면 즉시:

### 1-1. 카피 싱크 (문자 단위 비교)

```
1. src/sections/X.tsx의 하드코딩된 텍스트를 Grep으로 추출
2. docs/GEO_랜딩페이지_카피_v2.md의 해당 섹션 텍스트를 추출
3. 양쪽을 비교 — 불일치 시 의도적인지 실수인지 판단
   - 의도적 (카피 리라이트) → landing-lead에게 "docs 업데이트 필요" 리포트
   - 실수 → 해당 에이전트에게 수정 요청
4. 통계 수치(25일, 900건, 0%, +115%, 155명, 18년 등)는 특히 엄격히 확인
```

### 1-2. 앵커 링크 정합성

```
1. src/sections/Navigation.tsx의 href="#..." 값 목록 추출
2. src/sections/*.tsx의 <section id="..."> 값 목록 추출
3. 1:1 매칭 확인
4. CTA 내부 링크(href="#cta" 등)도 실제 id와 매칭되는지
```

알려진 매핑:
- `#top` → Hero (`id="top"`)
- `#problem` → Problem
- `#definition` → Definition
- `#data` → Data
- `#how` → How
- `#tools` → Tools
- `#positioning` → Positioning
- `#cta` → CTA

### 1-3. `.reveal` 스태거 무결성

```
1. 섹션 파일에서 --i 값을 모두 추출
2. 0부터 연속적으로 증가하는가, 중복·누락 없는가
3. 중복은 스태거가 동일 시점에 일어나 "반짝임" 유발
4. 큰 점프(0→5)는 느껴지는 지연을 만듦 — 1~2씩만 건너뛰기
```

### 1-4. Tailwind 토큰 존재 확인

```
1. 섹션에서 사용된 text-*, bg-*, border-*, ring-* 커스텀 값 추출
2. src/index.css의 @theme에 해당 색이 정의되어 있는가
3. 미정의 색(임의 hex)은 inline style이 아닌 @theme에 추가 요청 (premium-designer + landing-lead)
```

### 1-5. 시맨틱 위계

```
1. 섹션 내 heading(h1/h2/h3/h4) 추출
2. 위계 건너뛰기 없는가 (h2→h4 금지, h2→h3만 허용)
3. h1은 페이지 전체에 1개만 (Hero) — 다른 섹션에 h1 있으면 h2로 변경 요청
4. <button>이 <div> 또는 <a>로 잘못 사용되지 않았는가
```

### 1-6. 반응형 시각 체크 (구조적)

dev server를 실행 중이면 브라우저를 열어 직접 확인. 실행 불가 환경이면:

```
1. 섹션의 클래스에서 sm:/lg: prefix 패턴 추출
2. mobile(기본) / sm:(640+) / lg:(1024+) 세 구간에 모두 정의가 있는가
3. 중간 구간 빠진 건 없는가 (예: base에 grid-cols-1, lg:grid-cols-3만 있고 sm: 없으면 640~1023px 어색)
4. 한국어 긴 단어(예: "Generative Engine Optimization")가 break-keep과 충돌해 overflow 유발 가능성
```

### 1-7. 이웃 섹션과의 경계

```
1. 해당 섹션 직전/직후 섹션의 배경색·여백 확인
2. 하단 fade가 있는 섹션은 다음 섹션의 배경색으로 fade되는지
3. 섹션 상단 padding과 직전 섹션 하단 padding이 중복으로 크지 않은지
```

## 2단계: Integration QA (복수 섹션)

### 2-1. JSON-LD ↔ DOM 일치

```
1. src/seo/StructuredData.tsx (또는 해당 파일) Read
2. JSON-LD의 각 "name"/"description"/"text" 값이 실제 DOM에 존재하는지
3. @graph 배열의 @id 참조가 모두 유효한지
4. ISO 형식 준수 (날짜 YYYY-MM-DD, 기간 P25D)
5. https://validator.schema.org/ 수동 검증 요청 가능 (리더 승인 후)
```

### 2-2. 메타 태그 정합성

```
1. index.html의 <title>, description, OG, canonical 확인
2. 개발 도메인/프로덕션 도메인 mix-up 확인 (localhost URL이 남아있으면 안 됨)
3. og:image 절대 URL, 1200×630 사이즈, 실제 파일 존재 여부
4. lang="ko" 유지
```

### 2-3. 수치 카피 전방위 대조

이 페이지는 수치가 핵심 자산. 다음이 모두 일치하는지:

| 수치 | 등장 위치 | 검증 |
|------|----------|------|
| 25일 | Hero 스탯 / Data 서브 / About 수치 / CTA 안내 | 동일 |
| 4개 플랫폼 | Hero 리스트 / About / Data 설명 | 리스트 항목도 동일해야 (ChatGPT, Perplexity, Claude, Gemini) |
| 900건 | Hero 스탯 / About 수치 / Data 헤더 | 동일 |
| 9개 쿼리 | Data 서브 / About | 동일 |
| +115% | Problem 포인트 / Hero 스탯 | 동일 |
| 18년 | About 본문 | 단독 |
| 155명 | About 본문 | 단독 |
| 0%, 34%, 30% | Data 표 | docs와 동일 |
| 99만~399만 | Positioning 가격 비교 | docs와 동일 |

## 3단계: Final QA (전체 빌드)

### 3-1. 명령 실행

```bash
cd /Users/codetree/Documents/harness/etribe/etribe-geo
npm run lint          # tsc --noEmit
npm run build         # Vite 프로덕션 빌드
```

- `lint` 실패 → 타입 에러 파일/라인 추출 → 해당 에이전트에게 수정 요청
- `build` 실패 → Vite 에러 메시지로 원인 분류 (코드 vs 설정 vs 의존성)

### 3-2. 빌드 산출물 점검

```
1. dist/index.html — 모든 메타 태그 포함
2. dist/assets/*.js 사이즈 (참고: 500KB 초과 시 경고)
3. dist/ 하위 public/의 robots.txt, sitemap.xml, llms.txt 복사 확인
```

### 3-3. 접근성 스폿 체크

```
- 모든 <img>에 alt
- 모든 <button>에 명확한 텍스트 또는 aria-label
- 색 대비 (WCAG AA): 
  - text-white/70 on bg-ink-950 → 대비 비율 확인 (약 8:1, OK)
  - text-white/50 on bg-ink-950 → 약 5:1 (AA 통과, AAA는 미달)
  - text-ink-400 (#a3a3a3) on bg-ink-950 → 약 8:1 (OK)
- 포커스 링 가시성 — focus:ring-* 또는 focus-visible 스타일
- 키보드로 모든 인터랙션 도달 가능 (특히 모바일 시트의 닫기 버튼)
```

### 3-4. 성능 스폿 체크

가능하면 Lighthouse 수동 실행. 불가능하면 코드 기반 추정:

```
- LCP 후보: Hero의 h1 또는 stat strip — 인라인 SVG/폰트 preload로 최적화되었는가
- CLS 원인 후보: 웹폰트 FOIT/FOUT, 동적 이미지 로드 — width/height 명시 확인
- TBT 원인 후보: useReveal의 IntersectionObserver(저렴), Motion의 spring(중간)
- 이미지: public/logo.png — 크기 적정 여부 확인 (18px 높이면 36px 해상도면 충분)
```

## 경계면 매트릭스 (최우선)

| 생산자 | 소비자 | 검증 방법 |
|--------|--------|----------|
| `Navigation.tsx`의 `href` | `sections/*.tsx`의 `id` | Grep 2회 + 배열 diff |
| `docs/..._v2.md` | `sections/*.tsx` 텍스트 | Grep로 수치·제목 추출 후 diff |
| `StructuredData.tsx` | DOM 렌더링 | JSON-LD의 "name"이 섹션에 존재하는가 |
| `src/index.css @theme` | 컴포넌트의 `bg-ink-*`/`text-brand-*` | 미정의 토큰 사용 여부 |
| `index.html` canonical | 실제 배포 URL | landing-lead에게 확인 |
| Motion animate | `prefers-reduced-motion` | reduced 상태에서 렌더 정상인가 |
| OG 이미지 URL | 실제 파일 | `public/og-image.png` 존재 여부 |

## 리포트 포맷

`_workspace/qa_report_{scope}.md`:

```markdown
# QA Report — {scope} ({date})

## Summary
- PASS: N
- FAIL: M
- WARN: K

## Failures
### [F1] {요약 한 줄}
- 경계면: {생산자 file:line ↔ 소비자 file:line}
- 증거: {구체적 불일치 예}
- 수정 제안: {어느 쪽을 어떻게 고칠지}
- 담당: {premium-designer | geo-engineer | landing-lead}

## Warnings
...

## Passed Checks
- 앵커 ↔ section id 정합
- 카피 싱크 (Hero, Data, About)
- ...
```

## 에이전트 간 통신

- **FAIL 발견**: 해당 담당자에게 `SendMessage("파일:라인 + 수정 제안")` + landing-lead에게 요약 에스컬레이션
- **WARN 발견**: 담당자에게 `SendMessage`, 리더에는 보고서로만
- **자명한 오타/a11y 경미**: QA가 직접 수정하고 담당자에게 "자동 수정함" 통지 (경로·라인 명시)

## 금지 사항

- **자명하지 않은 수정을 임의로** 하지 않는다 — QA는 리포트와 요청이 기본
- **docs 원본을 수정**하지 않는다 — 카피 원본 변경은 landing-lead 권한
- **의존성 추가·제거**를 하지 않는다 — 리더 승인 필수
- **리포트 없이 PASS 선언**하지 않는다 — 근거는 항상 파일:라인

## 사용하는 명령 빠른 참조

```bash
# 타입체크만
npm run lint

# 프로덕션 빌드
npm run build

# 개발 서버 (3000, 0.0.0.0 호스트)
npm run dev

# 빌드 결과 미리보기
npm run preview

# 빌드 폴더 청소
npm run clean
```

## 이 프로젝트 특유의 주의점

- **루트의 수정된 파일들** (`DotWave.tsx`, `Footer.tsx`, `Hero.tsx`, `Navigation.tsx`)은 이미 미커밋 상태. QA 리포트에서 "이 파일들은 작업 중"임을 참고
- **`public/` 폴더 존재 확인** — git status에 `?? public/`가 있으므로 아직 커밋 안 된 에셋이 있을 수 있음. Read로 확인
- **한국어 break-keep이 모바일에서 깨지는 고전 패턴**: `lg:whitespace-nowrap` + 짧은 모바일 버전 `<br />` 필요한지 반응형 검증
- **Pretendard 로딩 지연**: `cdn.jsdelivr.net`에서 fetch. 네트워크 실패 시 system-ui fallback이 잘 동작하는지 (이미 `@theme`에 fallback 체인 있음)
