import { z } from 'zod'

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

// Project schemas
export const projectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  content: z.string().optional(),
  techStack: z.array(z.string()).min(1, 'Add at least one technology'),
  category: z.string().min(1, 'Select a category'),
  demoUrl: z.string().url().optional().or(z.literal('')),
  githubUrl: z.string().url().optional().or(z.literal('')),
  featured: z.boolean().default(false),
})

// Blog schemas
export const blogPostSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().min(3, 'Slug must be at least 3 characters'),
  summary: z.string().min(10, 'Summary must be at least 10 characters'),
  content: z.string().min(50, 'Content must be at least 50 characters'),
  tags: z.array(z.string()).min(1, 'Add at least one tag'),
  published: z.boolean().default(false),
  featured: z.boolean().default(false),
})

// Discussion schemas
export const discussionSchema = z.object({
  content: z.string().min(5, 'Comment must be at least 5 characters').max(5000, 'Comment is too long'),
  parentId: z.string().optional(),
})

// Newsletter schemas
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

// Contact schemas
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000, 'Message is too long'),
})

// Service schemas
export const serviceSchema = z.object({
  name: z.string().min(3, 'Service name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().positive('Price must be positive'),
  currency: z.string().default('USD'),
  features: z.array(z.string()).min(1, 'Add at least one feature'),
  popular: z.boolean().default(false),
})

// AI Request schemas
export const aiRequestSchema = z.object({
  prompt: z.string().min(5, 'Prompt must be at least 5 characters').max(5000, 'Prompt is too long'),
  model: z.string().default('groq-llama'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type ProjectInput = z.infer<typeof projectSchema>
export type BlogPostInput = z.infer<typeof blogPostSchema>
export type DiscussionInput = z.infer<typeof discussionSchema>
export type NewsletterInput = z.infer<typeof newsletterSchema>
export type ContactInput = z.infer<typeof contactSchema>
export type ServiceInput = z.infer<typeof serviceSchema>
export type AIRequestInput = z.infer<typeof aiRequestSchema>
