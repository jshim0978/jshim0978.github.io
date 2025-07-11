#!/bin/bash

# Portfolio Deployment Script
# This script builds and deploys your React+Jekyll portfolio to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting deployment process..."
echo "=================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository. Please run this script from the project root."
    exit 1
fi

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf _site/
rm -rf assets/js/bundle.js*
rm -rf assets/js/tailwind.css

# Step 2: Install dependencies if needed
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing Node.js dependencies..."
    npm install
fi

# Step 3: Build React application
echo "⚛️  Building React application..."
npm run build

# Step 4: Build Jekyll site
echo "🏗️  Building Jekyll site..."
bundle exec jekyll build

# Step 5: Check git status
echo "📊 Checking git status..."
git status

# Step 6: Add changes to git
echo "➕ Adding changes to git..."
git add .

# Step 7: Commit changes
echo "💾 Committing changes..."
COMMIT_MESSAGE="Deploy enhanced portfolio with modern design and improved UX

✨ Features:
- Modern gradient backgrounds and glass morphism effects
- Enhanced hero section with animated profile and metrics
- Interactive skills showcase with categorized expertise
- Improved project cards with better visual hierarchy
- Refined navigation with professional branding
- Research-focused messaging for academic appeal

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

git commit -m "$COMMIT_MESSAGE"

# Step 8: Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment completed successfully!"
echo "=================================="
echo "🌐 Your site will be available at: https://jshim0978.github.io/"
echo "⏰ GitHub Pages may take 5-10 minutes to update"
echo "🔍 Check the deployment status at: https://github.com/jshim0978/jshim0978.github.io/actions"
echo ""
echo "🎉 Your beautiful new portfolio is now live!"