# Phase 02 — 페이지 확장 & 이미지 활용

> **진행 현황 (2026-06-03 완료)** — 결정: **B안(라우트 페이지)** + **Unsplash 이미지**. ADR-004/005 기록.
>
> | 체크리스트 | 상태 | 비고 |
> |---|---|---|
> | 1. 에셋 감사 | ✅ | `img-1~9`는 처음부터 존재(문서의 "빌드 깨짐" 전제는 사실 아님). `kyouto`/중복은 Phase 01에서 삭제 |
> | 2. 데이터·섹션 확장 | ✅ | `data/gallery.js` 신설·Gallery 데이터화. destinations 6→12, packages 4→6, reviews 3→6 (전부 ko/en/ja) |
> | 3. 페이지·라우팅 (B안) | ✅ | `DestinationsPage`/`PackagesPage`/`GalleryPage` + HashRouter 경로 + `ScrollToTop`. 카드는 `DestinationCard`/`PackageCard`/`GalleryGrid`로 추출·공유 |
> | 4. 레거시 정리 | ✅ | Services/Products/SignUp/rsvp-1, momolist/ReactCardSlider/ImgCarousel 등은 Phase 01에서 삭제 완료 |
> | 5. i18n & UI | ✅ | 신규 문구·`viewAll` 키를 ko/en/ja에 반영. 토큰·반응형 그리드 준수 |
> | 6. 검증 | ⚠️ | `npm run verify`(lint+build+test) 통과, App 스모크 테스트 2건 통과. 단 **원격 이미지 시각 확인**과 **GitHub Pages 배포 확인**은 미실시(배포는 사용자 승인 대기) |
>
> **참고**: 미사용 잔여 로컬 이미지는 Phase 01에서 삭제했으므로, 본 문서 2번 섹션의 "잔여 이미지 재활용" 수단 대신 Unsplash URL로 콘텐츠를 확장함(ADR-005). 아래 원문 체크리스트는 명세로 보존한다.

## 목표

홈 단일 라우트를 넘어 **콘텐츠가 풍부한 여행 사이트**로 확장한다.
`src/assets`에 있으나 코드에서 쓰이지 않는 이미지를 조사·연결하고, 깨진 갤러리를 복구한 뒤 **여행지·갤러리·패키지** 섹션을 늘린다.

이 phase가 끝나면:

- 모든 화면에서 이미지가 정상 로드된다 (`npm run build` 실패 없음)
- 미사용 에셋이 데이터(`data/`) 또는 갤러리에 반영되었다
- 네비 메뉴(Home / Destinations / Packages / Gallery / Reviews / Contact)에 대응하는 콘텐츠가 눈에 띄게 늘었다

## 현재 상태 (Phase 01 기준)

| 항목 | 상태 |
|------|------|
| 라우트 | `App.js` — `/` → `Home` 만 등록 |
| 네비 | `Navbar` — 섹션 스크롤 앵커 (`#destinations` 등) |
| 데이터 | `destinations.js` 6건, `packages.js` 4건 |
| 갤러리 | `Gallery.js` → `assets/images/img-1~9.jpg` **파일 없음 (빌드 깨짐)** |

## 이미지 인벤토리

### 코드에서 사용 중

| 파일 | 사용처 |
|------|--------|
| `maldives.jpg` | Hero 배경, `destinations` |
| `borabora.jpg`, `kyoto.jpeg`, `tokyo.jpg`, `hokaido.jpeg`, `keywest.jpg` | `destinations` |
| `maldives2.jpg`, `maldives3.jpg`, `borabora2.jpg`, `hokaido2.jpeg` | `packages` |

### 미사용 (Phase 02에서 연결 대상)

| 파일 | 제안 용도 |
|------|-----------|
| `iwate.jpeg`, `oita.jpeg`, `tiba1.jpeg` | 일본 지역 `destinations` 카드 추가 |
| `jinzya.jpeg`, `monzi.jpeg`, `kyouto.jpeg` | 갤러리 또는 교토·문화 테마 카드 (`kyouto` vs `kyoto.jpeg` 중복 정리) |
| `dizuni.jpg`, `gril.jpeg` | 휴양/체험 갤러리 또는 패키지 썸네일 |
| `event1.jpg`, `event2.jpg`, `event3.jpg` | 프로모션·이벤트 배너 또는 갤러리 |
| `event/1.jpeg` ~ `event/8.jpeg` | `Gallery` 그리드 8~9장 (기존 `img-1~9` 대체) |

### 정리·삭제 검토

- `kyouto.jpeg`와 `kyoto.jpeg` — 동일 지역이면 하나만 유지, 데이터는 `kyoto.jpeg` 기준
- `assets/images/` — 비어 있으면 폴더 제거 또는 갤러리 import 경로 일괄 수정

