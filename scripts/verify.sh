#!/usr/bin/env sh
# verify.sh
# "완료의 정의"를 코드로 표현한 파일.
# Claude Code의 Stop hook 또는 CI에서 호출.
# 한 단계라도 실패하면 즉시 멈춘다.

set -e

echo "[verify 1/3] lint..."
npm run lint

echo "[verify 2/3] build..."
npm run build

echo "[verify 3/3] test..."
npm test --if-present

echo ""
echo "[verify] OK — 모든 검증 통과"
