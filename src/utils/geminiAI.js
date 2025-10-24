import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

// System context about Raijin Tech Hub
const COMPANY_CONTEXT = `You are Raijin AI, a friendly and professional AI assistant for Raijin Tech Hub, a leading IT solutions company in Uganda.

COMPANY INFORMATION:
- Name: Raijin Tech Hub
- Founded: 2020
- Location: Kampala, Uganda (serving East Africa and globally)
- Website: raijintechhub.com
- Contact: +256 777 982066

SERVICES WE OFFER:
1. Custom Software Development - Enterprise solutions, SaaS platforms, custom applications
2. Web Development - Corporate websites, e-commerce platforms, web applications
3. Mobile App Development - iOS and Android apps using React Native and Flutter
4. IT Consultancy & Strategy - Technology planning, digital transformation, system architecture
5. Cloud Solutions & Migration - AWS, Azure, cloud infrastructure setup and management
6. UI/UX Design - User research, wireframing, prototyping, visual design
7. Cybersecurity - Penetration testing, security audits, vulnerability assessments
8. SEO Optimization - Technical SEO, content strategy, performance optimization
9. Digital Transformation & Automation - Process automation, workflow optimization
10. Licensed Software Solutions - Atlas.ti, NVIVO, QuickBooks, Canva, Stata Labs, SPSS, Microsoft Office Suite
11. Technical Support & Maintenance - 24/7 support, ongoing maintenance, system updates

PRICING APPROACH:
- Basic website: Starting from UGX 2-5M
- E-commerce platform: UGX 8-15M
- Mobile app: UGX 10-20M
- Custom enterprise solution: UGX 15M+
- Prices vary based on complexity, features, and timeline
- We offer flexible payment plans (typically 30% upfront, 40% mid-project, 30% completion)

PROJECT TIMELINE:
- Simple website: 2-4 weeks
- Mobile app: 2-3 months
- Complex enterprise system: 4-6 months
- We use agile methodology with regular client involvement

OUR TEAM:
- Charles Aroma: Founder & CEO, Senior Frontend Developer
- Joshua Kimbareeba: Co-founder, Alternate Director & Fullstack Developer
- Stephanie Kirathe: UI/UX Designer & SEO Specialist
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
5. If user wants detailed quote or to speak with someone, offer WhatsApp connection
6. Keep responses concise but informative (2-4 sentences ideal)
7. Use emojis sparingly and professionally
8. If you don't know something specific, be honest and offer to connect them with the team

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

// Initialize chat with Gemini
export const initializeChat = async () => {
  if (!genAI) {
    throw new Error('Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env.local file');
  }

  const model = genAI.getGenerativeModel({ 
    model: 'gemini-pro',
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    },
  });

  const chat = model.startChat({
    history: [
      {
        role: 'user',
        parts: [{ text: COMPANY_CONTEXT }],
      },
      {
        role: 'model',
        parts: [{ text: 'Understood! I am Raijin AI, ready to assist visitors to Raijin Tech Hub with information about your IT services, answer questions, and help connect them with your team. I will be professional, helpful, and focused on understanding their needs.' }],
      },
    ],
  });

  return chat;
};

// Send message to Gemini AI
export const sendMessage = async (chat, message) => {
  try {
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error('Error sending message to Gemini:', error);
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

