---
description: 새(초안) 프로젝트를 Claude Starter Kit으로 처음부터 구축
argument-hint: <만들 것: 컨셉/스택/핵심기능>
---

빈(초안) 프로젝트를 Claude Starter Kit 기반으로 처음부터 구축한다.

만들 것: $ARGUMENTS

## 시작 전 확정 (모호하면 먼저 질문)
- 컨셉 (무엇을, 누구를 위해)
- 기술 스택 (언어 / 프레임워크 / 빌드 / 배포)
- 핵심 기능 5개 이내

## 진행 순서
1. 위 3가지를 확정한다. 부족하면 사용자에게 묻는다.
2. starter kit 구조를 생성한다:
   - `CLAUDE.md` (기술 스택 + CRITICAL 규칙 3개 이내)
   - `docs/PRD.md`, `docs/ARCHITECTURE.md`, `docs/ADR.md`, `docs/UI_GUIDE.md`
   - `phases/phase-01-setup.md`
   - `scripts/verify.sh` + `scripts/verify.ps1`, `package.json`에 `verify`·`lint` 스크립트
   - `.github/workflows/verify.yml`, `.gitignore`
3. 스택에 맞는 초기 폴더 구조와 최소 동작 화면(또는 엔트리포인트)을 만든다.
4. 빌드·lint(가능하면 `npm run verify`)가 통과하는 상태로 마무리하고, phase-01 체크리스트로 다음 작업을 안내한다.

## 규칙
- 대량 생성·되돌리기 어려운 작업은 계획을 먼저 보여주고 승인받는다.
- 커밋/푸시/배포는 사용자가 명시적으로 허락하기 전에는 하지 않는다.
