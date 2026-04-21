# eTribe GEO 랜딩페이지 작업 히스토리

## 2026-04-19

### GitHub Pages 배포 설정
- `vite.config.ts`에 `base: '/etribe-geo/'` 추가
- `.github/workflows/deploy.yml` 생성 (main push 시 자동 배포)
- 배포 URL: https://icodetree.github.io/etribe-geo/

### 로고/동영상 경로 수정
- `Navigation.tsx`, `Footer.tsx` — `/logo.png` → `${import.meta.env.BASE_URL}logo.png`
- `Hero.tsx` — `/main_01.mp4` → `${import.meta.env.BASE_URL}main_01.mp4`
- `src/vite-env.d.ts` 생성 (Vite 타입 선언)

### Vercel 배포 설정
- `vite.config.ts` base 경로를 `process.env.BASE_URL || '/'`로 환경변수 분기
- `.github/workflows/deploy.yml`에 `BASE_URL=/etribe-geo/` 환경변수 추가
- Vercel 프로젝트 링크 및 첫 배포 완료
- 배포 URL: https://etribe-geo.vercel.app

### Definition 섹션 — Entity 비주얼 교체
- 기존: 유리질감 사각형 + 원형 추상 도형
- 변경: Knowledge Graph Node (중앙 코어 + 3개 궤도 링 + 속성 노드 I/L/S/A/C)
- Motion v12로 궤도 회전 애니메이션 구현
- 오른쪽 여백 제거 (`lg:justify-end`)

### Definition 섹션 — Intent 비주얼 교체
- 기존: 3장 겹쳐진 유리 패널
- 1차 시도: Query Bubble Stack → 사용자 피드백 "너무 없어보인다"
- 최종: Typing Prompt (AI 프롬프트 윈도우)
  - 글래스 윈도우 크롬 바 + 3줄 질문 순차 하이라이트
  - 하단 입력 바 (커서 깜빡임 + send 아이콘)
  - Recommend / Compare / Price 태그 동기화
- 배경색 `bg-[#161616]`으로 변경
- 왼쪽 정렬 (`lg:justify-start`)

### Definition 섹션 — GEO 비주얼 교체
- 기존: 교차 링 + 그라데이션 구체
- 변경: Gap-Fill Progress (지식 공백 채우기)
  - 4개 슬롯 (Brand Name, Service Info, Competitor Context, Pricing Data)
  - 점선 빈칸 → solid 카드 + 체크마크 순차 전환
  - 하단 프로그레스 바 (0%→100%)
- 오른쪽 정렬 (`lg:justify-end`)

## 2026-04-20

### About 섹션 — 모바일 숫자 카운터 수정
- 원인: `useInView`의 `margin: "-100px"`이 모바일에서 교차 감지 실패, `ref`가 인라인 `<span>`에 부착
- 수정: `margin` → `amount: 0.3`, `ref`를 `<div>`로 변경
- 미사용 import 정리 (`motion`, `useMotionValue`, `useTransform` 제거)

### FloatingOrbs — 모바일 배치 개선
- 기존: 3개 구체가 세로로 나란히 배치 (20%→50%→70%)
- 변경: 모바일에서 2개만 표시, 대각선 양끝 배치
  - Primary (red): 260px, `left:-20%, top:12%` (좌상단 반쯤 걸침)
  - Secondary (blue): 220px, `right:-18%, bottom:15%` (우하단 반쯤 걸침)
  - Tertiary (pink): 모바일 `hidden`, 데스크탑만 표시
- 데스크탑 레이아웃 기존 유지

### Tools 섹션 — 미사용 코드 제거
- `TOOLS` 배열 및 `Tool` 타입 제거 (카드가 하드코딩되어 사용되지 않음)
- `tsc --noEmit` 에러 해결

### CLAUDE.md 생성
- 프로젝트 가이드 문서 생성 (커맨드, 아키텍처, 패턴, 배포 등)

### Hero 섹션 수정 (사용자 직접)
- 영문 슬로건, 서브카피, 하단 통계 스트립 주석 처리
- `AnimatedCounter` import 주석 처리
- `STATS` 상수 주석 처리

## 2026-04-21

### GEO (Generative Engine Optimization) 적용

#### Phase 1: 메타 태그 & 크롤러 파일
- **index.html 강화**
  - title 최적화 (GEO 키워드 포함)
  - meta description 70자 → 150자 확장 (플랫폼·데이터·서비스 키워드 포함)
  - `<meta name="robots">` 추가 (index,follow,max-image-preview:large,max-snippet:-1)
  - `<link rel="canonical">` 추가 (https://etribe-geo.vercel.app/)
  - Open Graph 7개 태그 (og:type, og:site_name, og:title, og:description, og:url, og:locale + og:image 준비)
  - Twitter Card 4개 태그 (summary_large_image)
  - Favicon 3개 (`/favicon/icon16.png`, `icon48.png`, `icon128.png`)
  - `<link rel="alternate" type="text/plain" href="/llms.txt">`

- **public/robots.txt** 생성
  - User-agent: * Allow: /
  - GPTBot, ClaudeBot, PerplexityBot, Google-Extended 명시 허용
  - Sitemap URL 포함

- **public/sitemap.xml** 생성
  - 단일 URL, lastmod: 2026-04-21

- **public/llms.txt** 생성
  - LLM 크롤러용 서비스 요약 (회사·서비스·데이터·도구·프로세스·연락처)

#### Phase 2: JSON-LD 구조화 데이터
- **src/seo/StructuredData.tsx** 생성
  - `@graph` 배열에 8개 스키마:
    1. Organization (eTribe AX Force, 155명, 18년 경력)
    2. WebPage (랜딩페이지 메타)
    3. WebSite (사이트 메타)
    4. Service (GEO 서비스, 무료 진단 + 월 99만~399만원)
    5. FAQPage (5개 Q&A: GEO란?, 엔티티란?, 인텐트란?, 비용?, 프로세스?)
    6. ItemList — 도입 프로세스 4단계
    7. ItemList — 자체 도구 5개
    8. DefinedTermSet (GEO/Entity/Intent 정의)
- **App.tsx**에 `<StructuredData />` 마운트

#### Phase 3: 시맨틱 HTML 보강
- **Process.tsx** — 타임라인 컨테이너 `<div>` → `<ol><li>` 순서 목록 전환 (데스크탑+모바일)
- **Definition.tsx** — 개념 목록 `<div>` → `<dl><dt><dd>` 정의 목록 전환, `role="region"` + `aria-label` 추가
