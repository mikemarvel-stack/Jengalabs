import { Groq } from 'groq-sdk'

const groqApiKey = process.env.GROQ_API_KEY
if (!groqApiKey) {
  console.warn('⚠️ GROQ_API_KEY not found. AI features will be disabled.')
}

export const groq = groqApiKey ? new Groq({ apiKey: groqApiKey }) : null

// Available models for Groq
export const GROQ_MODELS = {
  LLAMA_2: 'llama2-70b-4096',
  MIXTRAL: 'mixtral-8x7b-32768',
  GEMMA: 'gemma-7b-it',
} as const

export async function generateAIResponse(
  prompt: string,
  model: string = GROQ_MODELS.MIXTRAL,
  maxTokens: number = 1024
) {
  if (!groq) {
    throw new Error('Groq API key not configured')
  }

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model,
      max_tokens: maxTokens,
      temperature: 0.7,
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Groq API error:', error)
    throw error
  }
}

// Hugging Face integration (optional)
export async function generateWithHuggingFace(
  prompt: string,
  model: string = 'gpt2'
) {
  const hfToken = process.env.HUGGINGFACE_API_KEY
  if (!hfToken) {
    throw new Error('Hugging Face API key not configured')
  }

  try {
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        headers: { Authorization: `Bearer ${hfToken}` },
        method: 'POST',
        body: JSON.stringify({ inputs: prompt }),
      }
    )

    const data = await response.json()
    return data[0]?.generated_text || ''
  } catch (error) {
    console.error('Hugging Face API error:', error)
    throw error
  }
}

// Local Ollama support (for completely free AI)
export async function generateWithOllama(
  prompt: string,
  model: string = 'llama2'
) {
  const baseUrl = process.env.OLLAMA_BASE_URL || 'http://localhost:11434'

  try {
    const response = await fetch(`${baseUrl}/api/generate`, {
      method: 'POST',
      body: JSON.stringify({
        model,
        prompt,
        stream: false,
      }),
    })

    const data = await response.json()
    return data.response || ''
  } catch (error) {
    console.error('Ollama API error:', error)
    throw error
  }
}
