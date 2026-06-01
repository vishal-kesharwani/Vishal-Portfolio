@echo off
setlocal
cd /d "%~dp0"
"%~dp0node_modules\.bin\next.cmd" dev --hostname 0.0.0.0 --port 3000
