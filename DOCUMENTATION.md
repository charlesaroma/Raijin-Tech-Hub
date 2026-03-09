# 📚 Raijin Tech Hub - Complete Documentation

> **Last Updated:** January 28, 2025  
> **Project:** Raijin Tech Hub Website  
> **Tech Stack:** React + Vite, TailwindCSS, Framer Motion

---

## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [AI Chatbot Setup](#ai-chatbot-setup)
6. [SEO Configuration](#seo-configuration)
7. [Deployment](#deployment)
8. [Environment Variables](#environment-variables)
9. [Scripts](#scripts)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

**Raijin Tech Hub** is a modern, responsive website for an IT solutions company based in Uganda, offering:
- Custom Software Development
- Web & Mobile App Development
- IT Consultancy & Cloud Solutions
- UI/UX Design & Cybersecurity
- Licensed Software Solutions

### Key Technologies
- **Frontend:** React 18.3 + Vite 6.2
- **Styling:** TailwindCSS 4.0
- **Animations:** Framer Motion, GSAP
- **Forms:** Formik + Yup
- **Email:** EmailJS
- **AI:** Google Gemini AI (`@google/genai`)
- **Analytics:** Google Analytics
- **Routing:** React Router DOM
- **Icons:** Iconify, React Icons

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- Yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Raijin-Tech-Hub

# Install dependencies
yarn install

# Create environment file
cp .env.example .env.local
# Add your API keys to .env.local

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

---

## 📁 Project Structure

```
Raijin-Tech-Hub/
├── public/              # Static assets
│   ├── favicon files
│   ├── robots.txt
│   ├── sitemap.xml
│   └── manifest files
├── src/
│   ├── assets/          # Images, logos
│   ├── components/      # Reusable components
│   │   ├── AIChatWidget.jsx
│   │   ├── WhatsAppWidget.jsx
│   │   ├── SEO.jsx
│   │   └── ...
│   ├── data/            # JSON data files
│   │   ├── contentData.json
│   │   ├── faqData.json
│   │   ├── galleryData.json
│   │   ├── portfolioData.json
│   │   ├── processData.json
│   │   └── teamData.json
│   ├── navigation/      # Header, Footer, etc.
│   │   ├── navbar.jsx
│   │   ├── footer.jsx
│   │   ├── requestQuote.jsx
│   │   └── scrolltoTop.jsx
│   ├── pages/           # Page components
│   │   ├── 1homePage/
│   │   ├── 2aboutPage/
│   │   ├── 3servicePage/
│   │   ├── 4portfolioPage/
│   │   ├── 5galleryPage/
│   │   ├── 6faqPage/
│   │   ├── 7contactPage/
│   │   ├── 8companyPage/
│   │   ├── 9privacyPage/
│   │   └── 10termsPage/
│   ├── utils/           # Utility functions
│   │   ├── analytics.js
│   │   ├── geminiAI.js
│   │   └── gsapAnimations.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env.local           # Environment variables (gitignored)
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark/Light Mode** - CSS custom properties
- ✅ **Smooth Animations** - Framer Motion + GSAP
- ✅ **SEO Optimized** - Meta tags, structured data
- ✅ **Fast Loading** - Code splitting, lazy loading
- ✅ **Form Validation** - Formik + Yup
- ✅ **Email Integration** - EmailJS for contact forms

### Advanced Features
- ✅ **AI Chatbot** - Google Gemini integration
- ✅ **WhatsApp Widget** - Direct messaging
- ✅ **Analytics Tracking** - Google Analytics 4
- ✅ **Image Gallery** - Lightbox modal
- ✅ **Portfolio Filtering** - Category-based
- ✅ **FAQ Search** - Dynamic filtering
- ✅ **Scroll Animations** - GSAP timelines

---

## 🤖 AI Chatbot Setup

### Quick Setup

1. **Get API Key**
   - Go to: https://aistudio.google.com/apikey
   - Click "Create API Key"
   - Copy the key

2. **Configure Environment**
   ```env
   # .env.local
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. **Restart Server**
   ```bash
   # Stop current server (Ctrl+C)
   yarn dev
   ```

### How It Works

- **Package:** `@google/genai@1.27.0`
- **Model:** `gemini-2.0-flash-exp`
- **Features:**
  - Conversation memory
  - Company context injection
  - WhatsApp handoff
  - Quick reply buttons
  - Mobile responsive

### Configuration

Edit `src/utils/geminiAI.js` to customize:
- Company information
- Services & pricing
- Quick reply buttons
- Conversation behavior

### Free Tier Limits
- 60 requests/minute
- 1,500 requests/day
- Perfect for most websites

---

## 🔍 SEO Configuration

### Meta Tags
All pages include:
- Title, description, keywords
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs

### Structured Data
- Organization schema
- LocalBusiness schema
- BreadcrumbList schema
- FAQ schema

### Files
- `public/robots.txt` - Search engine directives
- `public/sitemap.xml` - Site structure
- `src/components/SEO.jsx` - Meta tag component
- `src/components/StructuredData.jsx` - JSON-LD schemas

### Best Practices Implemented
✅ Semantic HTML
✅ Alt text for images  
✅ Heading hierarchy
✅ Internal linking
✅ Mobile-friendly
✅ Fast page speed
✅ HTTPS ready

---

## 🚀 Deployment

### Netlify Deployment

1. **Connect Repository**
   - Push code to GitHub/GitLab
   - Connect to Netlify

2. **Build Settings**
   ```
   Build command: yarn build
   Publish directory: dist
   Node version: 20
   ```

3. **Environment Variables**
   Add in Netlify dashboard:
   ```
   VITE_GEMINI_API_KEY=your_key
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_GA_MEASUREMENT_ID=your_ga_id
   ```

4. **Redirects**
   - Already configured in `netlify.toml`
   - SPA routing handled

### Custom Domain
1. Add domain in Netlify
2. Update DNS records
3. Enable HTTPS (automatic)
4. Update `sitemap.xml` with new domain

---

## 🔐 Environment Variables

### Required Variables

```env
# Google Gemini AI
VITE_GEMINI_API_KEY=your_gemini_api_key

# EmailJS (Contact Form)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Setup Instructions

**EmailJS:**
1. Create account at https://emailjs.com
2. Add email service (Gmail, etc.)
3. Create email template
4. Copy Service ID, Template ID, Public Key

**Google Analytics:**
1. Create property at https://analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables

---

## 📜 Scripts

```json
{
  "dev": "vite",                    // Start dev server
  "build": "vite build",            // Build for production
  "preview": "vite preview",        // Preview production build
  "lint": "eslint . --ext js,jsx"   // Run linter
}
```

### Common Commands

```bash
# Development
yarn dev

# Build
yarn build

# Preview build locally
yarn preview

# Lint code
yarn lint

# Install new package
yarn add package-name

# Remove package
yarn remove package-name
```

---

## 🛠️ Troubleshooting

### AI Chatbot Not Working

**Symptom:** "Failed to initialize AI" or no responses

**Solutions:**
1. Check `.env.local` has correct API key
2. Restart dev server completely
3. Hard refresh browser (Ctrl+Shift+R)
4. Verify API key at https://aistudio.google.com
5. Check browser console for errors

### Build Errors

**Symptom:** Build fails or warnings

**Solutions:**
1. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules
   yarn install
   ```
2. Clear Vite cache:
   ```bash
   rm -rf dist
   rm -rf .vite
   ```
3. Check for dependency conflicts

### Contact Form Not Sending

**Symptom:** Form submits but no email received

**Solutions:**
1. Verify EmailJS credentials in `.env.local`
2. Check EmailJS dashboard for delivery status
3. Test EmailJS template directly
4. Check spam folder
5. Verify email service connection

### Routing Issues on Netlify

**Symptom:** 404 on page refresh

**Solution:**
- `netlify.toml` already configured
- Ensure redirects are set up:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```

### Performance Issues

**Solutions:**
1. Enable production build optimizations
2. Check bundle size: `yarn build --analyze`
3. Lazy load heavy components
4. Optimize images (WebP format)
5. Enable CDN caching

---

## 📊 Analytics Events

Tracked events (Google Analytics):

```javascript
// Page views - automatic
// Form submissions
trackContact('Contact Form Submitted');

// AI Chat interactions
trackContact('AI Chat Widget Opened');
trackContact('AI Chat Message Sent');
trackContact('WhatsApp Handoff from AI');

// Quote requests
trackContact('Quote Request Submitted');
```

---

## 🎨 Customization

### Colors
Edit `src/index.css`:
```css
:root {
  --color-primary-500: #your-color;
  --color-primary-600: #your-color;
  /* ... */
}
```

### Content
- **Services:** `src/data/contentData.json`
- **Portfolio:** `src/data/portfolioData.json`
- **Gallery:** `src/data/galleryData.json`
- **FAQ:** `src/data/faqData.json`
- **Team:** `src/data/teamData.json`

### Company Info
- **AI Context:** `src/utils/geminiAI.js` (COMPANY_CONTEXT)
- **Contact Details:** `src/navigation/footer.jsx`
- **About Page:** `src/pages/2aboutPage/`

---

## 🔄 Version Control

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to repository
git push origin feature/new-feature

# Create pull request
# Merge after review
```

### Important: Don't Commit
- `.env.local` (contains secrets)
- `node_modules/` (too large)
- `dist/` (build artifacts)
- `.vite/` (cache)

---

## 📱 Contact & Support

**Website:** raijintechhub.com  
**Email:** info@raijintechhub.com  
**Phone:** +256 777 982066  
**Location:** Kampala, Uganda

---

## 📄 License

© 2025 Raijin Tech Hub. All rights reserved.

---

## 🎉 Credits

**Built with:**
- React Team
- Vite Team
- TailwindCSS Team
- Framer Motion
- Google Gemini AI
- All open-source contributors

---

*For detailed API documentation, component usage, or custom implementations, contact the development team.*

