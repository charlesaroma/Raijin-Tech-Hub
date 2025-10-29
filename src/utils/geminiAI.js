import { GoogleGenAI } from '@google/genai';

// Initialize Gemini AI with new SDK
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

console.log('🔍 Gemini AI Initialization');
console.log('✓ API Key loaded:', !!API_KEY);

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

// System context about Raijin Tech Hub
const COMPANY_CONTEXT = `You are Raijin AI, a friendly and professional AI assistant for Raijin Tech Hub, a leading IT solutions company in Uganda.

COMPANY INFORMATION:
- Name: Raijin Tech Hub
- Founded: 2023
- Location: Kampala, Uganda (serving East Africa and globally)
- Website: raijintechhub.com
- Phone/WhatsApp: +256 777 982066
- Email: raijintechug@gmail.com

SOCIAL MEDIA & CONTACT:
- WhatsApp: https://wa.me/256777982066
- Instagram: https://www.instagram.com/raijin_tech_hub
- LinkedIn: https://www.linkedin.com/company/raijin-technologies-ug/
- Facebook: https://www.facebook.com/GVNG8
- Email: raijintechug@gmail.com

SERVICES WE OFFER:
1. Custom Software Development - Enterprise solutions, SaaS platforms, custom applications
2. Web Development - Corporate websites, e-commerce platforms, web applications
3. Mobile App Development - iOS and Android apps using React Native and Flutter
4. IT Consultancy & Strategy - Technology planning, digital transformation, system architecture
5. AI Integration & Chatbot Solutions - Custom AI chatbots, intelligent automation, conversational AI for customer support and business processes
6. UI/UX Design - User research, wireframing, prototyping, visual design
7. Cybersecurity - Penetration testing, security audits, vulnerability assessments
8. SEO Optimization - Technical SEO, content strategy, performance optimization
9. Digital Transformation & Automation - Process automation, workflow optimization
10. Licensed Software Solutions - Atlas.ti, NVIVO, QuickBooks, Canva, Stata Labs, SPSS, Microsoft Office Suite
11. Technical Support & Maintenance - 24/7 support, ongoing maintenance, system updates

PRICING APPROACH:
- Basic website: Starting from UGX 1-5M
- E-commerce platform: UGX 2-15M
- Mobile app: UGX 5 -20M
- Custom enterprise solution: UGX 15M+
- Prices vary based on complexity, features, and timeline
- We offer flexible payment plans (typically 30% upfront, 40% mid-project, 30% completion)

PROJECT TIMELINE:
- Simple website: 5-10 days
- Mobile app: 2-3 months
- Complex enterprise system: 4-6 months
- We use agile methodology with regular client involvement

OUR TEAM:
- Charles Aroma: Founder, Senior Frontend Developer
- Joshua Kimbareeba: Co-founder, Alternate Director & Senior Fullstack Developer
- Stephanie Kirathe: UI/UX Designer & SEO & Content Specialist
- Experienced team of developers, designers, and consultants

OUR STATS:
- 30+ Projects Delivered
- 8+ Industries Served
- 95% Client Retention Rate
- 4+ Years Experience

YOUR ROLE AS RAIJIN AI:
1. Answer questions about our services, pricing, process, and company
2. Be helpful, friendly, and professional
3. Ask clarifying questions to understand user needs better
4. Qualify leads by gathering project information
5. Share social media links when users ask how to connect or follow us
6. If user wants detailed quote or to speak with someone, offer WhatsApp connection
7. Keep responses concise but informative (2-4 sentences ideal)
8. Use emojis sparingly and professionally
9. If you don't know something specific, be honest and offer to connect them with the team

CONVERSATION TIPS:
- Start with a warm greeting
- Ask about their project needs
- Provide relevant service information
- Suggest next steps (quote, consultation, WhatsApp chat)
- Be conversational, not robotic

If a user asks about pricing, provide the general ranges above and ask about their specific project to give better estimates. Always offer to connect them with the team on WhatsApp for detailed quotes.

If a user seems frustrated or has complex needs, offer WhatsApp handoff immediately.

Remember: You represent Raijin Tech Hub - be professional, helpful, and focused on solving their technology needs.`;

// Quick reply suggestions based on common queries
export const QUICK_REPLIES = [
  { text: '💼 Services & Pricing', query: 'What services do you offer and how much do they cost?' },
  { text: '📱 Mobile App Development', query: 'Tell me about your mobile app development services' },
  { text: '🌐 Website Development', query: 'How much does a website cost?' },
  { text: '⏱️ Project Timeline', query: 'How long does a typical project take?' },
  { text: '👥 About Your Team', query: 'Tell me about your team and experience' },
  { text: '📞 Talk to Human', query: 'I want to speak with someone from your team' },
];

// Initialize chat with Gemini (using new SDK)
export const initializeChat = async () => {
  if (!ai) {
    throw new Error('Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env.local file');
  }

  try {
    console.log('🚀 Initializing Gemini AI...');
    
    // Return a chat object that maintains conversation history
    const chatSession = {
      history: [],
      systemContext: COMPANY_CONTEXT
    };

    console.log('✓ Chat session ready');
    return chatSession;
    
  } catch (error) {
    console.error('❌ Failed to initialize chat:', error);
    throw error;
  }
};

// Send message to Gemini AI (using new SDK)
export const sendMessage = async (chatSession, message) => {
  if (!chatSession || !ai) {
    throw new Error('Chat session not initialized');
  }

  try {
    console.log('📤 Sending message...');
    
    // Build conversation context
    let conversationContext = chatSession.systemContext + '\n\n';
    
    // Add conversation history
    if (chatSession.history.length > 0) {
      conversationContext += 'Previous conversation:\n';
      chatSession.history.forEach(entry => {
        conversationContext += `${entry.role === 'user' ? 'User' : 'Assistant'}: ${entry.message}\n`;
      });
      conversationContext += '\n';
    }
    
    // Add current message
    conversationContext += `User: ${message}\n\nAssistant:`;
    
    // Call new API
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: conversationContext
    });
    
    const text = response.text;
    
    // Add to history
    chatSession.history.push({ role: 'user', message });
    chatSession.history.push({ role: 'assistant', message: text });
    
    // Keep history manageable (last 10 exchanges)
    if (chatSession.history.length > 20) {
      chatSession.history = chatSession.history.slice(-20);
    }
    
    console.log('✓ Received response');
    return text;
    
  } catch (error) {
    console.error('❌ Send message error:', error.message);
    throw error;
  }
};

// Check if message should trigger WhatsApp handoff
export const shouldOfferWhatsAppHandoff = (message) => {
  const handoffKeywords = [
    'speak', 'talk', 'call', 'phone', 'human', 'person', 'representative',
    'urgent', 'emergency', 'frustrated', 'help me', 'manager',
    'quote', 'proposal', 'contract', 'pricing details', 'negotiate'
  ];
  
  const lowerMessage = message.toLowerCase();
  return handoffKeywords.some(keyword => lowerMessage.includes(keyword));
};

// Format conversation for WhatsApp handoff
export const formatConversationSummary = (messages) => {
  const userMessages = messages
    .filter(msg => msg.role === 'user')
    .map(msg => msg.text)
    .join('\n- ');
  
  return `Hello! I've been chatting with your AI assistant. Here's a summary of my inquiry:\n\n- ${userMessages}\n\nLooking forward to discussing further!`;
};

export default {
  initializeChat,
  sendMessage,
  QUICK_REPLIES,
  shouldOfferWhatsAppHandoff,
  formatConversationSummary,
};

