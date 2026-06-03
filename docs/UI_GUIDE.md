# UI Guide

> **목적**: Claude가 만든 UI가 톤·간격·색상 면에서 어긋나지 않게 잡아주는 가이드.
> 토큰만 적고 실제 컴포넌트 코드는 `src/components/`에.

---

## 색상 토큰

### 기능 색상

| 용도 | 클래스 | 비고 |
|------|--------|------|
| Primary | `blue-500`, `blue-400` | 주요 액션, 활성 상태 |
| Accent | `cyan-400`, `cyan-300` | 보조 강조 |
| Success | `green-500`, `green-400` | 성공, 완료 |
| Warning | `amber-500`, `amber-400` | 경고, 주의 |
| Error | `red-500`, `red-400` | 에러, 위험 |
| Info | `purple-400` | 정보, 안내 |

### 배경 / 텍스트

| 용도 | 클래스 |
|------|--------|
| Page BG | `bg-slate-900` (다크) / `bg-white` (라이트) |
| Card BG | `bg-slate-800/40` |
| Border | `border-slate-700/40` |
| Text Primary | `text-white` |
| Text Secondary | `text-slate-300` |
| Text Tertiary | `text-slate-400` |
| Text Muted | `text-slate-500` |

## 간격

| 용도 | 클래스 |
|------|--------|
| 페이지 컨테이너 | `max-w-7xl mx-auto px-4 sm:px-6 py-10` |
| 섹션 간격 | `space-y-10` (페이지 내) |
| 카드 패딩 | `p-5` (큰 카드) / `p-3` (작은 카드) |
| 카드 간격 | `gap-3` (그리드) / `space-y-2` (세로) |

## 카드 스타일 (기본형)

```tsx
<div className="rounded-xl border border-slate-700/40 bg-slate-800/40 p-5">
  ...
</div>
```

색이 있는 카드:

```tsx
<div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
  ...
</div>
```

## 텍스트 위계

| 용도 | 클래스 |
|------|--------|
| 페이지 타이틀 (H1) | `text-2xl font-bold text-white` |
| 섹션 타이틀 (H2) | `text-base font-semibold text-white` |
| 카드 타이틀 (H3) | `text-sm font-semibold text-slate-200` |
| 본문 | `text-sm text-slate-300 leading-relaxed` |
| 캡션 / 부연 | `text-xs text-slate-500` |

## 반응형 브레이크포인트

| 접두 | 너비 | 용도 |
|------|------|------|
| (없음) | 모바일 | 기본 |
| `sm:` | 640px+ | 큰 모바일 |
| `md:` | 768px+ | 태블릿 |
| `lg:` | 1024px+ | 데스크탑 |

**원칙**: 모바일 우선 (mobile-first). 데스크탑 전용 디자인 금지.

## 아이콘

- 라이브러리: `lucide-react`
- 기본 크기: `size={14}` 또는 `size={16}`
- 색상은 텍스트 색상과 분리: `<Icon size={14} className="text-blue-400" />`

## 애니메이션 / 트랜지션

- 호버: `transition-colors` 또는 `transition-all`
- 펼침: `transition-transform duration-200`
- 과한 애니메이션 금지 (300ms 이하)
