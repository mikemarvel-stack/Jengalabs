import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { prompt, model } = body

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    // TODO: Implement AI generation with Groq/Hugging Face/Ollama
    // For now, return a placeholder response
    const response = 'AI response placeholder'

    // Track the AI request
    const aiRequest = await prisma.aIRequest.create({
      data: {
        prompt,
        response,
        model: model || 'groq-llama',
        status: 'COMPLETED',
        creditsUsed: 1,
        processingTime: 1000,
        userId: 'temp-user-id', // TODO: Get from session
      },
    })

    return NextResponse.json({
      success: true,
      data: aiRequest,
    })
  } catch (error) {
    console.error('AI generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    // TODO: Get user's AI request history from session
    const requests = await prisma.aIRequest.findMany({
      where: {
        userId: 'temp-user-id', // TODO: Get from session
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })

    return NextResponse.json({
      success: true,
      data: requests,
    })
  } catch (error) {
    console.error('AI history error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch history' },
      { status: 500 }
    )
  }
}
