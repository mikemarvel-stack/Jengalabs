# Jengalabs – Complete Project Blueprint

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)

Jengalabs is a modern, full-stack developer studio platform that showcases projects, provides services, hosts a tech blog with AI-assisted writing, and includes community engagement and monetization features. Built entirely with **free and open-source technologies** for maximum accessibility and cost efficiency.

🚀 **Live Demo:** [Coming Soon]
📖 **Documentation:** [Coming Soon]

---

## About Jengalabs

### Jengalabs – Brand Foundation

**Tagline Ideas**
- "Stacking Ideas, Building Futures"
- "Where Innovation Comes Together"
- "Your Full-Stack, Full-Potential Studio"
- "Building Smarter, Faster, Better"

### Brand Identity

**Colors:**
- Primary: Deep Indigo (#1E1E8C) → tech-forward, premium
- Accent: Vibrant Orange (#FF8C42) → creativity, African energy
- Neutral: Light Gray (#F5F5F5) → clean, modern

**Typography:**
- Headings: Montserrat or Poppins (modern, bold)
- Body: Inter (readable, neutral)

**Logo Concept:**
- Stack of abstract blocks forming an "L" or "JL"
- Minimal, flat design, works as icon & favicon

### Core Values
- Innovation → Cutting-edge full-stack & AI tools
- Reliability → Clients trust your solutions
- Scalability → Everything built to grow
- Community → Engaging peers & clients in discussions

### Voice & Tone
- Professional, confident, approachable
- Forward-thinking, solution-oriented
- Slightly playful when showing creative flair

## Quick Use-Cases for Jengalabs Project
- Showcase portfolio & case studies
- AI-powered tech blog with paid tools
- Community discussions & Q&A
- Client project proposals generator
- Paid micro-tools / AI products
- Integrations: social share, newsletter, PWA

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Tech Stack](#tech-stack)
3. [Installation & Setup](#installation--setup)
4. [Folder Structure](#folder-structure)
5. [Database Schema](#database-schema)
6. [Feature Modules](#feature-modules)
7. [Roadmap / Build Timeline](#roadmap--build-timeline)
8. [Environment Variables](#environment-variables)
9. [Deployment](#deployment)
10. [Contributing](#contributing)
11. [License](#license)

---

## Prerequisites

- **Node.js** 18.17+ 
- **npm** or **yarn** or **pnpm**
- **Git** for version control
- **Supabase** account (free tier)
- **Vercel** account for deployment (free tier)

---

## Tech Stack (100% Free Technologies)

### Frontend
- **Next.js 15 (App Router)** → Full-stack framework with TypeScript
- **TailwindCSS + Shadcn/ui** → Styling and component library
- **TanStack Query** → Data fetching and caching
- **Framer Motion** → Animations and micro-interactions
- **React Hook Form + Zod** → Form handling and validation
- **PWA Support** → Mobile-friendly, offline capability

### Backend & Database
- **Next.js API Routes** → Server-side logic
- **Prisma ORM** → Database management
- **Supabase** → PostgreSQL database, auth, storage (free tier)
- **Supabase Edge Functions** → Serverless functions

### AI & ML (Free Tiers)
- **Hugging Face Transformers** → Free AI models
- **Groq API** → Fast inference (free tier)
- **Ollama** → Local AI models (completely free)
- **Vercel AI SDK** → Streaming AI responses

### Authentication & Security
- **Supabase Auth** → User authentication (free)
- **NextAuth.js v5** → Social login integration
- **bcryptjs** → Password hashing

### Payments (Free to Start)
- **Stripe** → Payment processing (pay-per-transaction)
- **Lemon Squeezy** → Alternative payment processor

### Media & Storage
- **Supabase Storage** → File uploads (free tier)
- **Next.js Image** → Image optimization
- **Sharp** → Image processing

### Analytics & Monitoring
- **Vercel Analytics** → Performance monitoring (free)
- **Plausible** → Privacy-focused analytics (self-hosted)
- **PostHog** → Product analytics (free tier)

### Email & Communication
- **Resend** → Transactional emails (free tier)
- **React Email** → Email templates

### Development & Deployment
- **TypeScript** → Type safety
- **ESLint + Prettier** → Code quality
- **Vercel** → Hosting and deployment (free tier)
- **GitHub Actions** → CI/CD (free for public repos)

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/jengalabs.git
cd jengalabs
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Setup
```bash
cp .env.example .env.local
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma db push

# Seed database (optional)
npx prisma db seed
```

### 5. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Folder Structure (Next.js 15 App Router + TypeScript)

**🎯 Use TSX for all React components** - Better type safety, IntelliSense, and developer experience

```
/jengalabs
├─ /app                         # Next.js 15 App Router
│   ├─ /api                     # API routes
│   │   ├─ /auth                # Authentication endpoints
│   │   ├─ /ai                  # AI processing endpoints
│   │   ├─ /payments            # Payment webhooks
│   │   ├─ /analytics           # Analytics endpoints
│   │   └─ /newsletter          # Email subscription
│   ├─ /(dashboard)             # Route groups
│   │   └─ /dashboard
│   │       ├─ /projects        # Project management
│   │       ├─ /blog            # Blog management
│   │       ├─ /services        # Service management
│   │       ├─ /community       # Community moderation
│   │       ├─ /analytics       # Analytics dashboard
│   │       └─ /settings        # User settings
│   ├─ /(marketing)             # Public marketing pages
│   │   ├─ /blog
│   │   │   ├─ [slug]/page.tsx
│   │   │   └─ page.tsx
│   │   ├─ /projects
│   │   │   ├─ [slug]/page.tsx
│   │   │   └─ page.tsx
│   │   ├─ /services
│   │   │   └─ page.tsx
│   │   └─ /community
│   │       ├─ [threadId]/page.tsx
│   │       └─ page.tsx
│   ├─ /auth
│   │   ├─ /login/page.tsx
│   │   ├─ /register/page.tsx
│   │   └─ /callback/page.tsx   # OAuth callback
│   ├─ /ai-tools
│   │   ├─ /text-generator/page.tsx
│   │   ├─ /code-assistant/page.tsx
│   │   └─ page.tsx
│   ├─ /checkout
│   │   └─ page.tsx
│   ├─ /globals.css
│   ├─ /layout.tsx
│   ├─ /loading.tsx
│   ├─ /not-found.tsx
│   └─ /page.tsx
├─ /components                  # Reusable components
│   ├─ /ui                      # Shadcn/ui components
│   │   ├─ button.tsx
│   │   ├─ input.tsx
│   │   ├─ card.tsx
│   │   └─ ...
│   ├─ /forms                   # Form components
│   │   ├─ contact-form.tsx
│   │   ├─ newsletter-form.tsx
│   │   └─ ai-request-form.tsx
│   ├─ /layout                  # Layout components
│   │   ├─ navbar.tsx
│   │   ├─ footer.tsx
│   │   ├─ sidebar.tsx
│   │   └─ theme-provider.tsx
│   ├─ /marketing               # Landing page components
│   │   ├─ hero-section.tsx
│   │   ├─ features-section.tsx
│   │   ├─ testimonials.tsx
│   │   └─ pricing-section.tsx
│   ├─ /dashboard               # Dashboard components
│   │   ├─ stats-card.tsx
│   │   ├─ recent-activity.tsx
│   │   └─ quick-actions.tsx
│   └─ /shared                  # Shared components
│       ├─ project-card.tsx
│       ├─ blog-card.tsx
│       ├─ service-card.tsx
│       └─ discussion-thread.tsx
├─ /hooks                       # Custom React hooks
│   ├─ use-auth.ts
│   ├─ use-local-storage.ts
│   ├─ use-debounce.ts
│   └─ use-analytics.ts
├─ /lib                         # Utility libraries
│   ├─ prisma.ts                # Prisma client
│   ├─ supabase.ts              # Supabase client
│   ├─ auth.ts                  # Auth configuration
│   ├─ ai.ts                    # AI integration
│   ├─ payments.ts              # Payment processing
│   ├─ email.ts                 # Email utilities
│   ├─ analytics.ts             # Analytics helpers
│   ├─ validations.ts           # Zod schemas
│   └─ utils.ts                 # General utilities
├─ /types                       # TypeScript definitions
│   ├─ auth.ts
│   ├─ database.ts
│   ├─ api.ts
│   └─ global.ts
├─ /config                      # Configuration files
│   ├─ site.ts                  # Site configuration
│   ├─ database.ts              # Database config
│   └─ ai.ts                    # AI model configs
├─ /prisma                      # Database
│   ├─ schema.prisma
│   ├─ seed.ts
│   └─ migrations/
├─ /public                      # Static assets
│   ├─ /images
│   ├─ /icons
│   ├─ favicon.ico
│   ├─ manifest.json            # PWA manifest
│   └─ robots.txt
├─ /emails                      # Email templates
│   ├─ welcome.tsx
│   ├─ newsletter.tsx
│   └─ notification.tsx
├─ middleware.ts                # Next.js middleware
├─ next.config.js
├─ tailwind.config.js
├─ tsconfig.json
├─ .env.example
└─ package.json
```

---

## Database Schema (Enhanced Prisma + PostgreSQL via Supabase)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String            @id @default(cuid())
  name          String
  email         String            @unique
  password      String?
  avatar        String?
  bio           String?
  website       String?
  socialLinks   Json?
  role          Role              @default(USER)
  subscription  SubscriptionTier  @default(FREE)
  aiCredits     Int               @default(5)
  emailVerified DateTime?
  createdAt     DateTime          @default(now())
  updatedAt     DateTime          @updatedAt
  
  // Relations
  projects      Project[]
  blogPosts     BlogPost[]
  discussions   Discussion[]
  aiRequests    AIRequest[]
  testimonials  Testimonial[]
  
  @@map("users")
}

model Project {
  id          String        @id @default(cuid())
  title       String
  slug        String        @unique
  description String
  content     String?       @db.Text
  techStack   String[]
  screenshots String[]
  demoUrl     String?
  githubUrl   String?
  featured    Boolean       @default(false)
  viewCount   Int           @default(0)
  category    String
  status      ProjectStatus @default(ACTIVE)
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  
  // Relations
  author      User          @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId    String
  
  @@map("projects")
}

model BlogPost {
  id          String       @id @default(cuid())
  title       String
  slug        String       @unique
  content     String       @db.Text
  summary     String
  coverImage  String?
  tags        String[]
  published   Boolean      @default(false)
  featured    Boolean      @default(false)
  viewCount   Int          @default(0)
  readTime    Int?         // in minutes
  seoTitle    String?
  seoDescription String?
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  publishedAt DateTime?
  
  // Relations
  author      User         @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId    String
  discussions Discussion[]
  
  @@map("blog_posts")
}

model Discussion {
  id        String   @id @default(cuid())
  content   String   @db.Text
  upvotes   Int      @default(0)
  downvotes Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  author   User      @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId String
  post     BlogPost? @relation(fields: [postId], references: [id], onDelete: Cascade)
  postId   String?
  parent   Discussion? @relation("DiscussionReplies", fields: [parentId], references: [id])
  parentId String?
  replies  Discussion[] @relation("DiscussionReplies")
  
  @@map("discussions")
}

model Service {
  id          String   @id @default(cuid())
  name        String
  description String   @db.Text
  price       Float
  currency    String   @default("USD")
  features    String[]
  popular     Boolean  @default(false)
  active      Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@map("services")
}

model AIRequest {
  id          String          @id @default(cuid())
  prompt      String          @db.Text
  response    String?         @db.Text
  model       String          @default("groq-llama")
  status      AIRequestStatus @default(PENDING)
  creditsUsed Int
  processingTime Int?         // in milliseconds
  createdAt   DateTime        @default(now())
  updatedAt   DateTime        @updatedAt
  
  // Relations
  user        User            @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId      String
  
  @@map("ai_requests")
}

model Newsletter {
  id         String   @id @default(cuid())
  email      String   @unique
  subscribed Boolean  @default(true)
  source     String?  // where they subscribed from
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  
  @@map("newsletter")
}

model Analytics {
  id        String   @id @default(cuid())
  path      String
  views     Int      @default(1)
  uniqueViews Int    @default(1)
  referrer  String?
  userAgent String?
  country   String?
  date      DateTime @default(now())
  
  @@unique([path, date])
  @@map("analytics")
}

model Testimonial {
  id        String   @id @default(cuid())
  content   String   @db.Text
  rating    Int      @default(5)
  featured  Boolean  @default(false)
  approved  Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId  String
  
  @@map("testimonials")
}

model Contact {
  id        String      @id @default(cuid())
  name      String
  email     String
  subject   String
  message   String      @db.Text
  status    ContactStatus @default(PENDING)
  createdAt DateTime    @default(now())
  updatedAt DateTime    @updatedAt
  
  @@map("contacts")
}

enum Role {
  USER
  ADMIN
  MODERATOR
}

enum SubscriptionTier {
  FREE
  STARTER
  PRO
  ENTERPRISE
}

enum ProjectStatus {
  ACTIVE
  ARCHIVED
  DRAFT
}

enum AIRequestStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
}

enum ContactStatus {
  PENDING
  RESPONDED
  CLOSED
}
```

---

## Feature Modules (Enhanced)

| Module | Description | Technology Stack | Monetization |
|--------|-------------|------------------|-------------|
| **Portfolio Showcase** | Dynamic project gallery with filtering | Next.js, Framer Motion, Supabase | Lead generation, SEO |
| **AI-Powered Blog** | Content creation with AI assistance | Groq API, React Email, Prisma | Premium AI credits, ads |
| **Service Marketplace** | Service packages with booking system | Stripe, React Hook Form, Zod | Commission, consultation fees |
| **Community Hub** | Discussions, Q&A, user profiles | Supabase Realtime, TanStack Query | Premium memberships |
| **Free AI Tools** | Text generation, code assistance | Hugging Face, Ollama (local) | Freemium model |
| **Newsletter System** | Email marketing and automation | Resend, React Email templates | Sponsored content |
| **Analytics Dashboard** | Traffic, engagement, revenue tracking | Vercel Analytics, PostHog | Data insights |
| **Contact & CRM** | Lead management and communication | Supabase, email automation | Client acquisition |
| **Testimonials** | Social proof and reviews | User-generated content | Trust building |
| **PWA Features** | Offline support, push notifications | Next.js PWA, service workers | User retention |

---

## Roadmap / Build Timeline (Realistic & Free-First)

### Phase 1 – Foundation (3-4 weeks)
**Goal:** Core functionality with TypeScript
- ✅ Next.js 15 setup with TypeScript + Tailwind
- ✅ Supabase database and authentication
- ✅ Basic UI components with Shadcn/ui
- ✅ Project showcase with CRUD operations
- ✅ Blog system with rich text editor
- ✅ Contact form with email notifications
- ✅ Responsive design and mobile optimization

### Phase 2 – Content & Community (2-3 weeks)
**Goal:** Engagement and content management
- 📝 Advanced blog features (tags, search, SEO)
- 📝 Community discussions with nested replies
- 📝 User profiles and authentication flows
- 📝 Newsletter subscription system
- 📝 Basic analytics tracking
- 📝 Social sharing integration

### Phase 3 – AI Integration (4-5 weeks)
**Goal:** Free AI tools and premium features
- 🤖 Groq API integration for text generation
- 🤖 Hugging Face models for free tier
- 🤖 Local Ollama setup for cost-free AI
- 🤖 AI credit system and usage tracking
- 🤖 Streaming AI responses with Vercel AI SDK
- 🤖 AI-assisted blog writing tools

### Phase 4 – Monetization & Growth (2-3 weeks)
**Goal:** Revenue streams and business features
- 💰 Stripe integration for payments
- 💰 Service booking and consultation system
- 💰 Premium AI tool subscriptions
- 💰 Testimonials and social proof
- 💰 Advanced analytics dashboard
- 💰 Email marketing automation

### Phase 5 – Polish & Scale (2-3 weeks)
**Goal:** Production-ready platform
- 🚀 PWA features and offline support
- 🚀 Performance optimization and caching
- 🚀 SEO optimization and sitemap
- 🚀 Error handling and monitoring
- 🚀 Testing and quality assurance
- 🚀 Documentation and deployment

**Total Timeline:** 13-18 weeks for a production-ready, monetizable platform

### 🎯 Success Metrics
- **Week 4:** Basic portfolio live
- **Week 8:** Community features active
- **Week 13:** AI tools generating revenue
- **Week 18:** Full platform with $1K+ MRR potential

---

## Environment Variables

Create a `.env.local` file in your root directory:

```bash
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Supabase
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth Providers (Free)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# AI Services (Free Tiers)
GROQ_API_KEY="your-groq-api-key"
HUGGINGFACE_API_KEY="your-huggingface-key"

# Email (Free Tier)
RESEND_API_KEY="your-resend-api-key"
FROM_EMAIL="noreply@yourdomain.com"

# Payments
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Analytics (Free)
NEXT_PUBLIC_POSTHOG_KEY="your-posthog-key"
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
```

---

## Deployment

### Vercel (Recommended - Free Tier)

1. **Connect Repository**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

2. **Environment Variables**
   - Add all environment variables in Vercel dashboard
   - Ensure database URLs point to production Supabase

3. **Domain Setup**
   - Add custom domain in Vercel settings
   - Configure DNS records

### Alternative: Railway/Render (Free Tiers)

- Both offer PostgreSQL and deployment
- Similar setup process
- Good alternatives to Vercel

---

## Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run type-check
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Use conventional commit messages

---

## Free Technology Recommendations

### 🆓 **Cost-Effective Choices**
- **Hosting:** Vercel (free tier) - 100GB bandwidth
- **Database:** Supabase (free tier) - 500MB storage
- **AI:** Groq (free tier) - 14,400 requests/day
- **Email:** Resend (free tier) - 3,000 emails/month
- **Analytics:** PostHog (free tier) - 1M events/month
- **Images:** Supabase Storage (1GB free)

### 💡 **Scaling Strategy**
1. **Start Free:** Use all free tiers initially
2. **Monitor Usage:** Track limits and usage patterns
3. **Upgrade Gradually:** Only pay for what you need
4. **Revenue First:** Ensure income before major expenses

### 🔧 **Development Best Practices**
- **TypeScript:** Use TSX for all React components
- **Validation:** Zod schemas for type-safe forms
- **State Management:** React Query for server state
- **Styling:** Tailwind + Shadcn for consistency
- **Testing:** Jest + Testing Library (when needed)

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Support

- 📧 **Email:** support@jengalabs.com
- 💬 **Discord:** [Join our community]
- 📖 **Docs:** [Documentation site]
- 🐛 **Issues:** [GitHub Issues]

---

**Built with ❤️ using 100% free and open-source technologies**