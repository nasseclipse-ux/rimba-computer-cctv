# Deployment Guide - Rimba Computer & CCTV Website

This guide provides step-by-step instructions for deploying your website to production using various hosting platforms.

## Quick Start Options

Choose one of the following deployment methods based on your preference:

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is the creator of Next.js and provides excellent support for Vite projects. It's free, fast, and includes automatic deployments.

**Steps:**

1. **Create a Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/rimba-computer-cctv.git
   git branch -M main
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Go to https://vercel.com/new
   - Select your GitHub repository
   - Click "Import"
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

4. **Custom Domain (Optional)**
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain (e.g., rimbacomputer.com)
   - Follow DNS instructions provided

**Your site will be live at:** `https://rimba-computer-cctv.vercel.app` (or your custom domain)

---

### Option 2: Netlify (Free & Easy)

Netlify is another excellent option with similar features to Vercel.

**Steps:**

1. **Create a Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/rimba-computer-cctv.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy from Git**
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS instructions

**Your site will be live at:** `https://rimba-computer-cctv.netlify.app` (or your custom domain)

---

### Option 3: GitHub Pages (Free)

GitHub Pages is free and integrates directly with GitHub.

**Steps:**

1. **Push Code to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/rimba-computer-cctv.git
   git branch -M main
   git push -u origin main
   ```

2. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/rimba-computer-cctv/',
     plugins: [react()],
   })
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages"
   - Source: Deploy from a branch
   - Branch: main, folder: /(root)
   - Save

4. **Build and Deploy**
   ```bash
   npm run build
   git add dist
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

**Your site will be live at:** `https://YOUR_USERNAME.github.io/rimba-computer-cctv`

---

### Option 4: Traditional Web Hosting

If you have traditional web hosting (cPanel, Plesk, etc.):

**Steps:**

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Connect via FTP/SFTP
   - Upload all files from the `dist/` folder to your public_html directory
   - Ensure `index.html` is in the root directory

3. **Configure Web Server**
   - Create a `.htaccess` file (for Apache):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Point Domain**
   - Update DNS records to point to your hosting provider
   - Wait for DNS propagation (can take 24-48 hours)

---

### Option 5: Docker Deployment

For advanced users who want to deploy with Docker:

**Create Dockerfile:**
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build and Run:**
```bash
docker build -t rimba-computer .
docker run -p 3000:3000 rimba-computer
```

---

## Environment Variables

If you need to configure environment variables for different environments:

1. **Create `.env.production`**
   ```
   VITE_APP_TITLE=Rimba Computer & CCTV
   VITE_API_URL=https://api.example.com
   ```

2. **For Vercel:**
   - Go to Settings → Environment Variables
   - Add your variables

3. **For Netlify:**
   - Go to Site settings → Build & deploy → Environment
   - Add your variables

---

## Custom Domain Setup

### Using Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., rimbacomputer.com)
3. Update your domain's DNS records:
   - Add CNAME record pointing to `cname.vercel.com`

### Using Netlify:
1. Go to Site settings → Domain management
2. Add your domain
3. Update your domain's DNS records with provided values

### Using Traditional Hosting:
1. Update domain registrar DNS to point to your hosting provider
2. Configure domain in hosting control panel

---

## Monitoring & Maintenance

### Analytics
- **Vercel Analytics:** Built-in, no setup needed
- **Netlify Analytics:** Enable in Site settings
- **Google Analytics:** Add to your site for detailed insights

### Performance Monitoring
- Use Lighthouse (built into Chrome DevTools)
- Monitor Core Web Vitals
- Check build times and deployment status

### Automatic Updates
- Enable auto-deployments on GitHub push
- Set up branch protection rules
- Configure preview deployments for pull requests

---

## Troubleshooting

### Build Fails
- Check build logs in your hosting platform
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Site Shows 404
- Ensure `dist/` folder is deployed
- Check that `index.html` is in the root
- Verify routing configuration (SPA fallback)

### Performance Issues
- Check bundle size: `npm run build` output
- Enable caching headers
- Use CDN for static assets
- Optimize images

### Custom Domain Not Working
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check SSL certificate status
- Clear browser cache

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Pages Docs:** https://pages.github.com
- **Vite Docs:** https://vitejs.dev

---

## Next Steps

1. Choose your preferred deployment platform
2. Follow the steps above
3. Test your deployed website
4. Set up custom domain (optional)
5. Monitor performance and analytics

Your website will be live and accessible to the world! 🚀
