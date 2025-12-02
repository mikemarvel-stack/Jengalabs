import { PrismaClient, Role, SubscriptionTier, ProjectStatus, ContactStatus } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Clear existing data (optional - comment out for production)
  // await prisma.discussion.deleteMany()
  // await prisma.blogPost.deleteMany()
  // await prisma.project.deleteMany()
  // await prisma.user.deleteMany()

  // Create sample users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@jengalabs.com' },
    update: {},
    create: {
      email: 'admin@jengalabs.com',
      name: 'Admin User',
      role: Role.ADMIN,
      subscription: SubscriptionTier.ENTERPRISE,
      aiCredits: 1000,
      bio: 'Platform administrator and founder',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
      website: 'https://jengalabs.com',
    },
  })

  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@jengalabs.com' },
    update: {},
    create: {
      email: 'demo@jengalabs.com',
      name: 'Demo User',
      role: Role.USER,
      subscription: SubscriptionTier.PRO,
      aiCredits: 100,
      bio: 'Demo user for testing',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo',
    },
  })

  // Create sample projects
  const project1 = await prisma.project.upsert({
    where: { slug: 'ecommerce-platform' },
    update: {},
    create: {
      title: 'E-Commerce Platform',
      slug: 'ecommerce-platform',
      description: 'A modern full-stack e-commerce platform built with Next.js and Stripe',
      content: 'Detailed project description would go here...',
      techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'TailwindCSS'],
      category: 'Web Development',
      status: ProjectStatus.ACTIVE,
      featured: true,
      viewCount: 150,
      demoUrl: 'https://demo-ecommerce.vercel.app',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      seoTitle: 'E-Commerce Platform - Jengalabs Portfolio',
      seoDescription: 'A modern full-stack e-commerce solution showcasing React and Node.js expertise',
      authorId: adminUser.id,
    },
  })

  const project2 = await prisma.project.upsert({
    where: { slug: 'ai-content-generator' },
    update: {},
    create: {
      title: 'AI Content Generator',
      slug: 'ai-content-generator',
      description: 'SaaS application for AI-powered content creation using Groq API',
      content: 'This application leverages advanced AI models...',
      techStack: ['Next.js', 'Groq API', 'React', 'TailwindCSS', 'Prisma'],
      category: 'SaaS',
      status: ProjectStatus.ACTIVE,
      featured: true,
      viewCount: 200,
      demoUrl: 'https://ai-content-demo.vercel.app',
      githubUrl: 'https://github.com/yourusername/ai-content',
      authorId: adminUser.id,
    },
  })

  // Create sample blog posts
  const blogPost1 = await prisma.blogPost.upsert({
    where: { slug: 'getting-started-with-nextjs-15' },
    update: {},
    create: {
      title: 'Getting Started with Next.js 15',
      slug: 'getting-started-with-nextjs-15',
      summary: 'A comprehensive guide to getting started with Next.js 15 and the App Router',
      content: 'Lorem ipsum dolor sit amet...',
      tags: ['Next.js', 'React', 'JavaScript'],
      published: true,
      featured: true,
      viewCount: 350,
      readTime: 8,
      seoTitle: 'Next.js 15 Getting Started Guide',
      seoDescription: 'Learn how to get started with Next.js 15 and the new App Router',
      publishedAt: new Date('2025-11-15'),
      authorId: adminUser.id,
    },
  })

  const blogPost2 = await prisma.blogPost.upsert({
    where: { slug: 'ai-integration-guide' },
    update: {},
    create: {
      title: 'Integrating AI APIs into Your Application',
      slug: 'ai-integration-guide',
      summary: 'Learn how to integrate Groq API and Hugging Face models into your Next.js app',
      content: 'In this guide, we explore different AI API options...',
      tags: ['AI', 'API', 'Integration', 'Groq'],
      published: true,
      featured: false,
      viewCount: 180,
      readTime: 12,
      publishedAt: new Date('2025-11-10'),
      authorId: adminUser.id,
    },
  })

  // Create sample discussions
  const discussion1 = await prisma.discussion.create({
    data: {
      content: 'This is a great article! Really helped me understand Next.js better.',
      authorId: demoUser.id,
      postId: blogPost1.id,
      upvotes: 5,
    },
  })

  const discussion2 = await prisma.discussion.create({
    data: {
      content: 'Have you tried using Ollama for local AI inference? It\'s completely free!',
      authorId: demoUser.id,
      postId: blogPost2.id,
      upvotes: 3,
    },
  })

  // Create sample services
  const service1 = await prisma.service.upsert({
    where: { name: 'Full-Stack Development' },
    update: {},
    create: {
      name: 'Full-Stack Development',
      description: 'Custom web application development using modern technologies',
      price: 5000,
      currency: 'USD',
      features: ['Custom Development', '24/7 Support', 'Maintenance Included'],
      popular: true,
      active: true,
    },
  })

  const service2 = await prisma.service.upsert({
    where: { name: 'AI Integration Consulting' },
    update: {},
    create: {
      name: 'AI Integration Consulting',
      description: 'Expert consultation on integrating AI models into your platform',
      price: 2000,
      currency: 'USD',
      features: ['Architecture Review', 'Integration Planning', 'Code Review'],
      popular: false,
      active: true,
    },
  })

  // Create sample newsletter subscribers
  await prisma.newsletter.upsert({
    where: { email: 'subscriber@example.com' },
    update: {},
    create: {
      email: 'subscriber@example.com',
      subscribed: true,
      source: 'landing_page',
    },
  })

  console.log('✅ Database seeding completed!')
  console.log(`📊 Created:`)
  console.log(`   - 2 users (admin, demo)`)
  console.log(`   - 2 projects`)
  console.log(`   - 2 blog posts`)
  console.log(`   - 2 discussions`)
  console.log(`   - 2 services`)
  console.log(`   - 1 newsletter subscriber`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Seed error:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
