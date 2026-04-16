# 메타데이터 체크리스트 — eTribe GEO

`index.html` 기준 적용할 메타 태그 전체 목록. 이미 설정된 것은 [✓], 추가 필요한 것은 [+]로 표시.

## 현재 상태 (baseline)

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" /> [✓]
<meta name="theme-color" content="#0a0a0a" /> [✓]
<title>eTribe GEO — AI 답변에 브랜드를 노출시키는 기술</title> [✓]
<meta name="description" content="AI에게 물어봤을 때 당신의 브랜드가 답변에 나옵니까? eTribe AX Force가 설계하는 Generative Engine Optimization." /> [✓]
<html lang="ko"> [✓]
```

## 추가 필요 [+]

### Canonical

```html
<link rel="canonical" href="https://{domain}/" />
```

도메인 미정이면 landing-lead에게 확인 요청. 개발 중이면 프로덕션 도메인 확정 전까지 주석 처리하고 TODO.

### robots

```html
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
```

### Open Graph

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="eTribe GEO" />
<meta property="og:title" content="eTribe GEO — AI 답변에 브랜드를 노출시키는 기술" />
<meta property="og:description" content="AI에게 물어봤을 때 당신의 브랜드가 답변에 나옵니까? eTribe AX Force가 설계하는 Generative Engine Optimization." />
<meta property="og:url" content="https://{domain}/" />
<meta property="og:image" content="https://{domain}/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="eTribe GEO — AI 답변에 브랜드를 노출시키는 기술" />
<meta property="og:locale" content="ko_KR" />
```

OG 이미지 스펙:
- 크기 1200×630 (1.91:1)
- 파일명 `og-image.png`, `public/` 하위
- 안전 영역: 가장자리 60px 패딩 확보 (SNS 크롭 대응)
- 이 프로젝트 톤에 맞게 `ink-950` 배경 + 큰 헤드라인 + eTribe 로고 조합
- premium-designer에게 생성 요청

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="eTribe GEO — AI 답변에 브랜드를 노출시키는 기술" />
<meta name="twitter:description" content="AI에게 물어봤을 때 당신의 브랜드가 답변에 나옵니까?" />
<meta name="twitter:image" content="https://{domain}/og-image.png" />
```

### Favicon / Icons

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

현재 없으면 premium-designer에게 제작 요청.

### Preconnect / Preload 최적화

이미 Google Fonts/Pretendard preconnect 있음. 추가로:

```html
<link rel="preload" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css" />
```

### Sitemap 링크 (선택)

```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
```

### LLM 힌트 (권고 수준)

```html
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-optimized summary" />
```

공식 표준은 아니지만 LLM 크롤러에게 `llms.txt`의 존재를 알리는 실용적 힌트.

## 제목·설명 길이 가이드

- `<title>`: 50~60자. 한글 1자 = 2자로 계산. 현재 31자(한글) → OK
- `<meta description>`: 150~160자. 현재 약 70자 → 확장 권장하되 자연스러움 우선
- OG `og:title`: 60자 이내
- OG `og:description`: 200자 이내

## 확장 description 초안 (160자 목표)

```
AI에게 '추천', '비교'를 물었을 때 당신의 브랜드가 답변에 나오나요? eTribe AX Force가 4개 AI 플랫폼 25일 실측 크롤링을 기반으로 GEO(Generative Engine Optimization)를 설계합니다. 무료 진단으로 시작하세요.
```

글자수 확인: 한글 약 90자. 자연스럽게 유지. (한글 기준 60~80자가 실용 권장)

## 작업 후 검증 체크

- [ ] 로컬 빌드(`npm run build`)에서 `dist/index.html`에 모든 메타 포함
- [ ] Open Graph 미리보기: https://www.opengraph.xyz/ 또는 Facebook Sharing Debugger
- [ ] Twitter Card: https://cards-dev.twitter.com/validator
- [ ] 모바일 뷰포트 정상: viewport-fit=cover가 iPhone notch 대응
- [ ] theme-color가 모바일 Safari 주소창에 반영

## landing-qa에게 검증 요청할 항목

1. 메타 description이 실제 페이지 내용을 정확히 요약하는가
2. OG 이미지가 1200×630이고 안전 영역 확보되었는가
3. canonical URL이 실제 프로덕션 URL과 일치하는가
4. robots 메타가 `noindex`로 잘못 설정되지 않았는가
5. 모든 절대 URL이 HTTPS인가
