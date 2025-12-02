import { Role, SubscriptionTier } from '@prisma/client'

export interface AuthSession {
  user: {
    id: string
    email: string
    name?: string
    avatar?: string
    role: Role
    subscription: SubscriptionTier
  }
  expires: string
}

export type LoginCredentials = {
  email: string
  password: string
}

export type RegisterCredentials = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type AuthResponse = {
  success: boolean
  message: string
  user?: AuthSession['user']
  error?: string
}
