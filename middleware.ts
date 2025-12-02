import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'

// Routes that require authentication
const protectedRoutes = ['/dashboard', '/ai-tools']

// Routes that should redirect authenticated users away
const authRoutes = ['/auth/login', '/auth/register']

export default withAuth(
  function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname
    const token = req.nextauth.token

    // Redirect to login if accessing protected routes without auth
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
      if (!token) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
      }
    }

    // Redirect to dashboard if accessing auth routes while authenticated
    if (authRoutes.some(route => pathname.startsWith(route))) {
      if (token) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // This allows all requests through
        // Authorization is handled in the main middleware function
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}
