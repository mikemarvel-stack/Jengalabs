import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const posts = await prisma.blogPost.findMany({
      include: {
        author: true,
        discussions: true,
      },
      where: {
        published: true,
      },
      orderBy: {
        publishedAt: 'desc',
      },
    })

    return NextResponse.json({
      success: true,
      data: posts,
    })
  } catch (error) {
    console.error('Blog posts fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    // TODO: Verify authentication
    const body = await req.json()
    const { title, slug, summary, content, tags } = body

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        summary,
        content,
        tags,
        authorId: 'temp-user-id', // TODO: Get from session
      },
    })

    return NextResponse.json(
      {
        success: true,
        data: post,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Blog post creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}
