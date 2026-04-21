const DOMAIN = 'https://etribe-geo.vercel.app';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. Organization
    {
      '@type': 'Organization',
      '@id': `${DOMAIN}/#organization`,
      name: 'eTribe AX Force',
      url: DOMAIN,
      email: 'ax@etribe.co.kr',
      description:
        '18년 경력 디지털 SI 에이전시 eTribe의 AI 전담 조직. GEO(Generative Engine Optimization) 전략 설계부터 기술 구현, 모니터링 내재화까지 전담합니다.',
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 155 },
      knowsAbout: [
        'Generative Engine Optimization',
        'AI 가시성 최적화',
        'Schema.org 구조화 데이터',
        'Entity Engineering',
        'Intent Design',
      ],
    },

    // 2. WebPage
    {
      '@type': 'WebPage',
      '@id': `${DOMAIN}/#webpage`,
      url: DOMAIN,
      name: 'eTribe GEO - AI 답변에 브랜드를 노출시키는 Generative Engine Optimization',
      description:
        "AI에게 '추천해줘', '비교해줘'를 물었을 때 당신의 브랜드가 답변에 나오나요? eTribe AX Force가 4개 AI 플랫폼 25일 실측 데이터 기반으로 GEO를 설계합니다.",
      inLanguage: 'ko',
      isPartOf: { '@id': `${DOMAIN}/#website` },
      about: { '@id': `${DOMAIN}/#service` },
      publisher: { '@id': `${DOMAIN}/#organization` },
    },

    // 3. WebSite
    {
      '@type': 'WebSite',
      '@id': `${DOMAIN}/#website`,
      url: DOMAIN,
      name: 'eTribe GEO',
      publisher: { '@id': `${DOMAIN}/#organization` },
      inLanguage: 'ko',
    },

    // 4. Service
    {
      '@type': 'Service',
      '@id': `${DOMAIN}/#service`,
      name: 'GEO (Generative Engine Optimization)',
      provider: { '@id': `${DOMAIN}/#organization` },
      description:
        'AI 답변 안에서 브랜드가 노출되도록 설계하는 서비스. 4개 AI 플랫폼(ChatGPT, Perplexity, Claude, Gemini) 실측 크롤링 기반 진단, 엔티티·인텐트 설계, 기술 최적화, 모니터링 내재화까지 풀서비스를 제공합니다.',
      serviceType: 'Generative Engine Optimization',
      areaServed: { '@type': 'Country', name: 'KR' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'GEO 서비스 플랜',
        itemListElement: [
          {
            '@type': 'Offer',
            name: '무료 AI 가시성 진단',
            description:
              '플랫폼별 인용률, SOV, 경쟁사 점유율 측정. 1~2주 이내 결과 제공.',
            price: '0',
            priceCurrency: 'KRW',
          },
          {
            '@type': 'AggregateOffer',
            name: 'GEO 월간 운영 플랜',
            lowPrice: '990000',
            highPrice: '3990000',
            priceCurrency: 'KRW',
            description:
              '분석+실행+대행 풀서비스. 진단 리포트, 콘텐츠 최적화, 페이지 수정, 구조화 데이터 적용, 모니터링 운영 포함.',
          },
        ],
      },
    },

    // 5. FAQPage — Definition 섹션 기반
    {
      '@type': 'FAQPage',
      '@id': `${DOMAIN}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'GEO(Generative Engine Optimization)란 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GEO는 인텐트에 맞게 엔티티를 채우는 작업입니다. AI의 지식 공백을 우리 정보로 채워, 답변 안에 우리가 포함되도록 설계합니다. 검색 엔진이 아닌 생성 엔진을 위한 최적화입니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'GEO에서 엔티티(Entity)란 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "AI 지식그래프 안에 존재하는 '것'입니다. AI가 브랜드에 대해 알고 있는 것 전체 — 이름, 속성, 연결된 정보, 맥락까지 하나의 노드로 조직된 브랜드의 디지털 기억입니다.",
          },
        },
        {
          '@type': 'Question',
          name: 'GEO에서 인텐트(Intent)란 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "사용자가 AI에게 원하는 행위입니다. '추천해줘', '비교해줘', '가격 알려줘' — 우리가 등장해야 할 순간. 고객의 질문을 먼저 설계하는 사람이 답변을 설계합니다.",
          },
        },
        {
          '@type': 'Question',
          name: 'GEO 서비스 도입 비용은 얼마인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '무료 AI 가시성 진단으로 시작할 수 있습니다. 월간 운영 플랜은 99만원~399만원 범위이며, 분석+실행+대행 풀서비스를 포함합니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'GEO 도입 프로세스는 어떻게 되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '4단계로 진행됩니다. Phase 1 진단(1-2일): AI 가시성 측정, Phase 2 설계(1-10일): 인텐트 맵 설계, Phase 3 구현(5일): 기술 최적화+콘텐츠 배포, Phase 4 이행(9주+): 모니터링 시스템 가동 및 내재화. 전체 11-12주 소요됩니다.',
          },
        },
      ],
    },

    // 6. ItemList — 도입 프로세스 4단계
    {
      '@type': 'ItemList',
      '@id': `${DOMAIN}/#process`,
      name: 'GEO 도입 프로세스',
      description: '11-12주 4단계 프로세스',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '진단',
          description:
            'AI 가시성 진단. 플랫폼별 인용률, SOV, 경쟁사 점유율 측정. 소요 기간: 1~2일.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '설계',
          description:
            '인텐트 맵 설계. 우선순위 쿼리 정의, 콘텐츠 플랜 수립. 소요 기간: 1~10일.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '구현',
          description:
            'Schema.org JSON-LD 적용, 기술 최적화, GEO 콘텐츠 1차 배포. 소요 기간: 5일.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: '이행',
          description:
            '자동 모니터링 시스템 가동, 주간 리포트 사이클 내재화, 엔티티 그래프 갱신. 소요 기간: 9주 이상.',
        },
      ],
    },

    // 7. ItemList — 5개 자체 도구
    {
      '@type': 'ItemList',
      '@id': `${DOMAIN}/#tools`,
      name: 'eTribe GEO 자체 도구',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'MARS (Multi Agent Recipe System)',
          description:
            '크롤링→AI 가시성 분석→SOV 분석→기술진단→레포트. 전 과정을 자동화한 멀티에이전트 파이프라인. 사람이 하던 14일을 48시간으로 압축.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'GEO 대시보드',
          description:
            'AI 가시성 점수, 플랫폼별 인용률, 경쟁사 SOV, 부서별 현황을 한 화면에서 모니터링.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '엔티티 탐침기 (Entity Probe)',
          description:
            'LLM에게 직접 질의하여 AI가 브랜드에 대해 무엇을 알고 무엇을 모르는지 지식공백을 진단.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: '인텐트 나침반 (Intent Compass)',
          description:
            '인텐트별 인용률 히트맵. 어느 인텐트가 강하고 어디가 공백인지 우선순위 지도를 설계.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'GEO 콘텐츠 생성기 (Content Forge)',
          description:
            '인텐트 선택→포맷 자동 분기→GEO 최적화 콘텐츠 생성. 정보탐색=정의형, 추천=FAQ, 비교=비교테이블, 가격=데이터테이블.',
        },
      ],
    },

    // 8. DefinedTermSet — GEO/Entity/Intent 정의
    {
      '@type': 'DefinedTermSet',
      '@id': `${DOMAIN}/#definitions`,
      name: 'GEO 핵심 용어',
      hasDefinedTerm: [
        {
          '@type': 'DefinedTerm',
          name: 'GEO (Generative Engine Optimization)',
          description:
            '인텐트에 맞게 엔티티를 채우는 작업. AI의 지식 공백을 우리 정보로 채워, 답변 안에 브랜드가 포함되도록 설계하는 최적화.',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Entity (엔티티)',
          description:
            'AI 지식그래프 안에 존재하는 브랜드 노드. 이름, 속성, 연결된 정보, 맥락이 조직된 디지털 기억.',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Intent (인텐트)',
          description:
            "사용자가 AI에게 원하는 행위. '추천해줘', '비교해줘', '가격 알려줘' 등 브랜드가 등장해야 할 순간.",
        },
      ],
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
