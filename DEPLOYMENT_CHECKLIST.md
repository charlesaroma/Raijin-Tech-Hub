# 🚀 Deployment & Cache Clearing Guide

## Current Situation
- ✅ All changes are committed and pushed to Git
- ✅ Netlify is connected to your repository
- ❌ Changes not visible on live site (cache issue)

---

## 🔥 Solution: Clear Cache & Redeploy

### Option 1: Netlify Dashboard (Easiest)

1. **Go to**: https://app.netlify.com/
2. **Select** your site: Raijin Tech Hub
3. **Click** "Deploys" tab
4. **Click** "Trigger deploy" button (top right)
5. **Select** "Clear cache and deploy site"
6. **Wait** 2-3 minutes for rebuild

This will:
- Clear Netlify's build cache
- Clear CDN cache
- Rebuild from your latest Git commit
- Deploy fresh files

---

### Option 2: Netlify CLI (Advanced)

```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link to your site
netlify link

# Trigger new deploy
netlify deploy --prod --build

# Or clear cache and deploy
netlify build --clear-cache
netlify deploy --prod
```

---

### Option 3: Force a New Commit

If the above doesn't work, force a new deployment:

```bash
# Make a small change to trigger rebuild
git commit --allow-empty -m "Force rebuild for cache clear"

# Push to trigger Netlify deployment
git push origin master
```

---

## 🌐 After Deployment

### 1. Clear Browser Cache

**Chrome/Edge (Windows)**:
```
Ctrl + Shift + R  (Hard refresh)
or
Ctrl + Shift + Delete → Clear cache
```

**Chrome/Edge (Mac)**:
```
Cmd + Shift + R  (Hard refresh)
```

**Or use Incognito/Private mode**:
```
Ctrl + Shift + N (Windows)
Cmd + Shift + N (Mac)
```

---

### 2. Verify Files Are Live

Check these URLs in **incognito mode**:

✅ **Sitemap**: https://raijintechhub.com/sitemap.xml
- Should show lastmod: 2025-01-18
- Should list all 5 pages

✅ **Logo Files**:
- https://raijintechhub.com/logo-512x512.png
- https://raijintechhub.com/favicon.ico
- https://raijintechhub.com/android-chrome-512x512.png

✅ **Updated Pages**:
- https://raijintechhub.com/request-quote (new styling)
- https://raijintechhub.com/ (SEO updates)

---

### 3. Check Netlify Deploy Log

1. Go to: https://app.netlify.com/
2. Select your site
3. Click "Deploys"
4. Check the latest deploy:
   - Status should be "Published"
   - Time should be recent (last few minutes)
   - No errors in the log

---

## 🐛 Troubleshooting

### Issue: Still showing old content after deploy

**Cause**: Aggressive browser caching

**Solution**:
1. Open **incognito/private window**
2. Visit: https://raijintechhub.com/sitemap.xml
3. If it's updated there, it's just your browser cache
4. Clear browser cache completely
5. Restart browser

---

### Issue: Netlify says "Build failed"

**Cause**: Build error in your code

**Solution**:
1. Check Netlify deploy log for errors
2. Test build locally: `yarn build`
3. Fix any errors
4. Commit and push again

---

### Issue: Files missing (404 errors)

**Cause**: Files not included in build output

**Solution**:
1. Verify files exist in `public/` folder locally
2. Check if files are in `.gitignore` (shouldn't be)
3. Rebuild: `yarn build`
4. Check `dist/` folder has the files
5. Redeploy

---

### Issue: Custom domain not working

**Cause**: DNS propagation delay

**Solution**:
1. Wait 24-48 hours for DNS to fully propagate
2. Check DNS settings in domain registrar
3. Verify Netlify DNS settings
4. Use https://www.whatsmydns.net/ to check propagation

---

## ⚡ Quick Fix (Do This Now)

```bash
# 1. Force a new commit
git commit --allow-empty -m "Clear cache and redeploy"

# 2. Push to trigger Netlify
git push origin master

# 3. Wait 2-3 minutes

# 4. Hard refresh browser (Ctrl+Shift+R)

# 5. Check in incognito mode
# Visit: https://raijintechhub.com/sitemap.xml
```

---

## 📊 Deployment Checklist

Before considering deployment complete:

- [ ] Netlify shows "Published" status
- [ ] Deploy time is recent (within last hour)
- [ ] No errors in deploy log
- [ ] Sitemap.xml loads with correct date
- [ ] Logo files load (logo-512x512.png)
- [ ] New page styling is visible (Request Quote)
- [ ] Browser cache cleared
- [ ] Tested in incognito mode
- [ ] Tested on different device/network

---

## 🎯 Expected Results

After successful deployment and cache clear:

### Sitemap.xml should show:
```xml
<url>
  <loc>https://raijintechhub.com/</loc>
  <lastmod>2025-01-18</lastmod>
  ...
</url>
```

### All 5 pages listed:
1. Homepage (/)
2. Company (/company)
3. Discover (/discover)
4. Contact (/contact)
5. Request Quote (/request-quote)

---

## 🔍 How to Check Netlify Deploy Status

### Via Dashboard:
1. https://app.netlify.com/
2. Select your site
3. Look for green "Published" badge
4. Check deploy time

### Via CLI:
```bash
netlify status
netlify open:site
```

---

## 💡 Pro Tips

### 1. Prevent Future Cache Issues
In your `netlify.toml` (create if missing):
```toml
[[headers]]
  for = "/sitemap.xml"
  [headers.values]
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/*.png"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

### 2. Auto-Deploy on Push
✅ Already configured (you have this)
- Every git push to master = auto-deploy

### 3. Preview Deploys
- Create a branch for testing
- Netlify creates preview URL
- Test before merging to master

### 4. Deploy Notifications
- Set up Slack/Email notifications
- Get notified when deploys complete
- Alert on deploy failures

---

## 📞 Still Not Working?

If after trying all above:

1. **Check Netlify Deploy Log**:
   - Look for specific error messages
   - Check if build completed

2. **Verify Git Commit**:
   ```bash
   git log --oneline -1
   git show HEAD:public/sitemap.xml
   ```

3. **Test Build Locally**:
   ```bash
   yarn build
   ls dist/  # Check if sitemap.xml is there
   ```

4. **Contact Netlify Support**:
   - They can check CDN cache
   - Can manually purge cache

---

## ✅ Success Indicators

You'll know it worked when:
- ✅ Netlify dashboard shows recent "Published" deploy
- ✅ Incognito mode shows updated sitemap
- ✅ Logo files load without 404
- ✅ New Request Quote styling is visible
- ✅ Browser DevTools shows updated files

---

**Start with Option 1 (Netlify Dashboard) - it's the easiest and most reliable!**

Good luck! 🚀

