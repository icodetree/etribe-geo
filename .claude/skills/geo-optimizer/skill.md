---
name: geo-optimizer
description: "이 랜딩페이지가 AI 답변(ChatGPT/Perplexity/Claude/Gemini)에 인용되도록 Schema.org JSON-LD, 시맨틱 HTML, 메타태그, Open Graph, robots/sitemap을 설계·적용. GEO/SEO 최적화, 구조화 데이터 추가, 메타 개선, AI 인용 가능성 향상, llms.txt 생성, Schema.org 유효성 이슈 해결 시 반드시 이 스킬. 단순 '타이틀 바꿔줘'가 아니라 **기계 판독 가능한 마크업을 설계**할 때 사용한다."
---

# GEO Optimizer — AI 인용 가능한 페이지 설계

이 스킬은 **eTribe GEO 랜딩페이지 자체**가 AI 답변 파이프라인에 포함되도록 만드는 구조화 데이터·메타·시맨틱 설계 가이드다. GEO의 핵심 원리는 "AI가 인용하고 싶어할 만한 콘텐츠를 기계 판독 가능한 형태로 제공"이며, 이 스킬은 그 두 축을 동시에 다룬다.

## AI 인용 가능성의 3대 원리

1. **출처 있는 주장** — 통계·논문·자체 실측 수치를 구체적 숫자와 출처로 마킹. AI는 검증 가능한 주장을 선호
2. **정의형 구조** — 용어·개념을 `DefinedTerm` / `dl>dt>dd`로 마킹하여 AI가 정의 질문("GEO가 뭐야?")에 바로 인용
3. **비교·리스트의 테이블화** — 경쟁 비교·프로세스 단계는 `<table>` + `scope` 또는 `ItemList`로 마킹하여 AI가 속성별 답변에 활용

이 세 원리가 충족되면 `FAQPage`, `HowTo`, `Dataset` 등 세부 스키마를 얹는다.

## 이 프로젝트의 JSON-LD 구조 계획

`src/seo/StructuredData.tsx` (없으면 생성)에서 단일 `<script type="application/ld+json">`로 `@graph` 배열을 주입한다. App.tsx에 1회 렌더링.

```
@graph:
  - Organization (eTribe, AX Force)
  - WebPage (이 페이지)
  - Service (eTribe GEO)
  - FAQPage (핵심 Q&A)
  - ItemList (5단계 GEO 작동 프로세스)
  - ItemList (5개 자체 도구 - MARS, 대시보드, 엔티티 탐침기, 인텐트 나침반, GEO 콘텐츠 생성기)
  - Dataset (25일 실측 데이터)
  - DefinedTermSet (GEO / 엔티티 / 인텐트)
```

> 템플릿 복사해 쓰기: `references/schema-org-templates.md`

## 메타데이터 체크리스트

`index.html` 기준으로 다음이 모두 존재해야 한다. 세부 체크리스트와 OG 이미지 스펙은 `references/meta-checklist.md` 참조.

핵심 항목 요약:
- `<title>` (50~60자, 핵심 키워드 + 브랜드)
- `<meta name="description">` (150~160자)
- `<link rel="canonical">`
- Open Graph (og:title/description/image/url/type/site_name/locale)
- Twitter Card (summary_large_image)
- `<meta name="robots">` (index,follow)
- `<meta name="theme-color">` (이미 `#0a0a0a` 설정됨)
- `<html lang="ko">` (이미 설정됨)
- `<link rel="alternate" hreflang="ko-KR">` (단일 언어면 선택)

## 시맨틱 HTML 가이드

React 컴포넌트를 수정할 때 다음을 점검:

- 각 섹션은 `<section id="...">` + 섹션 제목에 `<h2>` (현재 구현은 이미 어느 정도 지켜지고 있음)
- Hero의 최상위 헤드라인만 `<h1>`, 나머지는 `<h2>`
- 섹션 내 하위 블록 제목은 `<h3>` (예: Definition 섹션의 엔티티/인텐트/GEO 카드)
- 통계·수치 그룹은 `<dl>/<dt>/<dd>` 권장 (예: About 섹션의 25일/4개플랫폼/900건)
- 경쟁사 비교표는 `<table>` + `<thead>/<tbody>` + `<th scope="col">`/`<th scope="row">`
- 프로세스 단계는 `<ol>`, 병렬 리스트는 `<ul>`
- 인용/출처는 `<cite>` 또는 `<a>`로 실제 링크

