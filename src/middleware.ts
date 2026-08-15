import { NextResponse, type NextRequest } from "next/server";

/** Student/teacher portals are paused — keep routes in the repo, but do not serve them publicly. */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname === "/login" ||
    pathname.startsWith("/student") ||
    pathname.startsWith("/teacher")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/login/:path*", "/student/:path*", "/teacher/:path*"],
};
