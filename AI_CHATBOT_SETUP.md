# 🤖 AI Chatbot Setup Guide

## Overview
Your website now has an AI-powered chatbot using Google Gemini AI! It can answer questions about your services, qualify leads, and seamlessly hand off to WhatsApp when needed.

---

## ✅ What's Included

### 1. **AI Chat Widget** (`src/components/AIChatWidget.jsx`)
- Modern chat interface with message bubbles
- Typing indicators and smooth animations
- Quick reply buttons for common questions
- WhatsApp handoff functionality
- Mobile-responsive design

### 2. **Gemini AI Integration** (`src/utils/geminiAI.js`)
- Google Gemini Pro AI integration
- Company context and knowledge base
- Conversation memory within session
- Smart handoff detection

### 3. **Features**
- ✅ 24/7 instant AI responses
- ✅ Remembers conversation context
- ✅ Lead qualification
- ✅ WhatsApp escalation
- ✅ Quick reply suggestions
- ✅ Markdown support in responses
- ✅ Typing indicators
- ✅ Smooth animations
- ✅ Analytics tracking

---

## 🚀 Setup Instructions

### Step 1: Get Your Gemini API Key (FREE!)

1. Go to: **https://makersuite.google.com/app/apikey**
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the API key

**Free Tier Limits:**
- 60 requests per minute
- 1,500 requests per day
- Perfect for most websites!

### Step 2: Create Environment File

1. In your project root, create a file named `.env.local`
2. Add your API key:

```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**⚠️ IMPORTANT:** 
- Never commit `.env.local` to Git (it's in `.gitignore`)
- Replace `your_actual_api_key_here` with your real key

### Step 3: Restart Development Server

```bash
# Stop your current dev server (Ctrl+C)
# Then restart it:
yarn dev
```

---

## 🎯 How It Works

### User Experience Flow

1. **User scrolls down page**
   → AI chat button appears (pulsing animation)

2. **User clicks chat button**
   → Welcome message from Raijin AI
   → Quick reply buttons for common questions

3. **User asks a question**
   → AI processes with your company context
   → Intelligent response in ~2 seconds
   → Typing indicator shows AI is thinking

4. **Conversation continues**
   → AI remembers previous messages
   → Provides relevant information
   → Suggests helpful next steps

5. **Need human contact?**
   → "Connect on WhatsApp" button appears
   → Conversation summary sent to WhatsApp
   → Seamless handoff to your team

---

## 💬 Example Conversations

### Example 1: Pricing Inquiry
```
User: "How much does a website cost?"

AI: "Website costs at Raijin Tech Hub vary based on complexity:
     - Basic website: Starting from UGX 2-5M
     - E-commerce platform: UGX 8-15M  
     - Custom web application: UGX 15M+
     
     Would you like to tell me more about your project requirements? 
     I can connect you with our team for a detailed quote! 💼"

[Connect on WhatsApp button appears]
```

### Example 2: Service Inquiry
```
User: "Do you build mobile apps?"

AI: "Yes! We specialize in mobile app development for both iOS and Android.  
     We use React Native and Flutter to build fast, secure, and beautiful 
     mobile applications.
     
     Typical projects take 2-3 months and start from UGX 10-20M depending 
     on complexity. 
     
     What kind of app are you thinking about? 📱"
```

### Example 3: Timeline Question
```
User: "How long does it take to build a website?"

AI: "Project timelines at Raijin Tech Hub:
     - Simple website: 2-4 weeks
     - E-commerce platform: 6-8 weeks
     - Complex web application: 3-4 months
     
     We use agile methodology with regular updates throughout the project.
     Would you like to discuss your specific project timeline? ⏱️"
```

---

## 🎨 Customization

### Update Company Information

Edit `src/utils/geminiAI.js` to update:
- Services offered
- Pricing ranges
- Team information
- Project timelines
- Contact details

### Modify Quick Replies

In `src/utils/geminiAI.js`, find `QUICK_REPLIES` array:

```javascript
export const QUICK_REPLIES = [
  { text: '💼 Services & Pricing', query: 'What services do you offer?' },
  { text: '📱 Mobile Apps', query: 'Tell me about mobile app development' },
  // Add your own quick replies here!
];
```

### Change Colors

The chatbot uses your existing color variables:
- `--color-primary-500`
- `--color-primary-600`
- Update in `src/index.css` to change chatbot colors

### Modify Welcome Message

In `src/components/AIChatWidget.jsx`, find the welcome message:

```javascript
setMessages([{
  role: 'assistant',
  text: '👋 Hello! I\'m Raijin AI. How can I help you today?',
  timestamp: new Date()
}]);
```

---

## 📊 Analytics

The chatbot tracks:
- Chat widget opens
- Messages sent
- WhatsApp handoffs

View in Google Analytics (if configured):
- Events → AI Chat Widget Opened
- Events → AI Chat Message Sent
- Events → WhatsApp Handoff from AI

---

## 🔧 Troubleshooting

### Issue: "Failed to initialize AI"
**Solution:** Check that your API key is correctly set in `.env.local`

### Issue: Chat not responding
**Solution:** 
1. Check browser console for errors
2. Verify API key is valid
3. Check you haven't exceeded free tier limits

### Issue: Slow responses
**Solution:** Gemini responses typically take 1-3 seconds. If slower:
1. Check your internet connection
2. Verify API key tier (free tier has rate limits)

### Issue: Chat button not appearing
**Solution:** Scroll down the page (it appears after scrolling 300px)

---

## 🚀 Going to Production

### Recommended Steps:

1. **Test Thoroughly**
   - Test various questions
   - Check WhatsApp handoff
   - Verify mobile responsiveness

2. **Monitor Usage**
   - Check Gemini API console for usage
   - Monitor analytics events
   - Collect user feedback

3. **Optimize Over Time**
   - Update company context with FAQs
   - Add more quick replies based on common questions
   - Refine AI responses

4. **Consider Upgrade (if needed)**
   - If you exceed 1,500 requests/day
   - Gemini Pro paid tier: $0.00025 per 1K characters
   - Still very affordable (~$10-20/month for high traffic)

---

## 🎉 Benefits

- **24/7 Availability**: Never miss a lead
- **Instant Responses**: No waiting for human replies  
- **Lead Qualification**: AI gathers information before handoff
- **Reduced Workload**: AI handles common questions
- **Better UX**: Visitors get immediate help
- **Higher Conversions**: Engage visitors instantly

---

## 📝 Notes

- The AI is trained on your company information
- Conversation context is maintained within session
- No data is stored permanently (privacy-friendly)
- WhatsApp handoff includes conversation summary
- Works on all devices (desktop, tablet, mobile)

---

## 🆘 Need Help?

If you encounter issues:
1. Check this documentation first
2. Review browser console for errors
3. Verify `.env.local` configuration
4. Check Gemini API console for errors

---

## 🎯 Next Steps

**Optional Enhancements:**
- Add voice input support
- Implement conversation export
- Add user feedback/rating system
- Multi-language support
- Custom training on specific FAQs
- Integration with CRM

**Current Status:** ✅ **FULLY FUNCTIONAL**

Your AI chatbot is ready to help visitors 24/7! 🚀

---

*Last Updated: January 2025*
*Built with Google Gemini AI + React*

