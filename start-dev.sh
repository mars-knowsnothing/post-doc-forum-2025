#!/bin/bash

# PKU + THU Joint Postdoc Forum 2025 - Development Server Startup Script
# This script cleans up port usage and starts the Next.js development server

set -e  # Exit on any error

echo "🚀 Starting PKU + THU Joint Postdoc Forum 2025 Development Server..."
echo "=================================================="

# Configuration
PORT=${PORT:-3000}
PROJECT_NAME="post-doc-forum-2025"

# Function to kill processes on specified port
cleanup_port() {
    local port=$1
    echo "🔍 Checking for processes on port $port..."

    # Find and kill processes using the port
    if lsof -ti:$port >/dev/null 2>&1; then
        echo "⚠️  Found processes using port $port. Cleaning up..."
        lsof -ti:$port | xargs kill -9 2>/dev/null || true
        sleep 2

        # Verify cleanup
        if lsof -ti:$port >/dev/null 2>&1; then
            echo "❌ Failed to cleanup port $port. Manual intervention required."
            echo "Please run: lsof -ti:$port | xargs kill -9"
            exit 1
        else
            echo "✅ Port $port cleaned up successfully"
        fi
    else
        echo "✅ Port $port is available"
    fi
}

# Function to check if npm/yarn is available
check_package_manager() {
    if command -v npm >/dev/null 2>&1; then
        echo "📦 Using npm as package manager"
        PKG_MANAGER="npm"
    elif command -v yarn >/dev/null 2>&1; then
        echo "📦 Using yarn as package manager"
        PKG_MANAGER="yarn"
    else
        echo "❌ Neither npm nor yarn found. Please install Node.js and npm."
        exit 1
    fi
}

# Function to install dependencies if needed
check_dependencies() {
    if [ ! -d "node_modules" ] || [ ! -f "package-lock.json" ] && [ ! -f "yarn.lock" ]; then
        echo "📥 Installing dependencies..."
        if [ "$PKG_MANAGER" = "npm" ]; then
            npm install
        else
            yarn install
        fi
    else
        echo "✅ Dependencies already installed"
    fi
}

# Function to start development server
start_dev_server() {
    echo "🎯 Starting development server on port $PORT..."
    echo "📱 The application will be available at:"
    echo "   • Local:   http://localhost:$PORT"
    echo "   • English: http://localhost:$PORT/en"
    echo "   • Chinese: http://localhost:$PORT/zh"
    echo ""
    echo "🎨 Features enabled:"
    echo "   • 🌍 Bilingual support (English/Chinese)"
    echo "   • 🔄 Hot reload"
    echo "   • ⚡ Turbopack (Next.js 16)"
    echo "   • 📱 Responsive design"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo "=================================================="

    if [ "$PKG_MANAGER" = "npm" ]; then
        npm run dev
    else
        yarn dev
    fi
}

# Function to handle cleanup on script exit
cleanup_on_exit() {
    echo ""
    echo "🛑 Shutting down development server..."
    cleanup_port $PORT
    echo "✅ Development server stopped"
}

# Set up trap for cleanup on exit
trap cleanup_on_exit EXIT INT TERM

# Main execution
main() {
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        echo "❌ package.json not found. Please run this script from the project root directory."
        exit 1
    fi

    # Verify this is the correct project
    if ! grep -q "post-doc-forum-2025" package.json 2>/dev/null; then
        echo "⚠️  Warning: This doesn't appear to be the correct project directory."
        echo "Please ensure you're in the PKU + THU Joint Postdoc Forum 2025 project root."
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi

    # Execute startup sequence
    cleanup_port $PORT
    check_package_manager
    check_dependencies
    start_dev_server
}

# Run main function
main "$@"