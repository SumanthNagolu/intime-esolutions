import { updateSession } from '@/lib/supabase/middleware';
import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;

  // Check if this is the academy subdomain
  const isAcademySubdomain = hostname.startsWith('academy.');
  
  // Employee/internal routes (stay on main domain)
  const isEmployeeRoute = 
    pathname.startsWith('/employee') ||
    pathname.startsWith('/admin');
  
  // Student training app routes (redirect to academy subdomain)
  const isStudentRoute = 
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/topics') ||
    pathname.startsWith('/assessments') ||
    pathname.startsWith('/progress') ||
    pathname.startsWith('/ai-mentor') ||
    pathname.startsWith('/setup') ||
    pathname.startsWith('/profile');

  // If on main domain and accessing student routes, redirect to academy subdomain
  if (!isAcademySubdomain && isStudentRoute && hostname.includes('intimesolutions.com')) {
    const url = request.nextUrl.clone();
    url.host = `academy.${hostname}`;
    return NextResponse.redirect(url);
  }

  // If on academy subdomain and accessing employee routes, redirect to main domain
  if (isAcademySubdomain && isEmployeeRoute && hostname.includes('intimesolutions.com')) {
    const url = request.nextUrl.clone();
    url.host = hostname.replace('academy.', '');
    return NextResponse.redirect(url);
  }
  
  // Continue with Supabase auth
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

