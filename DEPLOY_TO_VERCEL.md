# 🚀 Deploy to Vercel - Step by Step Guide

## 📋 Prerequisites

- GitHub account (free)
- Vercel account (free)
- Git installed on your computer

---

## 🎯 Option 1: Using Vercel Dashboard (Recommended)

### Step 1: Create a GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in top right → "New repository"
3. **Fill in details:**
   - Repository name: `support-chatbot` (or any name you want)
   - Description: "Support chatbot built with Next.js and React"
   - **Make it Public** (unless you have paid GitHub)
   - **Don't** initialize with README (you already have one)
4. **Click "Create repository"**

### Step 2: Push Your Code to GitHub

Open your terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Support chatbot"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/support-chatbot.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
If your GitHub username is `johndoe`, use:
```bash
git remote add origin https://github.com/johndoe/support-chatbot.git
```

### Step 3: Connect to Vercel

1. **Go to vercel.com** and sign in (use GitHub to sign in)
2. **Click "Add New Project"**
3. **Import your repository:**
   - Find your `support-chatbot` repo
   - Click "Import"
4. **Configure project:**
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)
5. **Click "Deploy"**
6. **Wait 2-3 minutes** for deployment

### Step 4: Done! 🎉

You'll get a URL like: `https://support-chatbot.vercel.app`

---

## 🎯 Option 2: Using Vercel CLI (Command Line)

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N**
- Project name: `support-chatbot` (or press Enter for default)
- Directory: `./` (press Enter)
- Override settings? **N**

### Step 4: (Optional) Deploy to Production

```bash
vercel --prod
```

---

## 🔧 If You Get Errors

### Error: "Cannot find module"

**Solution:** Add a `.npmrc` file to your project:
```
.vercelignore file is not ignored by default
```

Actually, make sure your `package.json` has the right dependencies.

### Error: Build failed

**Solution:** Test locally first:
```bash
npm run build
```

If this fails locally, fix it before deploying.

### Error: Git not initialized

**Solution:**
```bash
git init
git add .
git commit -m "Initial commit"
```

---

## 📝 Important Notes

### 1. Environment Variables
If you add environment variables later:
- Add them in Vercel Dashboard → Settings → Environment Variables
- Restart deployment

### 2. Custom Domain
After deployment, you can add a custom domain:
- Vercel Dashboard → Your Project → Settings → Domains
- Add your domain

### 3. Automatic Deployments
Every time you push to GitHub main branch:
- Vercel automatically redeploys
- You get a new preview URL for each commit

### 4. Preview Deployments
For pull requests:
- Vercel creates preview deployments
- Test before merging to main

---

## 🎯 Quick Summary

```bash
# 1. Create GitHub repo on github.com

# 2. Push code to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/support-chatbot.git
git push -u origin main

# 3. Go to vercel.com → Add New Project → Import GitHub repo

# 4. Click Deploy → Wait → Done!
```

---

## 🐛 Troubleshooting

### "Repository not found"
- Make sure you've pushed code to GitHub
- Check the repository URL is correct
- Make sure the repo is public (or connect with private repos in Vercel settings)

### "Build Command Failed"
Check if your project builds locally:
```bash
npm run build
```

### "Module not found"
Make sure `package.json` has all dependencies

### "Cannot deploy without git"
You need to initialize git and push to GitHub first

---

## 📊 What Happens During Deployment

```
1. Vercel clones your GitHub repo
   ↓
2. Runs: npm install
   ↓
3. Runs: npm run build
   ↓
4. Creates production build in .next folder
   ↓
5. Deploys to Vercel's edge network
   ↓
6. Your app is live!
```

---

## ✅ Checklist Before Deploying

- [ ] Git initialized (`git init`)
- [ ] Code committed (`git commit -m "..."`)
- [ ] GitHub repository created
- [ ] Code pushed to GitHub (`git push`)
- [ ] `package.json` exists with all dependencies
- [ ] Project builds locally (`npm run build`)
- [ ] No sensitive data in code (use environment variables)
- [ ] README exists (optional but nice)

---

## 🎉 After Deployment

Your chatbot will be live at: `https://your-project-name.vercel.app`

You can:
- Share the URL with others
- Use it in other projects
- Add custom domain later
- View analytics in Vercel dashboard

**That's it! Your chatbot is now on the internet!** 🚀

