# CLAUDE.md

## Project Overview
이 프로젝트는 기존 파일을 분석한 뒤, 포트폴리오용 여행 웹사이트로 리디자인/개선하는 작업이다.

Repository:
https://github.com/YUJINSIK-momo/Travel-Website.git

배포 목표:
GitHub Pages

예상 배포 URL:
https://yujinsik-momo.github.io/Travel-Website/

---

## Main Goal
기존 파일 구조와 코드를 먼저 분석한 뒤, 최대한 여행 사이트처럼 보이도록 UI/UX를 개선한다.

필요한 컴포넌트, 이미지 영역, 더미 데이터, 섹션, 레이아웃이 부족하면 직접 새로 작성한다.

---

## Design Concept
전체 컨셉은 Modern Travel Landing Website.

느낌:
- 감성적인 여행 사이트
- 고급스럽고 시원한 이미지 중심
- 여행지 탐색이 쉬운 구조
- 포트폴리오용으로 완성도 있어 보이는 UI
- 모바일/PC 모두 보기 좋은 반응형 디자인

---

## Keep / Improve
기존 파일은 먼저 분석하고 아래 기준으로 정리한다.

- 사용 가능한 컴포넌트는 유지 후 리디자인
- 불필요한 파일은 삭제 또는 정리
- 중복 컴포넌트 제거
- 하드코딩이 심한 부분은 데이터 배열 기반으로 변경
- 여행 사이트에 맞지 않는 문구/디자인은 모두 수정
- 부족한 섹션은 직접 생성

---

## Required Pages / Sections

### Home Page
필수 섹션:

1. Hero Section
- 큰 배경 이미지 또는 그라데이션
- 메인 카피
- 서브 카피
- 검색 박스
- CTA 버튼

예시 문구:
- Discover Your Next Journey
- 특별한 여행지를 한눈에 찾아보세요

2. Destination Cards
- 인기 여행지 카드
- 이미지
- 지역명
- 설명
- 가격 또는 추천 태그

3. Travel Packages
- 추천 여행 패키지
- 기간
- 난이도 또는 여행 스타일
- 가격
- 자세히 보기 버튼

4. Why Choose Us
- 맞춤 여행 추천
- 합리적인 가격
- 안전한 일정 관리
- 빠른 상담

5. Travel Gallery
- 여행 이미지 그리드
- 감성적인 레이아웃

6. Reviews
- 고객 후기 카드
- 별점
- 여행지
- 후기 내용

7. Newsletter / Contact CTA
- 이메일 입력
- 상담 요청 버튼

8. Footer
- 로고
- 메뉴
- SNS 링크 영역
- copyright

---

## Recommended Menu
상단 네비게이션은 아래 메뉴만 사용한다.

- Home
- Destinations
- Packages
- Gallery
- Reviews
- Contact

---

## UI/UX Requirements
- 여행 사이트처럼 이미지 중심 레이아웃으로 구성
- 카드 UI 사용
- 섹션 간 여백 충분히 확보
- CTA 버튼 명확하게 표시
- hover 효과 추가
- 스크롤 시 자연스럽게 보이는 구성
- 모바일에서는 카드가 1열로 정렬
- PC에서는 3~4열 카드 그리드 사용
- 전체 색감은 밝고 세련되게 구성
- 너무 기업용 관리자 화면처럼 보이지 않게 할 것

---

## Visual Style
추천 스타일:

- Background: white / light sky / soft sand tone
- Primary color: blue / teal 계열
- Accent color: orange 또는 coral 계열
- Border radius: large
- Card shadow: soft
- Typography: 크고 명확한 headline
- Hero는 풀폭 이미지 느낌

이미지가 없으면 Unsplash 스타일의 placeholder 이미지 URL을 사용하거나, CSS gradient/card background로 대체한다.

---

## Data Structure
더미 데이터는 배열로 분리한다.

예시:

```ts
const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "푸른 바다와 감성적인 리조트가 있는 인기 휴양지",
    image: "...",
    tag: "Best Seller",
  },
]

---

## Language Support

이 프로젝트는 다국어 지원을 포함한다.

지원 언어:
- 한국어: ko
- 일본어: ja
- 영어: en

기본 언어:
- 한국어 ko

---

## i18n Requirement

사이트의 주요 문구는 하드코딩하지 말고 다국어 데이터로 분리한다.

대상:
- Header 메뉴
- Hero 문구
- CTA 버튼
- 여행지 카드
- 패키지 설명
- 후기
- Footer
- Contact / Newsletter 문구

추천 구조:

```text
src/
  i18n/
    ko.ts
    ja.ts
    en.ts
    index.ts