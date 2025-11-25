#!/bin/bash

echo "🚀 M2 Film Site - GitHub Setup"
echo "=============================="
echo ""
echo "Step 1: Create the GitHub repository"
echo "------------------------------------"
echo "Opening GitHub in your browser..."
echo ""
sleep 2

# Open GitHub new repo page
open "https://github.com/new?name=m2-film-site&description=Landing+page+for+M2+Film&visibility=public"

echo "✓ Browser opened to create new repo"
echo ""
echo "In GitHub:"
echo "  1. Repository name: m2-film-site"
echo "  2. Description: Landing page for M2 Film"
echo "  3. Set to PUBLIC"
echo "  4. Do NOT initialize with README (we already have one)"
echo "  5. Click 'Create repository'"
echo ""
read -p "Press ENTER when you've created the repo on GitHub..."

echo ""
echo "Step 2: Push to GitHub"
echo "----------------------"

cd /Users/eham1/m2-film-site

# Add remote
git remote add origin git@github.com:EHam1/m2-film-site.git

# Push
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! Your site is on GitHub"
echo ""
echo "Step 3: Deploy to Vercel (Optional)"
echo "------------------------------------"
echo "1. Go to https://vercel.com"
echo "2. Sign in with GitHub"
echo "3. Click 'Import Project'"
echo "4. Select 'm2-film-site'"
echo "5. Click 'Deploy'"
echo ""
echo "Your site will be live in ~2 minutes!"
echo ""
echo "Opening Vercel..."
sleep 2
open "https://vercel.com/new"

echo ""
echo "🎉 All done!"

