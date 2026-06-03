# Architecture

> **목적**: Claude가 "이 코드 어디 있어?"를 매번 묻지 않게 하는 지도.

---

## 폴더 구조

```
src/
├── pages/         ← 라우트 단위 화면
├── components/
│   ├── layout/    ← Header, Footer, Sidebar
│   ├── ui/        ← Card, Badge, Button (재사용)
│   └── diagrams/  ← 시각화 컴포넌트
├── data/          ← mock data (.ts 파일)
├── types/         ← 공통 타입 정의
└── utils/         ← 헬퍼 함수
```

## 데이터 흐름

```
User → Route → Page → data/*.ts → Component → UI
```

- 페이지는 `pages/`에 위치
- mock data는 `data/`로 분리
- 페이지 컴포넌트가 data를 import해서 UI로 렌더

## 외부 의존성

| 분류 | 항목 | 용도 |
|------|------|------|
| 라우팅 | react-router-dom | SPA 라우팅 |
| 아이콘 | lucide-react | 아이콘 시스템 |
| 스타일 | tailwindcss | 유틸리티 CSS |
| 빌드 | vite | 번들러 |

## 모듈 경계 규칙

- `pages/`는 `components/`를 import하지만 그 반대는 금지
- `components/ui/`는 비즈니스 로직을 가지지 않는다
- `data/`는 React를 import하지 않는다 (순수 데이터)
- 페이지 간 직접 import 금지 (필요하면 공통 로직을 `utils/`로)

## 라우트 등록 절차

1. `src/pages/NewPage.tsx` 생성
2. `src/App.tsx`에 `<Route>` 추가
3. `src/components/layout/Header.tsx`의 `navItems`에 항목 추가

## 환경변수

```
VITE_API_BASE_URL=
VITE_APP_TITLE=
```

- 민감 키는 프론트에 절대 두지 않는다
- `.env.local`은 gitignored
