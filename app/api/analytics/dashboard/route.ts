import { NextRequest, NextResponse } from 'next/server'
import { getTopPages } from '@/lib/analytics'

export async function GET(req: NextRequest) {
  try {
    // TODO: Verify admin authentication
    const days = parseInt(req.nextUrl.searchParams.get('days') || '30')

    const topPages = await getTopPages(days)

    return NextResponse.json({
      success: true,
      data: topPages,
    })
  } catch (error) {
    console.error('Analytics dashboard error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
