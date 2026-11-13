import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
const AUTH_ONLY = ['/login', '/register', '/forgot'];
const PUBLIC = [...AUTH_ONLY, '/reset', '/auth'];
export async function middleware(req: NextRequest) {
  let res = NextResponse.next({ request: req });
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => req.cookies.getAll(),
      setAll: (list) => {
        list.forEach(({ name, value }) => req.cookies.set(name, value));
        res = NextResponse.next({ request: req });
        list.forEach(({ name, value, options }) => res.cookies.set(name, value, options));
      },
    },
  });
  const { data: { user } } = await supabase.auth.getUser();
  const p = req.nextUrl.pathname;
  const isPublic = PUBLIC.some((x) => p === x || p.startsWith(x + '/'));
  if (!user && !isPublic) return NextResponse.redirect(new URL('/login', req.url));
  if (user && AUTH_ONLY.includes(p)) return NextResponse.redirect(new URL('/', req.url));
  return res;
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
