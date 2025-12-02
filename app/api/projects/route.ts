import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  try {
    const projects = await prisma.project.findMany({
      include: {
        author: true,
      },
      where: {
        status: 'ACTIVE',
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json({
      success: true,
      data: projects,
    })
  } catch (error) {
    console.error('Projects fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    // TODO: Verify authentication
    const body = await req.json()
    const { title, slug, description, techStack, category } = body

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        description,
        techStack,
        category,
        authorId: 'temp-user-id', // TODO: Get from session
      },
    })

    return NextResponse.json(
      {
        success: true,
        data: project,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Project creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}
