# Schema.org JSON-LD 템플릿 — eTribe GEO

이 페이지에 필요한 스키마의 복사-수정용 템플릿. 각 템플릿의 `{}` 자리표시자를 실제 값으로 치환해 사용한다.

## 목차
1. [Organization](#organization)
2. [WebPage](#webpage)
3. [Service](#service)
4. [FAQPage](#faqpage)
5. [ItemList — 프로세스 단계](#itemlist-프로세스)
6. [ItemList — 도구 카드](#itemlist-도구)
7. [Dataset — 실측 크롤링](#dataset)
8. [DefinedTermSet — GEO 용어](#definedtermset)
9. [@graph 통합 예시](#graph-통합)

---

## Organization

```json
{
  "@type": "Organization",
  "@id": "https://{domain}/#organization",
  "name": "eTribe",
  "alternateName": "eTribe AX Force",
  "url": "https://{domain}/",
  "logo": "https://{domain}/logo.png",
  "email": "ax@etribe.co.kr",
  "description": "AI 답변에 브랜드를 노출시키는 Generative Engine Optimization 에이전시.",
  "foundingDate": "{YYYY — 18년 전 기준}",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 155
  },
  "subOrganization": {
    "@type": "Organization",
    "name": "AX Force",
    "description": "AI 업무에 가장 근접한 인력으로 구성된 TFT. GEO 전략 설계부터 모니터링 내재화까지 전담."
  },
  "knowsAbout": [
    "Generative Engine Optimization",
    "AI Visibility",
    "Schema.org Markup",
    "LLM Answer Engine Optimization"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "ax@etribe.co.kr",
    "contactType": "sales"
  }
}
```

## WebPage

```json
{
  "@type": "WebPage",
  "@id": "https://{domain}/#webpage",
  "url": "https://{domain}/",
  "name": "eTribe GEO — AI 답변에 브랜드를 노출시키는 기술",
  "description": "AI에게 물어봤을 때 당신의 브랜드가 답변에 나옵니까? eTribe AX Force가 설계하는 Generative Engine Optimization.",
  "inLanguage": "ko-KR",
  "isPartOf": { "@id": "https://{domain}/#organization" },
  "primaryImageOfPage": "https://{domain}/og-image.png",
  "about": [
    { "@id": "https://{domain}/#service" },
    { "@id": "https://{domain}/#defined-terms" }
  ]
}
```

## Service

```json
{
  "@type": "Service",
  "@id": "https://{domain}/#service",
  "name": "eTribe GEO",
  "serviceType": "Generative Engine Optimization",
  "provider": { "@id": "https://{domain}/#organization" },
  "description": "AI 답변 안에서의 브랜드 가시성을 설계·구축·운영하는 풀사이클 GEO 서비스.",
  "areaServed": { "@type": "Country", "name": "South Korea" },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://{domain}/#cta",
    "serviceLanguage": "ko"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "GEO 서비스 단계",
    "itemListElement": [
      { "@type": "Offer", "name": "GEO 진단", "description": "플랫폼별 인용률·SOV·경쟁사 점유율 측정. 1~2일 소요." },
      { "@type": "Offer", "name": "인텐트 설계", "description": "우선 노출 쿼리 정의. 1~10일 소요." },
      { "@type": "Offer", "name": "엔티티 구축", "description": "통계·출처 기반 GEO 콘텐츠 생성. 5일 소요." },
      { "@type": "Offer", "name": "기술 최적화", "description": "Schema.org JSON-LD, Canonical, Sitemap 적용." },
      { "@type": "Offer", "name": "지속 모니터링", "description": "일간 자동 크롤링·인용 누적·엔티티 그래프 갱신. 9주+." }
    ]
  }
}
```

## FAQPage

카피에서 자연스러운 Q&A를 추출. 섹션이 아직 없다면 premium-designer와 협의해 FAQ 섹션 신설 또는 숨김 태그 활용 대신 본문에 녹여 마킹.

```json
{
  "@type": "FAQPage",
  "@id": "https://{domain}/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "GEO가 SEO와 무엇이 다른가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO가 검색엔진 순위를 관리한다면, GEO는 AI 답변 안에서의 브랜드 위치를 관리합니다. 기존 SEO 키워드 최적화는 AI 가시성에 유효하지 않으며(Princeton GEO, ACM KDD 2024), 통계·출처 기반 콘텐츠가 AI 가시성을 최대 +115% 향상시킵니다."
      }
    },
    {
      "@type": "Question",
      "name": "왜 지금 GEO가 필요한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "소비자는 이미 ChatGPT, Perplexity, Claude, Gemini에게 '추천', '비교', '가격' 같은 구매 의도 질문을 합니다. 이 답변에 포함되지 않으면 존재하지 않는 것과 같습니다. eTribe의 S社 기준 25일 실측에서, 추천·비교 쿼리의 전 플랫폼 인용률은 0%였습니다."
      }
    },
    {
      "@type": "Question",
      "name": "eTribe GEO는 얼마인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "월 99만원~399만원. 진단(Phase 1)은 1~2일, 인텐트 설계(Phase 2)는 1~10일, 기술 최적화와 1차 콘텐츠(Phase 3)는 5일, 이후 9주+로 모니터링 운영을 내재화합니다."
      }
    }
  ]
}
```

## ItemList (프로세스)

"How" 섹션의 5단계:

```json
{
  "@type": "ItemList",
  "@id": "https://{domain}/#how-it-works",
  "name": "GEO 5단계 작동 프로세스",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": 5,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "진단", "description": "현재 AI 가시성 측정. 플랫폼별 인용률, SOV, 경쟁사 점유율." },
    { "@type": "ListItem", "position": 2, "name": "인텐트 설계", "description": "우리 브랜드가 노출되어야 할 쿼리 정의. 추천/비교/가격/정보탐색/전환." },
    { "@type": "ListItem", "position": 3, "name": "엔티티 구축", "description": "인텐트별 GEO 콘텐츠 생성. 통계·출처·수치로 작성." },
    { "@type": "ListItem", "position": 4, "name": "기술 최적화", "description": "Schema.org JSON-LD, Canonical, Sitemap." },
    { "@type": "ListItem", "position": 5, "name": "모니터링", "description": "매일 자동 크롤링 → 인용 현황 누적 → 엔티티 그래프 갱신." }
  ]
}
```

## ItemList (도구)

5개 자체 도구:

```json
{
  "@type": "ItemList",
  "@id": "https://{domain}/#tools",
  "name": "eTribe 자체 GEO 도구",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "SoftwareApplication", "name": "MARS (Multi Agent Recipe System)", "applicationCategory": "Marketing Automation", "description": "크롤링·AI 가시성 분석·SOV·기술진단·레포트 전 과정 자동화 멀티에이전트 파이프라인." }},
    { "@type": "ListItem", "position": 2, "item": { "@type": "SoftwareApplication", "name": "GEO 모니터링 대시보드", "description": "AI 가시성 점수·플랫폼별 인용률·경쟁사 SOV·부서별 현황을 수치로 제공." }},
    { "@type": "ListItem", "position": 3, "item": { "@type": "SoftwareApplication", "name": "엔티티 탐침기", "description": "LLM에 직접 질의하여 AI가 브랜드에 대해 무엇을 알고 무엇을 모르는지 드러내는 도구." }},
    { "@type": "ListItem", "position": 4, "item": { "@type": "SoftwareApplication", "name": "인텐트 나침반", "description": "인텐트별 인용률 히트맵." }},
    { "@type": "ListItem", "position": 5, "item": { "@type": "SoftwareApplication", "name": "GEO 콘텐츠 생성기", "description": "인텐트 선택 → 포맷 자동 분기 → GEO 최적화 콘텐츠 생성. 정의형/FAQ/비교표/데이터테이블." }}
  ]
}
```

## Dataset

25일 실측 크롤링:

```json
{
  "@type": "Dataset",
  "@id": "https://{domain}/#dataset",
  "name": "eTribe GEO 실측 크롤링 데이터 — S社 기준",
  "description": "4개 AI 플랫폼(ChatGPT·Perplexity·Claude·Gemini) × 9개 쿼리 × 25일 = 900건 응답 데이터. 제품 추천/브랜드 비교 쿼리에서 전 플랫폼 인용률 0%.",
  "temporalCoverage": "P25D",
  "creator": { "@id": "https://{domain}/#organization" },
  "keywords": ["GEO", "AI Visibility", "Citation Rate", "SOV", "ChatGPT", "Perplexity", "Claude", "Gemini"],
  "variableMeasured": [
    { "@type": "PropertyValue", "name": "AI 인용률", "unitText": "%" },
    { "@type": "PropertyValue", "name": "SOV (Share of Voice)", "unitText": "%" }
  ],
  "measurementTechnique": "Daily automated LLM query crawling with prompt-controlled intent mapping"
}
```

## DefinedTermSet

```json
{
  "@type": "DefinedTermSet",
  "@id": "https://{domain}/#defined-terms",
  "name": "GEO 핵심 용어",
  "hasDefinedTerm": [
    {
      "@type": "DefinedTerm",
      "name": "GEO",
      "alternateName": "Generative Engine Optimization",
      "description": "SEO가 검색엔진 순위를 관리하듯, GEO는 AI 답변 안에서의 브랜드 위치를 관리하는 학문·실무 분야. 인텐트에 맞게 엔티티를 채우는 작업으로 정의된다."
    },
    {
      "@type": "DefinedTerm",
      "name": "엔티티",
      "alternateName": "Entity",
      "description": "AI 지식그래프 안에 존재하는 '것'. AI가 브랜드에 대해 알고 있는 것 전체."
    },
    {
      "@type": "DefinedTerm",
      "name": "인텐트",
      "alternateName": "Intent",
      "description": "사용자가 AI에게 원하는 행위. 추천/비교/가격/정보탐색/전환 등 브랜드가 등장해야 할 순간."
    }
  ]
}
```

## @graph 통합 예시

`src/seo/StructuredData.tsx` 컴포넌트 본문:

```tsx
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { /* Organization */ },
      { /* WebPage */ },
      { /* Service */ },
      { /* FAQPage */ },
      { /* ItemList — how */ },
      { /* ItemList — tools */ },
      { /* Dataset */ },
      { /* DefinedTermSet */ }
    ]
  };
  return (
    <script
      type="application/ld+json"
      // JSON.stringify를 쓰되, React의 XSS 보호를 우회하도록 dangerouslySetInnerHTML 사용
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
```

App.tsx에 `<StructuredData />`를 최상단에 추가(렌더링 위치는 무관하나 관례상 Navigation 직전).

## 작성 후 체크

1. 모든 `@id`에 동일한 도메인 사용
2. `@graph` 내에서 참조(`@id`)가 존재하는 노드를 가리키는지 확인
3. 숫자·날짜는 ISO 표준
4. JSON.stringify가 실제로 유효한 JSON을 만드는지 확인 (템플릿 리터럴 이스케이프 주의)
5. https://validator.schema.org/ 에서 검증 (landing-qa 요청)
