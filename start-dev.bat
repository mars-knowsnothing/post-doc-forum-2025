@echo off
REM PKU + THU Joint Postdoc Forum 2025 - Development Server Startup Script (Windows)
REM This script cleans up port usage and starts the Next.js development server

setlocal enabledelayedexpansion

echo 🚀 Starting PKU + THU Joint Postdoc Forum 2025 Development Server...
echo ==================================================

REM Configuration
set PORT=3000
if defined PORT (set DEV_PORT=%PORT%) else (set DEV_PORT=3000)

echo 🔍 Checking for processes on port %DEV_PORT%...

REM Kill processes using the port (Windows)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :%DEV_PORT%') do (
    echo ⚠️  Found process %%a using port %DEV_PORT%. Cleaning up...
    taskkill /f /pid %%a >nul 2>&1
)

echo ✅ Port %DEV_PORT% cleaned up

REM Check if package.json exists
if not exist package.json (
    echo ❌ package.json not found. Please run this script from the project root directory.
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist node_modules (
    echo 📥 Installing dependencies...
    npm install
)

echo ✅ Dependencies ready

echo 🎯 Starting development server on port %DEV_PORT%...
echo 📱 The application will be available at:
echo    • Local:   http://localhost:%DEV_PORT%
echo    • English: http://localhost:%DEV_PORT%/en
echo    • Chinese: http://localhost:%DEV_PORT%/zh
echo.
echo 🎨 Features enabled:
echo    • 🌍 Bilingual support (English/Chinese)
echo    • 🔄 Hot reload
echo    • ⚡ Turbopack (Next.js 16)
echo    • 📱 Responsive design
echo.
echo Press Ctrl+C to stop the server
echo ==================================================

npm run dev

pause