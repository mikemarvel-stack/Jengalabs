declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string
      DIRECT_URL: string
      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
      SUPABASE_SERVICE_ROLE_KEY: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
      GITHUB_CLIENT_ID: string
      GITHUB_CLIENT_SECRET: string
      GROQ_API_KEY?: string
      HUGGINGFACE_API_KEY?: string
      OLLAMA_BASE_URL?: string
      RESEND_API_KEY?: string
      FROM_EMAIL?: string
      STRIPE_PUBLISHABLE_KEY?: string
      STRIPE_SECRET_KEY?: string
      STRIPE_WEBHOOK_SECRET?: string
      NEXT_PUBLIC_POSTHOG_KEY?: string
      NEXT_PUBLIC_POSTHOG_HOST?: string
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_APP_URL: string
      NEXT_PUBLIC_API_URL: string
    }
  }
}

export {}
