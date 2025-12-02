import { User, Project, BlogPost, Discussion, Service, AIRequest, Newsletter, Analytics, Testimonial, Contact, Role, SubscriptionTier, ProjectStatus, AIRequestStatus, ContactStatus } from '@prisma/client'

export type {
  User,
  Project,
  BlogPost,
  Discussion,
  Service,
  AIRequest,
  Newsletter,
  Analytics,
  Testimonial,
  Contact,
}

export type {
  Role,
  SubscriptionTier,
  ProjectStatus,
  AIRequestStatus,
  ContactStatus,
}

export interface UserWithRelations extends User {
  projects: Project[]
  blogPosts: BlogPost[]
  discussions: Discussion[]
  aiRequests: AIRequest[]
  testimonials: Testimonial[]
}

export interface ProjectWithAuthor extends Project {
  author: User
}

export interface BlogPostWithAuthor extends BlogPost {
  author: User
  discussions: Discussion[]
}

export interface DiscussionWithAuthor extends Discussion {
  author: User
  replies: Discussion[]
}
