export const aiConfig = {
  // Groq configuration
  groq: {
    baseUrl: 'https://api.groq.com/openai/v1',
    defaultModel: 'mixtral-8x7b-32768',
    models: [
      'mixtral-8x7b-32768',
      'llama2-70b-4096',
      'gemma-7b-it',
    ],
    requestTimeout: 30000, // 30 seconds
  },

  // Hugging Face configuration
  huggingface: {
    baseUrl: 'https://api-inference.huggingface.co',
    defaultModel: 'gpt2',
  },

  // Ollama configuration (local)
  ollama: {
    baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
    defaultModel: 'llama2',
    enabled: !!process.env.OLLAMA_BASE_URL,
  },

  // AI credits system
  credits: {
    freeDaily: 5,
    creditsPerRequest: {
      groq: 1,
      huggingface: 0.5,
      ollama: 0, // Free
    },
  },

  // Content generation defaults
  generation: {
    temperature: 0.7,
    maxTokens: 1024,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
  },
}

export type AIConfig = typeof aiConfig
