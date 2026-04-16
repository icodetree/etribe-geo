---
name: etribe-geo-orchestrator
description: "eTribe GEO 랜딩페이지 개선·고도화·확장 작업을 팀 단위로 조율하는 오케스트레이터. 섹션 리디자인, 프리미엄 품질 업그레이드, GEO/SEO 최적화, 전체 품질 점검 등 이 프로젝트의 랜딩페이지 관련 요청이 들어오면 반드시 이 스킬을 통해 landing-lead가 팀을 구성하고 진행한다. 단일 파일 수정 같은 사소한 요청이 아닌 한 언제나 이 워크플로우를 사용할 것."
---

# eTribe GEO Landing Orchestrator

eTribe GEO 랜딩페이지의 품질 향상을 4인 에이전트 팀(landing-lead + premium-designer + geo-engineer + landing-qa)이 협업으로 수행하도록 조율하는 오케스트레이터.

## 실행 모드: 에이전트 팀

이유: 섹션 고도화는 디자이너·GEO 엔지니어·QA 간의 실시간 피드백 품질이 최종 결과를 결정한다. 디자이너가 DOM 구조를 바꾸면 JSON-LD가 즉시 따라가야 하고, QA는 섹션 완성 직후 incremental 검증해야 한다. 서브 에이전트는 이 커뮤니케이션을 지원하지 못한다.

## 에이전트 구성

| 팀원 | 에이전트 타입 | 역할 | 스킬 | 주 출력 |
|------|-------------|------|------|---------|
| landing-lead (리더) | general-purpose | 섹션 분해·우선순위·통합 검토 | 이 오케스트레이터 | `_workspace/lead_plan.md`, 최종 보고 |
| premium-designer | general-purpose | 비주얼·모션·타이포 | etribe-motion-patterns | `src/sections/*.tsx`, `src/index.css` |
| geo-engineer | general-purpose | JSON-LD·시맨틱·메타 | geo-optimizer | `index.html`, `src/seo/*.ts`, `public/robots.txt` 등 |
| landing-qa | general-purpose | 품질 검증 | landing-qa-checklist | `_workspace/qa_report_*.md` |

> 4명 모두 `model: "opus"`로 설정.

## 워크플로우

### Phase 1: 요청 분석 및 작업 분해

landing-lead가 수행:

1. 사용자의 요청을 읽고 **범위**를 파악
   - "Hero 강화" → 단일 섹션 작업
   - "전체 프리미엄 업그레이드" → 12개 섹션 순회 작업
   - "GEO 최적화" → geo-engineer 주도, 디자이너가 지원
2. `src/sections/` 하위 대상 섹션 파일을 먼저 Read
3. `docs/GEO_랜딩페이지_카피_v2.md`의 관련 섹션 Read
4. `_workspace/` 디렉토리 준비 → `_workspace/00_lead_plan.md`에 작업 분해 기록
5. 섹션당 예상 변경 범위(레이아웃/카피/모션/구조화데이터/검증)를 표로 작성

### Phase 2: 팀 구성

landing-lead가 `TeamCreate`로 팀 생성:

```
TeamCreate(
  team_name: "etribe-geo-team",
  members: [
    {
      name: "premium-designer",
      agent_type: "premium-designer",
      model: "opus",
      prompt: "당신은 premium-designer입니다. .claude/agents/premium-designer.md의 역할을 수행합니다. etribe-motion-patterns 스킬을 읽고 참조하세요. 이 프로젝트의 모노크롬 에디토리얼 톤과 기존 유틸(.reveal/.bezel/.hairline)을 최우선으로 재사용합니다."
    },
    {
      name: "geo-engineer",
      agent_type: "geo-engineer",
      model: "opus",
      prompt: "당신은 geo-engineer입니다. .claude/agents/geo-engineer.md의 역할을 수행합니다. geo-optimizer 스킬을 읽고 Schema.org JSON-LD와 메타 설계를 담당합니다. 이 페이지가 AI 답변에 인용되도록 만드는 것이 목표입니다."
    },
    {
      name: "landing-qa",
      agent_type: "landing-qa",
      model: "opus",
      prompt: "당신은 landing-qa입니다. .claude/agents/landing-qa.md의 역할을 수행합니다. landing-qa-checklist 스킬을 읽고 incremental QA 프로토콜을 수행합니다. 섹션 완성 알림이 오면 즉시 검증 사이클을 시작하세요."
    }
  ]
)
```

