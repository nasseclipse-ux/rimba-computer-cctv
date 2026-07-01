# Rimba Computer & CCTV - Complete Setup & Deployment Guide

## 📋 Project Overview

This is a professional landing page website for Rimba Computer & CCTV, built with modern web technologies and ready for production deployment.

**Key Features:**
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Fast performance with Vite build tool
- ✅ SEO optimized
- ✅ Contact form with validation
- ✅ Customer reviews section
- ✅ Services showcase
- ✅ Embedded Google Maps
- ✅ Social media integration ready

---

## 🚀 Quick Deployment (Choose One)

### **EASIEST: Deploy to Vercel (Recommended)**

1. **Go to:** https://vercel.com/new
2. **Connect your GitHub account** (if you haven't already)
3. **Select this repository** (you'll need to push to GitHub first)
4. **Click "Deploy"** - That's it! ✨

Your site will be live at: `https://rimba-computer-cctv.vercel.app`

---

### **ALTERNATIVE: Deploy to Netlify**

1. **Go to:** https://netlify.com
2. **Click "New site from Git"**
3. **Connect GitHub** and select your repository
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
5. **Click "Deploy site"**

Your site will be live at: `https://rimba-computer-cctv.netlify.app`

---

## 📝 Before You Deploy

### Step 1: Push to GitHub

```bash
# Navigate to project directory
cd rimba_computer

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Rimba Computer & CCTV website"

# Create repository on GitHub: https://github.com/new
# Name it: rimba-computer-cctv

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/rimba-computer-cctv.git
git branch -M main
git push -u origin main
```

### Step 2: Customize Your Content

Edit these files to update your business information:

**`src/components/Header.tsx`** - Update phone number and navigation
**`src/components/Hero.tsx`** - Update business description and stats
**`src/components/Services.tsx`** - Update services list
**`src/components/Reviews.tsx`** - Update customer reviews
**`src/components/Contact.tsx`** - Update address and contact info
**`src/components/Footer.tsx`** - Update footer content

### Step 3: Add Your Custom Domain (Optional)

Once deployed, you can add a custom domain:
- **Vercel:** Settings → Domains → Add domain
- **Netlify:** Site settings → Domain management → Add domain

Then update your domain's DNS records to point to the hosting provider.

---

## 🛠️ Local Development

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
rimba_computer/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Services.tsx        # Services showcase
│   │   ├── Reviews.tsx         # Customer reviews
│   │   ├── Contact.tsx         # Contact form & info
│   │   └── Footer.tsx          # Footer
│   ├── App.tsx                 # Main app component
│   ├── index.tsx               # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── dist/                       # Production build (generated)
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── vercel.json                 # Vercel deployment config
├── netlify.toml                # Netlify deployment config
├── DEPLOYMENT.md               # Detailed deployment guide
└── README.md                   # Project documentation
```

---

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',      // Change blue color
      secondary: '#1e40af',    // Change secondary color
    },
  },
}
```

### Update Phone Number

Search for `0822-1052-7872` in these files:
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

Replace with your actual phone number.

### Update Address

Search for the address in:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Update Services

Edit the `services` array in `src/components/Services.tsx`

### Update Reviews

Edit the `reviews` array in `src/components/Reviews.tsx`

---

## 🔧 Environment Variables

Create a `.env.production` file for production settings:

```
VITE_APP_TITLE=Rimba Computer & CCTV
VITE_API_URL=https://api.example.com
```

For Vercel/Netlify, add these in their dashboard instead.

---

## 📊 Performance Tips

1. **Optimize Images:** Compress images before adding them
2. **Monitor Bundle Size:** Check `npm run build` output
3. **Enable Caching:** Configure cache headers on your hosting
4. **Use CDN:** Vercel/Netlify automatically use CDN
5. **Monitor Core Web Vitals:** Use Google PageSpeed Insights

---

## 🔒 Security Checklist

- ✅ HTTPS enabled (automatic with Vercel/Netlify)
- ✅ No sensitive data in code
- ✅ Contact form doesn't expose backend
- ✅ Dependencies up to date
- ✅ No console errors in production

---

## 📱 Testing

### Desktop Testing
- Chrome, Firefox, Safari, Edge
- Test all pages and interactions
- Check form submission

### Mobile Testing
- iPhone, Android
- Test responsive layout
- Test touch interactions
- Test form on mobile

### Performance Testing
- Use Google PageSpeed Insights
- Check Lighthouse score
- Monitor Core Web Vitals

---

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Site Shows 404
- Ensure `dist/` folder is deployed
- Check that routing is configured (SPA fallback)
- Verify `index.html` is in root

### Slow Performance
- Check bundle size
- Optimize images
- Enable compression
- Use production build

### Custom Domain Issues
- Wait 24-48 hours for DNS propagation
- Verify DNS records
- Check SSL certificate
- Clear browser cache

---

## 📞 Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com

---

## 🎯 Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel or Netlify
3. ✅ Test the live website
4. ✅ Add custom domain (optional)
5. ✅ Set up analytics
6. ✅ Monitor performance

---

## 📝 Maintenance

### Regular Updates
- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`
- Review analytics and user feedback
- Update business information as needed

### Backup
- Keep GitHub repository as backup
- Export analytics data regularly
- Document any customizations

---

## 🎉 You're Ready!

Your website is production-ready and can be deployed in minutes. Choose your preferred hosting platform and follow the deployment steps above.

**Questions?** Refer to the DEPLOYMENT.md file for detailed instructions on each platform.

Happy deploying! 🚀
