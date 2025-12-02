import { NextRequest, NextResponse } from 'next/server'
import { trackPageView } from '@/lib/analytics'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { path, referrer, userAgent, country } = body

    await trackPageView(path, referrer, userAgent, country)

    return NextResponse.json({
      success: true,
      message: 'Page view tracked',
    })
  } catch (error) {
    console.error('Analytics tracking error:', error)
    return NextResponse.json(
      { error: 'Failed to track page view' },
      { status: 500 }
    )
  }
}