### Phase 3: 작업 등록

landing-lead가 `TaskCreate`로 작업 단위를 등록. 섹션 하나 단위 또는 영역(모션/JSON-LD/반응형) 단위로 쪼갠다.

예 — "Hero + Data 섹션 프리미엄 업그레이드" 요청의 경우:

```
TaskCreate([
  { title: "Hero 섹션 타이포/여백/CTA 재설계", assignee: "premium-designer" },
  { title: "Hero 통계 스트립 모션 추가 (숫자 카운트업)", assignee: "premium-designer", depends_on: ["Hero 섹션 타이포/여백/CTA 재설계"] },
  { title: "Hero의 eTribe/Service JSON-LD 추가", assignee: "geo-engineer" },
  { title: "Data 섹션 표 시맨틱 개선(<th scope>) 및 Dataset JSON-LD", assignee: "geo-engineer" },
  { title: "Data 섹션 막대 그래프 모션 다듬기", assignee: "premium-designer" },
  { title: "Hero 섹션 incremental QA", assignee: "landing-qa", depends_on: ["Hero 섹션 타이포/여백/CTA 재설계", "Hero의 eTribe/Service JSON-LD 추가"] },
  { title: "Data 섹션 incremental QA", assignee: "landing-qa", depends_on: ["Data 섹션 표 시맨틱 개선(<th scope>) 및 Dataset JSON-LD", "Data 섹션 막대 그래프 모션 다듬기"] },
  { title: "전체 빌드/tsc 최종 검증", assignee: "landing-qa" }
])
```

팀원당 작업 3~6개를 권장. 더 큰 요청은 Phase 2-3을 단계별로 반복(예: 3개 섹션씩 묶어서).

### Phase 4: 협업 실행

팀원들이 공유 작업 목록에서 작업을 claim하고 병렬/의존 순서대로 수행.

**통신 규칙 (팀 내부):**

- premium-designer가 DOM 구조(헤딩 위계, 시맨틱 태그, 새 테이블)를 바꾸기 **전** → geo-engineer에게 `SendMessage`로 사전 통지
- premium-designer가 섹션 한 개를 완성하면 → landing-qa에게 `SendMessage("섹션명 완성, QA 부탁")`
- geo-engineer가 JSON-LD를 추가하면 → landing-qa에게 `SendMessage("JSON-LD 추가, 유효성 검증 부탁")`
- landing-qa가 경계면 이슈를 발견하면 → 양쪽 팀원 **모두에게** `SendMessage` + landing-lead에게 에스컬레이션
- 팀원 간 의견 충돌 → landing-lead가 `SendMessage`로 결정

**산출물 저장:**

| 팀원 | 출력 경로 |
|------|----------|
| premium-designer | `src/sections/*.tsx`, `src/components/**/*.tsx`, (필요 시) `src/index.css` |
| geo-engineer | `index.html`, `src/seo/StructuredData.tsx` (없으면 생성), `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` |
| landing-qa | `_workspace/qa_report_{section}.md`, `_workspace/qa_final.md` |
| landing-lead | `_workspace/00_lead_plan.md`, `_workspace/99_final_summary.md` |

**리더 모니터링:**

- 유휴 알림 수신 시: 해당 팀원에게 다음 작업 할당 또는 다른 팀원의 보조 요청
- `TaskGet`으로 전체 진행률 확인, 막힌 작업은 `SendMessage`로 원인 파악
- QA 리포트가 나올 때마다 Read하여 품질 상태 추적

### Phase 5: 통합 검토 및 최종 QA

1. 모든 작업이 `completed` 상태가 되면 landing-qa에게 **전체 QA 사이클** 요청:
   - `npm run lint` (tsc)
   - `npm run build` (Vite 빌드)
   - 전체 카피 싱크 재검증
   - 전체 앵커 링크 재검증
   - Lighthouse 기준 SEO/Performance/Accessibility 스폿 체크
