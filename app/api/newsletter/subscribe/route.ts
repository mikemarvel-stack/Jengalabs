import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, name } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const subscriber = await prisma.newsletter.upsert({
      where: { email },
      update: { subscribed: true },
      create: {
        email,
        subscribed: true,
        source: 'api',
      },
    })

    // TODO: Send welcome email
    return NextResponse.json({
      success: true,
      message: 'Subscribed successfully',
      data: subscriber,
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    await prisma.newsletter.update({
      where: { email },
      data: { subscribed: false },
    })

    return NextResponse.json({
      success: true,
      message: 'Unsubscribed successfully',
    })
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json(
      { error: 'Failed to unsubscribe' },
      { status: 500 }
    )
  }
}
