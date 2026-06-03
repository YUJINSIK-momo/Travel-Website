# Phase 01 — 프로젝트 셋업

## 목표

프로젝트 기초 구조와 개발 환경을 완성한다.
이 phase가 끝나면 빌드가 통과하고 첫 페이지가 로컬에서 동작한다.

## 체크리스트

- [ ] `CLAUDE.md`를 본인 프로젝트에 맞게 작성 (기술 스택, CRITICAL 규칙 3개)
- [ ] `docs/PRD.md`에 핵심 기능 5개 이하로 정의
- [ ] `docs/ARCHITECTURE.md`에 폴더 구조 그리기
- [ ] `docs/UI_GUIDE.md`에 색상 토큰 정리
- [ ] `.gitignore` 확인 (`.claude.local.md`, `.claude/settings.local.json` 포함)
- [ ] 첫 페이지 라우팅 동작 확인
- [ ] `package.json`에 `"verify"` 스크립트 등록 (`sh scripts/verify.sh`)
- [ ] `npm run verify` 통과 (lint + build + test)
- [ ] GitHub Actions `verify.yml` 첫 실행 통과 (push 후 Actions 탭 확인)

## 완료 조건

위 모든 체크박스가 `- [x]`로 변경되고 main 브랜치에 머지됨.

## 다음 Phase

→ `phases/phase-02-pages.md` 생성 후 진행

## 참고

- 막히면 `docs/ARCHITECTURE.md`의 폴더 구조 참조
- 디자인은 `docs/UI_GUIDE.md`의 토큰 사용
- 큰 결정은 `docs/ADR.md`에 기록