## 체크리스트

### 1. 에셋 감사

- [ ] `src/assets` 전체 목록과 `grep "assets/" src` 결과 대조표 작성 (스프레드시트 불필요, 이 문서 표 업데이트로 충분)
- [ ] 빌드 에러 원인 제거: `Gallery.js`의 존재하지 않는 `img-1~9` import 수정
- [ ] 중복·저해상도 파일 정리 (`kyouto` / `kyoto` 등)

### 2. 데이터·섹션 확장 (우선)

- [ ] `src/data/gallery.js` (또는 `galleryImages.js`) 신설 — 이미지·`tall` 레이아웃 플래그를 배열로 분리
- [ ] `Gallery.js`가 `data/`만 import 하도록 변경 (`event/*.jpeg`, `event1~3.jpg` 등 활용)
- [ ] `destinations.js`에 미사용 일본·테마 이미지 3~6건 추가 (이름·설명·tag·price·`ko/en/ja`)
- [ ] `packages.js`에 패키지 2~4건 추가 (`dizuni`, `gril` 등 잔여 이미지 소진)
- [ ] `reviews.js`에 여행지·후기 2~3건 추가 (기존 톤·i18n 유지)

### 3. 페이지·라우팅 (포트폴리오용 확장)

아래 **A안(권장)** 또는 **B안** 중 하나를 `docs/ADR.md`에 한 줄 기록 후 진행.

**A안 — 단일 홈 + 섹션 심화 (변경 최소)**  
- [ ] Destinations / Packages / Gallery 각 섹션에 “더 보기” 또는 카드 수 증가만으로 체감 볼륨 확대  
- [ ] `Navbar` 앵커와 `id="destinations"` 등 섹션 id 일치 재확인

**B안 — 라우트 페이지 추가**  
- [ ] `src/components/pages/DestinationsPage.js` (또는 `src/pages/`) — 전체 여행지 그리드  
- [ ] `PackagesPage.js`, `GalleryPage.js` — 목록·필터 UI는 Phase 03으로 미룰 수 있음  
- [ ] `App.js`에 `HashRouter` 경로 추가: `/#/destinations`, `/#/packages`, `/#/gallery`  
- [ ] `Navbar` — 해당 경로는 `<Link>`, 홈 섹션은 기존 스크롤 유지 또는 통일 정책 결정

### 4. 레거시 정리

- [ ] `Services.js`, `Products.js`, `SignUp.js`, `rsvp-1.js` — 미연결 시 삭제 또는 `pages/archive/`로 이동  
- [ ] `momolist`, `ReactCardSlider`, `ImgCarousel` 등 미사용 컴포넌트 import 여부 확인 후 정리

### 5. i18n & UI

- [ ] 추가한 여행지·패키지·갤러리 문구를 `i18n/ko.js`, `en.js`, `ja.js`에 반영 (하드코딩 금지)  
- [ ] `docs/UI_GUIDE.md` 토큰(색·radius·shadow) 준수  
- [ ] 모바일 1열 / 데스크탑 3~4열 그리드 확인

### 6. 검증

- [ ] `npm run verify` 통과  
- [ ] 로컬에서 갤러리·신규 카드 이미지 깨짐 없음 확인  
- [ ] GitHub Pages 배포 후 동일 확인 (`homepage` base path)

## 완료 조건

- 위 체크리스트가 `- [x]`로 표시됨  
- `src/assets` 미사용 파일이 **0건**이거나, 미사용 사유가 이 문서·`ADR`에 명시됨  
- `npm run verify` 및 Actions `verify` 통과  
- 홈(및 B안 선택 시 추가 라우트)에서 Destinations·Gallery가 Phase 01 대비 **카드/이미지 수가 늘어난 것**을 스크린샷으로 확인 가능

## 다음 Phase

→ `phases/phase-03-polish.md` (접근성, 성능, 배포·SEO, 최종 UI 다듬기) 생성 후 진행

## 참고

- 요구사항·섹션 정의: `CLAUDE.md` — Required Pages / Sections  
- 폴더·라우트 규칙: `docs/ARCHITECTURE.md`  
- 색·타이포: `docs/UI_GUIDE.md`  
- Phase 01 완료 여부: `phases/phase-01-setup.md` 체크리스트

### 빠른 명령 (에셋 사용처 검색)

```powershell
# PowerShell — assets 참조 파일 찾기
rg "assets/" src

# 미사용 후보: assets 목록과 대조
Get-ChildItem -Recurse src/assets -Include *.jpg,*.jpeg,*.png | Select-Object -ExpandProperty Name
```
