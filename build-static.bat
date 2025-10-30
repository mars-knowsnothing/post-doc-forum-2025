@echo off
REM =============================================================================
REM PKU + THU Joint Postdoc Forum 2025 - Static Build Script (Windows)
REM =============================================================================
REM This script builds static assets for nginx deployment
REM Author: Claude Code (claude.ai/code)
REM =============================================================================

setlocal enabledelayedexpansion

REM Project information
set "PROJECT_NAME=PKU + THU Joint Postdoc Forum 2025"
set "BUILD_DIR=out"
set "BACKUP_CONFIG=next.config.ts.backup"

echo 🚀 Building Static Assets for %PROJECT_NAME%
echo ==================================================================

REM Function to print status messages
:print_status
echo ✅ %~1
goto :eof

:print_warning
echo ⚠️  %~1
goto :eof

:print_error
echo ❌ %~1
goto :eof

REM Check if we're in the right directory
if not exist "package.json" (
    call :print_error "package.json not found. Please run this script from the project root."
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    call :print_error "Node.js is not installed. Please install Node.js first."
    exit /b 1
)

REM Detect package manager
set "PACKAGE_MANAGER=npm"
if exist "yarn.lock" set "PACKAGE_MANAGER=yarn"

call :print_status "Using package manager: %PACKAGE_MANAGER%"

REM Check if package manager is available
%PACKAGE_MANAGER% --version >nul 2>&1
if %errorlevel% neq 0 (
    call :print_error "%PACKAGE_MANAGER% is not installed."
    exit /b 1
)

REM Clean previous builds
call :print_status "Cleaning previous build artifacts..."
if exist ".next" rmdir /s /q ".next"
if exist "%BUILD_DIR%" rmdir /s /q "%BUILD_DIR%"

REM Backup and modify Next.js config for static export
call :print_status "Backing up current Next.js configuration..."
copy "next.config.ts" "%BACKUP_CONFIG%" >nul

call :print_status "Enabling static export configuration..."

REM Create temporary config with static export enabled
(
echo import type { NextConfig } from "next";
echo import createNextIntlPlugin from 'next-intl/plugin';
echo.
echo const withNextIntl = createNextIntlPlugin('./src/i18n.ts'^);
echo.
echo const nextConfig: NextConfig = {
echo   output: 'export',
echo   trailingSlash: true,
echo   images: {
echo     unoptimized: true
echo   },
echo };
echo.
echo export default withNextIntl(nextConfig^);
) > next.config.ts

REM Install dependencies
call :print_status "Installing dependencies with %PACKAGE_MANAGER%..."
if "%PACKAGE_MANAGER%"=="yarn" (
    yarn install --frozen-lockfile
) else (
    npm ci
)

if %errorlevel% neq 0 (
    call :print_error "Failed to install dependencies"
    goto :restore_config
)

REM Build the project
call :print_status "Building the project for static export..."
if "%PACKAGE_MANAGER%"=="yarn" (
    yarn build
) else (
    npm run build
)

if %errorlevel% neq 0 (
    call :print_error "Build failed"
    goto :restore_config
)

REM Verify build output
if not exist "%BUILD_DIR%" (
    call :print_error "Build failed: %BUILD_DIR% directory not found!"
    goto :restore_config
)

REM Check if essential files exist
if exist "%BUILD_DIR%\en\index.html" (
    call :print_status "✓ %BUILD_DIR%\en\index.html exists"
) else (
    call :print_warning "Warning: %BUILD_DIR%\en\index.html not found"
)

if exist "%BUILD_DIR%\zh\index.html" (
    call :print_status "✓ %BUILD_DIR%\zh\index.html exists"
) else (
    call :print_warning "Warning: %BUILD_DIR%\zh\index.html not found"
)

REM Create deployment info
call :print_status "Creating deployment information..."

(
echo PKU + THU Joint Postdoc Forum 2025 - Static Build
echo =================================================
echo.
echo Build Date: %date% %time%
echo Build Environment: Static Export for Nginx
echo.
echo Deployment Instructions:
echo 1. Copy the contents of this directory to your nginx web root
echo 2. Configure nginx with the provided nginx.conf template
echo 3. Ensure proper URL rewriting for SPA routing
echo.
echo Available Languages:
echo - English: /en/
echo - Chinese: /zh/
echo.
echo Key Features:
echo - Bilingual internationalization
echo - QR code registration system
echo - Responsive design
echo - Static site generation
echo.
echo Generated with Claude Code: https://claude.com/claude-code
) > "%BUILD_DIR%\deployment-info.txt"

call :print_status "Build completed successfully!"

echo.
echo 📋 Deployment Instructions
echo ==================================================================
echo 1. Copy all files from '%BUILD_DIR%\' to your nginx web root
echo 2. Configure nginx with the provided nginx.conf template
echo 3. Test the deployment:
echo    - English: http://your-domain.com/en/
echo    - Chinese: http://your-domain.com/zh/
echo.
echo ⚠️ Note: Don't forget to configure nginx URL rewriting!
echo See nginx.conf template for proper configuration.
echo.
echo 🎉 Build completed! Static files are ready in '%BUILD_DIR%\'

:restore_config
REM Restore original config
if exist "%BACKUP_CONFIG%" (
    call :print_status "Restoring original Next.js configuration..."
    move "%BACKUP_CONFIG%" "next.config.ts" >nul
)

echo.
pause