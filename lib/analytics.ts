import { prisma } from './prisma'

export async function trackPageView(
  path: string,
  referrer?: string,
  userAgent?: string,
  country?: string
) {
  try {
    const date = new Date()
    date.setHours(0, 0, 0, 0)

    const existing = await prisma.analytics.findFirst({
      where: {
        path,
        date: {
          gte: date,
          lt: new Date(date.getTime() + 24 * 60 * 60 * 1000),
        },
      },
    })

    if (existing) {
      await prisma.analytics.update({
        where: { id: existing.id },
        data: {
          views: { increment: 1 },
          uniqueViews: userAgent && !existing.userAgent?.includes(userAgent) ? { increment: 1 } : undefined,
        },
      })
    } else {
      await prisma.analytics.create({
        data: {
          path,
          views: 1,
          uniqueViews: 1,
          referrer,
          userAgent,
          country,
          date,
        },
      })
    }
  } catch (error) {
    console.error('Analytics tracking error:', error)
  }
}

export async function getPageAnalytics(path: string, days: number = 30) {
  try {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const analytics = await prisma.analytics.findMany({
      where: {
        path,
        date: {
          gte: startDate,
        },
      },
      orderBy: { date: 'desc' },
    })

    return analytics
  } catch (error) {
    console.error('Analytics retrieval error:', error)
    return []
  }
}

export async function getTopPages(days: number = 30) {
  try {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const topPages = await prisma.analytics.groupBy({
      by: ['path'],
      _sum: {
        views: true,
        uniqueViews: true,
      },
      where: {
        date: {
          gte: startDate,
        },
      },
      orderBy: {
        _sum: {
          views: 'desc',
        },
      },
      take: 10,
    })

    return topPages
  } catch (error) {
    console.error('Top pages retrieval error:', error)
    return []
  }
}
