# Travel Website — 포트폴리오용 여행 랜딩 사이트

React 기반 단일 페이지(SPA) 여행 안내 웹사이트입니다. 히어로·인기 여행지·패키지·갤러리·후기 등 섹션으로 구성되어 있으며, GitHub Pages 배포를 전제로 합니다.

## 라이브 데모

- [GitHub Pages](https://yujinsik-momo.github.io/Travel-Website/)

## 저장소

- [github.com/YUJINSIK-momo/Travel-Website](https://github.com/YUJINSIK-momo/Travel-Website.git)

## 기술 스택

- React 17
- React Router
- Sass(SCSS)
- React Icons
- react-responsive-carousel
- gh-pages(GitHub Pages 배포)

## 주요 기능

- 이미지 중심 랜딩 레이아웃(히어로, 카드 그리드, 갤러리 등)
- 반응형 UI(모바일·데스크톱)
- 다국어 지원(i18n): 한국어(기본) · 영어 · 일본어 (`src/i18n/`)
- 여행 관련 더미 데이터는 `src/data/` 배열 기반으로 관리

## 로컬 실행

```bash
git clone https://github.com/YUJINSIK-momo/Travel-Website.git
cd Travel-Website
npm install
npm start
```

브라우저에서 `http://localhost:3000` 으로 접속합니다.

## 빌드 · 배포

```bash
npm run build
```

GitHub Pages에 올리려면 `package.json`에 설정된 스크립트를 사용합니다(배포 전 `gh-pages` 브랜치·원격 저장소 설정이 필요할 수 있습니다).

```bash
npm run deploy
```

> `predeploy`가 `yarn build`를 호출합니다. Yarn을 쓰지 않는 경우 `npm run build` 후 `gh-pages -d build` 로 동일하게 배포할 수 있습니다.

## 프로젝트 구조 요약

- `src/components/` — UI 컴포넌트(Hero, DestinationCards, TravelPackages 등)
- `src/data/` — 목적지·패키지·후기 더미 데이터
- `src/i18n/` — 언어별 문구 (`ko.js`, `en.js`, `ja.js`)

## 라이선스·출처

이 프로젝트는 기존 React 여행 템플릿을 분석한 뒤 포트폴리오용으로 UI/UX와 콘텐츠를 개선하는 형태로 진행되었습니다. 
