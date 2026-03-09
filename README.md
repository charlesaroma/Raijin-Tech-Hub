# Raijin Tech Hub - Corporate Website

> Modern, AI-powered IT solutions company website built with React, Vite, and Google Gemini AI.

## 🚀 Features

### Core Features
- ✅ **AI-Powered Chatbot** - 24/7 intelligent customer support using Google Gemini AI
- ✅ **Neomorphism Design** - Modern 3D soft UI with raised/embossed effects
- ✅ **GSAP Animations** - Smooth, professional animations and transitions
- ✅ **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ✅ **SEO Optimized** - Meta tags, structured data, sitemap
- ✅ **Google Analytics** - Track user behavior and conversions
- ✅ **Contact Forms** - EmailJS integration for quote requests
- ✅ **WhatsApp Integration** - Seamless handoff from AI to human support

### Pages
- 🏠 Homepage with hero, services, about, purpose, tech stack
- 💼 Services page with detailed offerings
- 📱 Portfolio with case studies and project showcase
- 🖼️ Gallery with categorized company images
- 👥 About Us with team profiles, mission, values, timeline
- ❓ FAQ with searchable questions
- 📞 Contact page with quote request form
- 🏢 Company information
- 📄 Privacy Policy & Terms of Service

## 🤖 AI Chatbot Setup

### Quick Start (3 steps)

1. **Get your FREE Gemini API key:**
   - Visit: https://makersuite.google.com/app/apikey
   - Click "Create API Key"
   - Copy your key

2. **Create `.env.local` file in project root:**
   ```env
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Restart dev server:**
   ```bash
   yarn dev
   ```

**📖 Full Documentation:** See `DOCUMENTATION.md` for complete setup, deployment, and customization guide.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom neomorphism design
- **Animations:** 
  - GSAP (ScrollTrigger, stagger effects)
  - Framer Motion
- **AI Integration:** Google Gemini Pro
- **Icons:** Iconify
- **Forms:** Formik + Yup validation, EmailJS
- **Analytics:** Google Analytics 4
- **Routing:** React Router DOM
- **Other:** Lottie animations, React Markdown

## 📦 Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## 🎨 Design System

### Color Palette
- **Primary:** Soft blue-gray (#4a5568, #718096)
- **Background:** Light gray (#e5e7eb)
- **Shadows:** Layered soft shadows for depth
- **Style:** Neomorphism/Soft UI aesthetic

### Typography
- **Font:** Inter (system font stack)
- **Sizes:** Ultra-minimal, Apple-inspired spacing
- **Responsive:** Scales smoothly across breakpoints

### Animation Philosophy
- **Smooth:** 60fps performance
- **Purposeful:** Enhances UX without distraction
- **Accessible:** Respects `prefers-reduced-motion`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── AIChatWidget.jsx      # AI chatbot interface
│   ├── WhatsAppWidget.jsx
│   ├── SEO.jsx
│   └── ...
├── pages/              # Page components (organized by navigation)
│   ├── 1homePage/           # Homepage
│   ├── 2aboutPage/          # About Us
│   ├── 3servicePage/        # Services
│   ├── 4portfolioPage/      # Portfolio
│   ├── 5galleryPage/        # Gallery
│   ├── 6faqPage/            # FAQ
│   ├── 7contactPage/        # Contact
│   ├── 8companyPage/        # Company Info
│   ├── 9privacyPage/        # Privacy Policy
│   └── 10termsPage/         # Terms of Service
├── navigation/         # Navbar, footer, routing
├── utils/              # Utilities and helpers
│   ├── geminiAI.js          # AI integration
│   ├── analytics.js
│   └── gsapAnimations.js
├── data/               # JSON data files
└── App.jsx             # Main app component
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` file:
```env
# Required for AI Chatbot
VITE_GEMINI_API_KEY=your_gemini_api_key

# Optional
VITE_GA_MEASUREMENT_ID=your_ga_id
```

### Customization
- **Colors:** Update CSS variables in `src/index.css`
- **Company Info:** Edit `src/utils/geminiAI.js`
- **Services:** Modify data files in `src/data/`
- **Content:** Update respective page components

## 📊 Performance

- ⚡ Lazy loading for all pages
- ⚡ Code splitting per route
- ⚡ Optimized images with explicit dimensions
- ⚡ Critical CSS inlining
- ⚡ Preconnect hints for third-party resources
- ⚡ GSAP animations with hardware acceleration

## 🚀 Deployment

### Build
```bash
yarn build
```

### Deploy to Vercel/Netlify
1. Connect your Git repository
2. Add environment variables in dashboard
3. Deploy!

**Note:** Make sure to add `VITE_GEMINI_API_KEY` to your hosting platform's environment variables.

## 📝 License

© 2020-2025 Raijin Tech Hub. All rights reserved.

## 🤝 Support

For questions or issues:
- 📧 Email: info@raijintechhub.com
- 📱 WhatsApp: +256 777 982066
- 🌐 Website: www.raijintechhub.com

---

**Built with ❤️ by Raijin Tech Hub**