2. landing-qa의 최종 리포트 Read
3. 리더가 섹션 간 연속성(배경 그라디언트 전환, 타이포 스케일 일관성) 직접 확인
4. 이슈가 남아있으면 Phase 3으로 되돌아가 추가 작업 등록
5. 이슈 없으면 Phase 6으로

### Phase 6: 정리 및 보고

1. 팀원들에게 종료 요청 (`SendMessage`로 완료 알림)
2. 팀 정리
3. `_workspace/`는 **보존** (후속 세션의 감사 추적용)
4. 사용자에게 보고:
   - 무엇을 했는지 (섹션별 변경 요약)
   - QA 결과 (PASS/FAIL 항목)
   - 남은 권장 작업 (있다면)
   - dev server 확인 안내 (`npm run dev`)

## 데이터 흐름

```
[사용자 요청]
     ↓
[landing-lead] → 00_lead_plan.md
     ↓ TeamCreate + TaskCreate
[premium-designer] ←SendMessage→ [geo-engineer]
         ↓                              ↓
   src/sections/*.tsx            index.html / seo/*.ts
         ↓                              ↓
         └─────── incremental QA 트리거 ──┘
                        ↓
                [landing-qa] → qa_report_*.md
                        ↓
                [landing-lead: 통합]
                        ↓
               src/ 최종 상태 + 99_final_summary.md
```

## 에러 핸들링

| 상황 | 전략 |
|------|------|
| 팀원 1명이 막힘 | 리더가 `SendMessage`로 맥락 확인 → 작업 분할 또는 보조 요청 |
| 빌드 실패 (tsc/vite) | QA가 원인 식별 → 해당 팀원에게 수정 요청. 리더는 재검증 주기에만 개입 |
| 카피 싱크 충돌 (docs vs UI) | QA가 리포트 → 리더가 "무엇이 진실인가" 결정 → 해당 측 수정 |
| 경계면 불일치 (DOM vs JSON-LD) | DOM을 진실로 간주하고 JSON-LD 수정. 단, 디자이너가 시맨틱을 잘못 뽑았다면 디자이너 수정 |
| Motion 성능 저하 | QA가 보고 → 디자이너에게 간소화 요청. reduced-motion 쿼리 활용 |
| 팀원 간 디자인 결정 충돌 | 리더가 `SendMessage`로 최종 결정. 결정 근거를 `_workspace/`에 기록 |
| 의존성 변경이 필요 | 리더 승인 후 `npm install`. QA가 빌드 재검증 |
| 작업 과다 (12개 섹션 모두 터치) | 섹션을 3~4개씩 묶어 Phase 2-3을 반복. 각 배치 완료 후 커밋 체크포인트 |

## 테스트 시나리오

### 정상 흐름 — "Data 섹션 프리미엄 업그레이드"

1. 사용자: "Data 섹션 좀 더 프리미엄하게 만들어줘"
2. Phase 1: 리더가 Data.tsx와 docs의 [DATA] 섹션을 Read → 작업 분해
3. Phase 2: 팀 생성 (3명 팀원 스폰)
4. Phase 3: 작업 등록
   - premium-designer: "Data 레이아웃·표 밀도·바 차트 모션"
   - geo-engineer: "Data 섹션 Dataset JSON-LD + <th scope>"
   - landing-qa: "Data incremental QA"
5. Phase 4: 디자이너가 구조 변경 사전 통지 → geo-engineer가 대기 → 디자이너 완료 → geo-engineer 진행 → 각각 완료 알림 → QA가 incremental 검증
6. Phase 5: 리더가 전체 QA 결과 확인
7. Phase 6: 팀 정리 + 사용자 보고

### 에러 흐름 — "QA가 반응형 레이아웃 깨짐 발견"

1. Phase 4 중 landing-qa가 640px 미만에서 표의 가로 스크롤 발생 리포트
2. QA가 premium-designer에게 `SendMessage`("Data.tsx:78 table md:block overflow 발생, col-span 재조정 필요")
3. QA가 landing-lead에게 에스컬레이션
4. premium-designer가 수정 → landing-qa에게 재검증 요청
5. QA PASS → Phase 5 진행
6. 최종 보고에 "반응형 1회 수정 후 PASS" 기록
