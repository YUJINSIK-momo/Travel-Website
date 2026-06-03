# Phase 03 — 일본 중심 재편 & 이벤트 기능

## 배경

Phase 01에서 사용자가 제공한 이미지를 "미사용"으로 삭제하고, Phase 02에서 Unsplash 원격 이미지로 콘텐츠를 채웠다. 그러나 사용자가 제공한 이미지는 명확히 **일본 중심 + 계절 이벤트/캠페인** 콘셉트였다(일본 지역 사진 + `event/` 폴더 + `momo*` 프로모션 배너). 본 phase에서 이를 바로잡는다.

> 결정: **일본 중심으로 재편** + **이벤트 전용 페이지 + 홈 섹션** (사용자 확인됨).
> 관련 ADR: ADR-007(일본 중심 재편), ADR-008(이벤트 기능). 메모리: `use-user-provided-images`.

## 목표

1. 삭제했던 사용자 제공 이미지를 복구하고 사이트에 실제로 노출한다.
2. Phase 02에서 추가한 Unsplash 국제 여행지/패키지/갤러리를 제거하고 일본 로컬 사진으로 대체한다.
3. 계절 이벤트/체험을 다루는 **Events 기능**(전용 페이지 + 홈 섹션 + Navbar 메뉴)을 추가한다.

## 이미지 매핑 (직접 확인한 내용 기준)

| 파일 | 내용 | 용도 |
|------|------|------|
| `kyouto.jpeg` | 기요미즈데라 단풍 야경 | 여행지: 교토 |
| `tokyo.jpg` | 도쿄 | 여행지: 도쿄 |
| `hokaido.jpeg` | 홋카이도 설경 | 여행지: 홋카이도 |
| `event/1.jpeg` | 삿포로 은행나무 야경(구 도청) | 여행지: 삿포로 |
| `iwate.jpeg` | 안개 낀 호수·단풍 | 여행지: 이와테 |
| `oita.jpeg` | 단풍 속 전통 온천 | 여행지: 벳푸·오이타 |
| `event/4.jpeg` | 아라시야마 도게쓰교 야경 | 여행지: 아라시야마 |
| `jinzya.jpeg` | 호수 위 토리이 일몰 | 여행지: 시라히게 신사(비와코) · Hero 배경 후보 |
| `dizuni.jpg` | 디즈니 성 불꽃 야경 | 여행지: 도쿄 디즈니리조트 |
| `maldives.jpg` `borabora.jpg` `keywest.jpg` | 휴양지(사용자 로컬) | 여행지: 해외(보조) |
| `event/5.jpeg` | 오사카 미도스지 일루미네이션 | 이벤트 |
| `event/6.jpeg` | 도쿄 마루노우치 일루미네이션 | 이벤트 |
| `event/7.jpeg` | 메구로강 벚꽃 야경 | 이벤트 |
| `event/8.jpeg` | 기모노 체험(인물) | 이벤트 |
| `event/2.jpeg` | 나이트 크루즈 디너 | 이벤트 |
| `event/3.jpeg` | 겨울 글램핑 | 이벤트 |
| `momo1~3.jpg` | 일본어 프로모션 배너(限定旅/京都/무료 기획) | 이벤트 페이지 캠페인 배너 |
| `monzi.jpeg` | 벚꽃 사찰 야경 | 갤러리 |
| `tiba1.jpeg` | 공항 활주로 야경 | 갤러리 |
| `gril.jpeg` | 황혼 바닷가 인물 | 갤러리 |

> 라벨(특히 `jinzya`=시라히게 신사, `dizuni`=도쿄 디즈니)은 best-guess이며 `src/data/*.js`에서 쉽게 수정 가능.

## 체크리스트

### 1. 이미지 복구
- [x] `f11b1d3`에서 일본/이벤트 이미지 복구·추적

### 2. 데이터 재편
- [ ] `destinations.js` — 일본 9 + 해외 3, 전부 로컬 이미지(Unsplash 제거)
- [ ] `packages.js` — 일본 테마 추가, Unsplash 패키지 제거
- [ ] `gallery.js` — 일본 사진으로 교체(Unsplash 제거)

### 3. 이벤트 기능
- [ ] `data/events.js` 신설 (ko/en/ja)
- [ ] `EventCard.js`, `Events.js`(홈 섹션), `pages/EventsPage.js`
- [ ] `momo*` 캠페인 배너 영역
- [ ] `Navbar` Events 메뉴, `App.js` `/events` 라우트, `Home.js` 섹션 삽입

### 4. Hero & i18n
- [ ] Hero 배경 일본 이미지로 교체
- [ ] `nav.events`, `events.*` 문구 ko/en/ja 추가

### 5. 검증·배포
- [ ] `npm run verify` 통과
- [ ] 커밋 + GitHub Pages 배포

## 완료 조건

- 사용자 제공 일본/이벤트 이미지가 사이트에 노출됨 (미사용 0건 또는 사유 명시)
- Unsplash 원격 의존 제거
- Events 페이지/섹션 동작, `npm run verify` 및 배포 통과

## 다음 Phase

→ `phases/phase-04-polish.md` (접근성·SEO·성능·문서 정합화)
