@echo off
setlocal
cd /d "%~dp0"
"C:\Program Files\nodejs\node.exe" node_modules\next\dist\bin\next dev --turbo --hostname 0.0.0.0 --port 3000
