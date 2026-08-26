@echo off
cd /d "%~dp0"
echo Avvio il sito in locale...
start cmd /c "npm run dev"
timeout /t 4 /nobreak >nul
start "" http://localhost:4321
echo.
echo Il sito e' ora aperto nel browser su http://localhost:4321
echo Per fermarlo, chiudi la finestra nera che si e' aperta.
pause
