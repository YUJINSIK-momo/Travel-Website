---
description: 빌드 검증 → 커밋 → 푸쉬 자동화
---

다음 순서를 **순차적으로** 실행해줘. 한 단계라도 실패하면 멈추고 사용자에게 보고.

## 1. Lint 검증
```bash
npm run lint
```
실패 시: 에러 내용 보고하고 종료.

## 2. 빌드 검증
```bash
npm run build
```
실패 시: 에러 내용 보고하고 종료.

## 3. 변경사항 확인
```bash
git status
git diff --stat
```

스테이지되지 않은 변경이 있으면 사용자에게 어떤 파일을 커밋할지 확인.

## 4. 커밋

CLAUDE.md의 커밋 규칙을 따라 한글 메시지로 작성:

- `feat:` 기능 추가
- `fix:` 버그 수정
- `docs:` 문서
- `refactor:` 코드 개선
- `chore:` 설정

메시지 형식: `prefix: 한 줄 요약 (50자 이내)`

## 5. 푸쉬
```bash
git push origin main
```

**금지 사항**: `--force`, `--no-verify`, `-f` 옵션은 절대 사용하지 않는다.
