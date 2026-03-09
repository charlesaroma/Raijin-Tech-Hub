import { GoogleGenAI } from '@google/genai';

const API_KEY = process.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error('❌ Error: VITE_GEMINI_API_KEY environment variable not set');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

async function testChat() {
  console.log('🧪 Starting Gemini AI Verification...');
  
  try {
    const contents = [
      {
        role: 'user',
        parts: [{ text: 'Hello! Who are you?' }]
      }
    ];
    
    console.log('📤 Sending test message to Gemini...');
    const result = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: contents,
      systemInstruction: 'You are Raijin AI, a friendly assistant for Raijin Tech Hub.'
    });
    
    const responseText = result?.response?.text?.() || 
                        result?.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    console.log('📥 Response received:', responseText);
    console.log('✅ Gemini AI Verification Successful!');
  } catch (error) {
    console.error('❌ Verification Failed:', error.message);
    console.error('Full error:', error);
    process.exit(1);
  }
}

testChat();
