const { config } = require('./lib/config');

async function testGeminiAPI() {
  try {
    console.log('🧪 Testing Gemini API...');
    console.log('🔑 API Key:', config.gemini.apiKey ? '✅ Set' : '❌ Missing');
    console.log('🔗 Endpoint:', config.gemini.endpoint);
    
    const response = await fetch(`${config.gemini.endpoint}?key=${config.gemini.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: "Hello! Can you respond with a simple greeting?"
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Gemini API Error:', response.status, errorText);
      return;
    }

    const data = await response.json();
    const geminiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (geminiResponse) {
      console.log('✅ Gemini API Test Successful!');
      console.log('🤖 Response:', geminiResponse);
    } else {
      console.log('❌ No response from Gemini API');
      console.log('📄 Raw response:', JSON.stringify(data, null, 2));
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testGeminiAPI();
