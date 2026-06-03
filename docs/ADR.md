# Architecture Decision Records (ADR)

> **목적**: 6개월 뒤 "왜 이렇게 했지?"에 답하는 기록.
> 큰 결정이 생길 때마다 ADR-NN 형식으로 추가.

---

## ADR-001: 상태관리 라이브러리 미사용

- **결정**: useState + Context만 사용
- **이유**: 정적 사이트, 전역 상태가 거의 없음. Zustand/Redux는 오버엔지니어링.
- **대안**: Zustand, Redux Toolkit, Jotai
- **트레이드오프**: 상태가 복잡해지면 재검토. 페이지 수 30개 또는 전역 상태 5개 이상 시.
- **결정일**: 2026-01-15

---

## ADR-002: Tailwind CSS 채택

- **결정**: 유틸리티 CSS 프레임워크로 Tailwind 사용
- **이유**: 디자인 토큰을 코드와 함께 관리. 컴포넌트 라이브러리 없이도 일관성 유지 가능.
- **대안**: styled-components, CSS Modules, vanilla CSS
- **트레이드오프**: HTML이 길어진다. 하지만 디자인 일관성 이득이 더 큼.
- **결정일**: 2026-01-15

---

## ADR-003: 라우팅 라이브러리

- **결정**: react-router-dom
- **이유**: SPA 라우팅 표준. 생태계 안정적.
- **대안**: TanStack Router, Next.js
- **트레이드오프**: Next.js로 가면 SSR이 가능하지만 GitHub Pages 정적 배포 충돌
- **결정일**: 2026-01-15

---

## ADR-004: 페이지 확장 방식 — 라우트 페이지(B안)

- **결정**: Home 단일 라우트 외에 `/destinations`, `/packages`, `/gallery` 전용 라우트 페이지 추가 (HashRouter)
- **이유**: 포트폴리오에서 라우팅 구조를 보여주고, 홈은 티저(부분 노출) + "전체 보기" CTA로 간결하게 유지. 카드 마크업은 `DestinationCard` / `PackageCard` / `GalleryGrid`로 추출해 홈·페이지가 공유(중복 제거).
- **대안**: A안(단일 홈, 섹션 카드 수만 증가)
- **트레이드오프**: 네비 정책 복잡도 증가. Reviews/Contact는 홈 섹션으로 유지(스크롤), 타 페이지에서 클릭 시 홈 이동 후 스크롤 처리. 라우트 전환 시 `ScrollToTop`으로 상단 이동.
- **결정일**: 2026-06-03

---

## ADR-005: 콘텐츠 이미지 — Unsplash 원격 URL

- **결정**: 신규 여행지/패키지/갤러리 이미지는 Unsplash 원격 URL 사용. 적용 전 `curl`로 HTTP 200 확인한 것만 채택.
- **이유**: Phase 01 정리에서 미사용 로컬 이미지(`iwate`/`oita`/`event*` 등)를 삭제했고, `CLAUDE.md`가 placeholder로 Unsplash URL을 권장. 리포 용량을 늘리지 않음.
- **대안**: 삭제한 로컬 이미지 복원, Lorem Picsum(여행 테마 아님)
- **트레이드오프**: 배포 사이트가 외부 CDN에 의존(오프라인/URL 변경 시 깨질 수 있음). 라벨이 확실한 사진만 여행지 카드에, 불확실한 사진은 라벨이 없는 갤러리에 배치해 콘텐츠 불일치 최소화.
- **결정일**: 2026-06-03

---

## ADR-006: 실제 기술 스택 (템플릿 정정)

- **결정**: 이 프로젝트의 실제 스택은 **CRA(react-scripts 4) + React 17 + 순수 CSS + react-icons + react-router-dom v5(HashRouter)**.
- **이유**: ADR-002(Tailwind)·ADR-003 일부 및 `docs/ARCHITECTURE.md`의 Vite/TypeScript/Tailwind/lucide-react 기술은 스타터킷 템플릿 기본값으로, 실제 코드와 불일치하여 정정한다.
- **대안**: 문서를 실제 스택에 맞춰 전면 재작성(후속 작업으로 보류)
- **트레이드오프**: 문서가 일부 템플릿 잔재를 포함. Phase 03에서 PRD/ARCHITECTURE 정합화 권장.
- **결정일**: 2026-06-03

---

## 템플릿

새 ADR을 추가할 때 이 형식을 복사:

```
## ADR-NNN: 제목

- **결정**:
- **이유**:
- **대안**:
- **트레이드오프**:
- **결정일**: YYYY-MM-DD
```
