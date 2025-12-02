export const dbConfig = {
  // Prisma
  prisma: {
    provider: 'postgresql',
  },

  // Supabase specifics
  supabase: {
    realtimeEnabled: true,
    storageBucket: 'jengalabs-uploads',
    edgeFunctionsEnabled: true,
  },

  // Connection pooling
  pooling: {
    minConnections: 2,
    maxConnections: 10,
    idleTimeout: 30000,
  },

  // Query optimization
  optimization: {
    enableQueryLogging: process.env.NODE_ENV === 'development',
    logSlowQueries: true,
    slowQueryThreshold: 1000, // milliseconds
  },
}

export type DbConfig = typeof dbConfig
