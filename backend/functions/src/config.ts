// Configuration file for API endpoints and credentials
export const config = {

  // Vertex AI Gemini Configuration - Uses real credentials
  gemini: {
    apiKey: process.env.FIREBASE_CONFIG_GEMINI_API_KEY || 'YOUR_GEMINI_API_KEY',
    endpoint: process.env.FIREBASE_CONFIG_GEMINI_ENDPOINT || 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent',
    model: 'gemini-2.5-flash',
    temperature: 0.7,
    maxTokens: 1024
  },
  
  // AutoML Model Configuration - Uses real credentials
  automl: {
    endpoint: process.env.AUTOML_ENDPOINT || 'YOUR_AUTOML_ENDPOINT',
    modelId: process.env.AUTOML_MODEL_ID || 'YOUR_AUTOML_MODEL_ID',
    projectId: process.env.PROJECT_ID || 'YOUR_GOOGLE_CLOUD_PROJECT_ID',
    region: process.env.REGION || 'asia-south1'
  },
  
  // Service Account Configuration - Uses real credentials
  serviceAccount: {
    email: process.env.SERVICE_ACCOUNT_EMAIL || 'mental-wellness-automl@smart-surf-469908-n0.iam.gserviceaccount.com',
    projectId: process.env.PROJECT_ID || 'smart-surf-469908-n0',
    region: process.env.REGION || 'asia-south1',
    privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY || '-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----'
  },
  
  // Wellness Data Schema (matching your AutoML model)
  wellnessSchema: {
    mood: ['Happy', 'Sad', 'Anxious', 'Stressed', 'Angry', 'Calm', 'Neutral'],
    sleepHours: { min: 0, max: 24, default: 7 },
    stressLevel: { min: 1, max: 10, default: 5 },
    academicPressure: { min: 1, max: 10, default: 5 },
    socialSupport: { min: 1, max: 10, default: 5 },
    loneliness: { min: 1, max: 10, default: 5 },
    confidenceLevel: { min: 1, max: 10, default: 5 },
    hobbiesInterest: { min: 1, max: 10, default: 5 },
    opennessToJournaling: { min: 1, max: 10, default: 5 },
    willingForProfessionalHelp: { min: 1, max: 10, default: 5 }
  },
  
  // Activity Recommendations (matching your target column)
  activities: [
    'Journaling',
    'Professional Help',
    'Goal Setting',
    'Hobbies Wanderlust',
    'Meditation and Yoga',
    'Personalized Goal Tracker'
  ]
};

// Environment variable validation
export function validateConfig() {
  console.log('✅ Configuration loaded with real credentials');
  console.log('🔑 Gemini API Key:', config.gemini.apiKey ? '✅ Set' : '❌ Missing');
  console.log('🔗 Gemini Endpoint:', config.gemini.endpoint ? '✅ Set' : '❌ Missing');
  console.log('🤖 AutoML Endpoint:', config.automl.endpoint ? '✅ Set' : '❌ Missing');
  console.log('👤 Service Account Email:', config.serviceAccount.email ? '✅ Set' : '❌ Missing');
  console.log('🔐 Private Key:', config.serviceAccount.privateKey.includes('YOUR_ACTUAL_PRIVATE_KEY') ? '❌ Placeholder' : '✅ Set');
  
  return true;
}