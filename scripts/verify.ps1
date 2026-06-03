# verify.ps1
# Windows PowerShell 환경용 검증 스크립트.
# verify.sh와 동일한 역할.

$ErrorActionPreference = "Stop"

Write-Host "[verify 1/3] lint..."
npm run lint
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "[verify 2/3] build..."
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "[verify 3/3] test..."
npm test --if-present
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host ""
Write-Host "[verify] OK - 모든 검증 통과"
