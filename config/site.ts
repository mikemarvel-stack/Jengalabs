export const siteConfig = {
  name: 'Jengalabs',
  description: 'A modern full-stack developer studio platform',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: 'https://jengalabs.com/og-image.png',
  
  // Brand colors
  colors: {
    primary: '#1E1E8C',
    accent: '#FF8C42',
    neutral: '#F5F5F5',
  },

  // Brand values
  taglines: [
    'Stacking Ideas, Building Futures',
    'Where Innovation Comes Together',
    'Your Full-Stack, Full-Potential Studio',
    'Building Smarter, Faster, Better',
  ],

  // Navigation
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Services', href: '/services' },
    { label: 'Community', href: '/community' },
    { label: 'AI Tools', href: '/ai-tools' },
  ],

  // Links
  links: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'contact@jengalabs.com',
  },

  // Contact info
  contact: {
    email: 'support@jengalabs.com',
    phone: '+1 (555) 000-0000',
    address: 'Your City, Your Country',
  },
}

export type SiteConfig = typeof siteConfig