**주의**: 현재 구현은 `<div>` 중심. 리팩토링 시 premium-designer와 사전 합의해 반드시 함께 수정.

## llms.txt 작성

LLM 크롤러를 위한 요약 파일. `public/llms.txt`에 배치:

```
# eTribe GEO

> AI 답변에 브랜드를 노출시키는 Generative Engine Optimization 전문 에이전시.
> 18년 경력 디지털 SI, AX Force TFT가 GEO 전략·실행·대행 전담.

## 핵심 서비스
- GEO 진단: 플랫폼별 인용률, SOV, 경쟁사 점유율 측정
- 엔티티·인텐트 설계: AI 지식그래프 갭 분석 및 콘텐츠 설계
- 기술 최적화: Schema.org, 시맨틱 HTML, 모니터링 시스템 구축

## 실측 데이터
- 4개 AI 플랫폼 (ChatGPT, Perplexity, Claude, Gemini) × 9개 쿼리 × 25일 = 900건
- 자체 도구: MARS 멀티에이전트, GEO 대시보드, 엔티티 탐침기, 인텐트 나침반, GEO 콘텐츠 생성기

## 연락처
- ax@etribe.co.kr
```

## robots.txt / sitemap.xml

**robots.txt** (`public/robots.txt`):

```
User-agent: *
Allow: /

# LLM crawlers (permissive — we WANT to be indexed)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://{domain}/sitemap.xml
```

> 도메인이 아직 미정이면 주석으로 TODO 표시하고 landing-lead에게 확인.

**sitemap.xml** (`public/sitemap.xml`): 단일 페이지라도 다음 구조:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://{domain}/</loc>
    <lastmod>2026-04-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 워크플로우

1. 사용자/리더의 요청 범위 확인 → 영향받는 섹션 목록 식별
2. `src/sections/{대상}.tsx` + `docs/GEO_랜딩페이지_카피_v2.md`의 해당 섹션을 양쪽 읽기
3. 대상 섹션에 붙일 스키마 결정 (위 "JSON-LD 구조 계획" 참조)
4. `references/schema-org-templates.md`에서 템플릿 복사 → 카피의 실제 값으로 치환
5. 시맨틱 태그 변경이 필요하면 premium-designer에게 사전 `SendMessage`
6. `src/seo/StructuredData.tsx` 또는 `index.html` 수정
7. landing-qa에게 검증 요청

## AI 인용 가능성 개선 패턴

**패턴 1: 수치 주장은 출처와 함께 마킹**

카피:
> 기존 SEO 키워드 최적화 → AI 가시성에 효과 없음 (Princeton GEO 논문, ACM KDD 2024)

마크업 개선:
```tsx
<blockquote cite="https://arxiv.org/abs/2311.09735">
  <p>기존 SEO 키워드 최적화는 AI 가시성에 유효하지 않다.</p>
  <cite>— Princeton GEO, ACM KDD 2024</cite>
</blockquote>
```

**패턴 2: 용어 정의는 `<dl>` + DefinedTerm 스키마 이중 마킹**

```tsx
<dl>
  <dt>GEO</dt>
  <dd>Generative Engine Optimization. SEO가 검색엔진 순위를 관리하듯, GEO는 AI 답변 안에서의 브랜드 위치를 관리한다.</dd>
</dl>
```

**패턴 3: FAQ는 `<details>` + FAQPage 스키마**

자연스러운 Q&A가 본문에 있으면 FAQPage 스키마 추가. 없으면 카피에서 추출하여 CTA 위나 FAQ 섹션 신설 (premium-designer와 합의).

## 데이터 흐름 검증

JSON-LD에 넣는 모든 텍스트는 **DOM에 가시화된 텍스트의 부분집합**이어야 한다. 반대가 되면 구글의 숨김 콘텐츠 가이드라인 위반. 작성 후 다음을 확인:

- JSON-LD의 각 속성 값이 실제 페이지에 렌더링되는가?
- 숫자·날짜는 ISO 형식(날짜: YYYY-MM-DD, 기간: P25D)으로 변환?
- URL은 절대 URL?

## 협업

- **premium-designer**: DOM 구조 변경 전 사전 합의. 특히 헤딩 위계·표 구조·리스트 변경
- **landing-qa**: JSON-LD 추가/변경 후 검증 요청. Schema.org validator(https://validator.schema.org/) 활용
- **landing-lead**: 큰 스키마 추가(새 스키마 타입, 도메인 설정)는 리더 승인 후 진행
