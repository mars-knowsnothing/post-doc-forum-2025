# PKU + THU Joint Postdoc Forum 2025 - Makefile
# Development and build automation

.PHONY: help dev build clean install lint start stop kill-port

# Default target
help:
	@echo "🚀 PKU + THU Joint Postdoc Forum 2025 - Development Commands"
	@echo "============================================================"
	@echo ""
	@echo "📋 Available commands:"
	@echo "  make dev        - Start development server (recommended)"
	@echo "  make start      - Start development server using script"
	@echo "  make build      - Build production version"
	@echo "  make install    - Install dependencies"
	@echo "  make clean      - Clean build cache and dependencies"
	@echo "  make lint       - Run ESLint"
	@echo "  make kill-port  - Kill processes on port 3000"
	@echo "  make stop       - Stop all Node.js processes"
	@echo ""
	@echo "🌍 Application URLs:"
	@echo "  Local:   http://localhost:3000"
	@echo "  English: http://localhost:3000/en"
	@echo "  Chinese: http://localhost:3000/zh"

# Start development server using startup script
dev start:
	@if [ -f "./start-dev.sh" ]; then \
		./start-dev.sh; \
	else \
		echo "❌ start-dev.sh not found. Running npm run dev directly..."; \
		npm run dev; \
	fi

# Install dependencies
install:
	@echo "📥 Installing dependencies..."
	npm install

# Build production version
build:
	@echo "🏗️  Building production version..."
	npm run build

# Clean cache and dependencies
clean:
	@echo "🧹 Cleaning build cache and dependencies..."
	rm -rf .next
	rm -rf out
	rm -rf node_modules
	rm -f package-lock.json
	@echo "✅ Clean complete. Run 'make install' to reinstall dependencies."

# Run linter
lint:
	@echo "🔍 Running ESLint..."
	npm run lint

# Kill processes on port 3000
kill-port:
	@echo "🔍 Killing processes on port 3000..."
	@if command -v lsof >/dev/null 2>&1; then \
		lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "✅ No processes found on port 3000"; \
	else \
		echo "⚠️  lsof not available. Please kill port 3000 processes manually."; \
	fi

# Stop all Node.js processes (use with caution)
stop:
	@echo "⚠️  Stopping all Node.js processes..."
	@read -p "This will stop ALL Node.js processes. Continue? (y/N): " confirm && \
	if [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \
		pkill -f node || echo "✅ No Node.js processes found"; \
	else \
		echo "❌ Operation cancelled"; \
	fi

# Development with custom port
dev-port:
	@read -p "Enter port number (default: 3000): " port; \
	port=$${port:-3000}; \
	echo "🚀 Starting development server on port $$port..."; \
	PORT=$$port ./start-dev.sh