#!/bin/bash

# =============================================================================
# PKU + THU Joint Postdoc Forum 2025 - Static Build Script
# =============================================================================
# This script builds static assets for nginx deployment
# Author: Claude Code (claude.ai/code)
# =============================================================================

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Project information
PROJECT_NAME="PKU + THU Joint Postdoc Forum 2025"
BUILD_DIR="out"
BACKUP_CONFIG="next.config.ts.backup"

echo -e "${BLUE}🚀 Building Static Assets for ${PROJECT_NAME}${NC}"
echo "=================================================================="

# Function to print status messages
print_status() {
    echo -e "${GREEN}✅${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠️${NC} $1"
}

print_error() {
    echo -e "${RED}❌${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to detect package manager
detect_package_manager() {
    if [ -f "yarn.lock" ]; then
        echo "yarn"
    elif [ -f "package-lock.json" ]; then
        echo "npm"
    else
        echo "npm"
    fi
}

# Function to backup and modify Next.js config for static export
enable_static_export() {
    print_status "Backing up current Next.js configuration..."
    cp next.config.ts "$BACKUP_CONFIG"

    print_status "Enabling static export configuration..."

    # Create temporary config with static export enabled
    cat > next.config.ts << 'EOF'
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
};

export default withNextIntl(nextConfig);
EOF
}

# Function to restore original config
restore_config() {
    if [ -f "$BACKUP_CONFIG" ]; then
        print_status "Restoring original Next.js configuration..."
        mv "$BACKUP_CONFIG" next.config.ts
    fi
}

# Function to clean previous builds
clean_build() {
    print_status "Cleaning previous build artifacts..."
    rm -rf .next
    rm -rf "$BUILD_DIR"
}

# Function to install dependencies
install_dependencies() {
    local pm=$1
    print_status "Installing dependencies with $pm..."

    if [ "$pm" = "yarn" ]; then
        yarn install --frozen-lockfile
    else
        npm ci
    fi
}

# Function to build the project
build_project() {
    local pm=$1
    print_status "Building the project for static export..."

    if [ "$pm" = "yarn" ]; then
        yarn build
    else
        npm run build
    fi
}

# Function to verify build output
verify_build() {
    if [ ! -d "$BUILD_DIR" ]; then
        print_error "Build failed: $BUILD_DIR directory not found!"
        return 1
    fi

    # Check if essential files exist
    local essential_files=(
        "$BUILD_DIR/en/index.html"
        "$BUILD_DIR/zh/index.html"
        "$BUILD_DIR/en/registration/index.html"
        "$BUILD_DIR/zh/registration/index.html"
    )

    for file in "${essential_files[@]}"; do
        if [ ! -f "$file" ]; then
            print_warning "Warning: $file not found"
        else
            print_status "✓ $file exists"
        fi
    done

    # Check build size
    local build_size=$(du -sh "$BUILD_DIR" | cut -f1)
    print_status "Build completed successfully! Total size: $build_size"
}

# Function to create deployment info
create_deployment_info() {
    print_status "Creating deployment information..."

    cat > "$BUILD_DIR/deployment-info.txt" << EOF
PKU + THU Joint Postdoc Forum 2025 - Static Build
=================================================

Build Date: $(date)
Build Version: $(git rev-parse --short HEAD 2>/dev/null || echo "unknown")
Build Environment: Static Export for Nginx

Deployment Instructions:
1. Copy the contents of this directory to your nginx web root
2. Configure nginx with the provided nginx.conf template
3. Ensure proper URL rewriting for SPA routing

Available Languages:
- English: /en/
- Chinese: /zh/

Key Features:
- Bilingual internationalization
- QR code registration system
- Responsive design
- Static site generation

Generated with Claude Code: https://claude.com/claude-code
EOF
}

# Function to show deployment instructions
show_deployment_instructions() {
    echo ""
    echo -e "${BLUE}📋 Deployment Instructions${NC}"
    echo "=================================================================="
    echo "1. Copy all files from '$BUILD_DIR/' to your nginx web root"
    echo "2. Configure nginx with the provided nginx.conf template"
    echo "3. Test the deployment:"
    echo "   - English: http://your-domain.com/en/"
    echo "   - Chinese: http://your-domain.com/zh/"
    echo ""
    echo -e "${YELLOW}Note:${NC} Don't forget to configure nginx URL rewriting!"
    echo "See nginx.conf template for proper configuration."
}

# Main execution
main() {
    echo -e "${BLUE}🔍 Checking environment...${NC}"

    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root."
        exit 1
    fi

    # Check if Node.js is installed
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi

    # Detect package manager
    local package_manager=$(detect_package_manager)
    print_status "Using package manager: $package_manager"

    # Check if package manager is available
    if ! command_exists "$package_manager"; then
        print_error "$package_manager is not installed."
        exit 1
    fi

    # Set up trap to restore config on exit
    trap restore_config EXIT

    # Execute build steps
    clean_build
    enable_static_export
    install_dependencies "$package_manager"
    build_project "$package_manager"
    verify_build
    create_deployment_info

    print_status "Static build completed successfully!"
    show_deployment_instructions

    echo ""
    echo -e "${GREEN}🎉 Build completed! Static files are ready in '$BUILD_DIR/'${NC}"
}

# Run main function
main "$@"