import { jwtVerify } from "jose";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Paths that require authentication
const protectedPaths = [
  "/profile",
  "/profile/tickets",
  "/profile/settings",
  "/movies/*/book",
];

// Paths that are only accessible to non-authenticated users
const authPaths = ["/auth/login", "/auth/register"];

// Secret key for verifying JWT tokens
const JWT_SECRET = process.env.JWT_SECRET || "";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if the path is protected or auth-only
  const isProtectedPath = protectedPaths.some((protectedPath) => {
    if (protectedPath.includes("*")) {
      const regex = new RegExp(`^${protectedPath.replace("*", ".*")}`);
      return regex.test(path);
    }
    return path === protectedPath || path.startsWith(`${protectedPath}/`);
  });

  const isAuthPath = authPaths.some(
    (authPath) => path === authPath || path.startsWith(`${authPath}/`),
  );

  // Get the token from cookies
  const token = request.cookies.get("auth-token")?.value;

  // Verify the token
  let isAuthenticated = false;
  if (token) {
    try {
      await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
      isAuthenticated = true;
    } catch (error) {
      // Token is invalid or expired
      isAuthenticated = false;
    }
  }

  // Redirect logic
  if (isProtectedPath && !isAuthenticated) {
    // Redirect to login if trying to access protected path while not authenticated
    const redirectUrl = new URL("/auth/login", request.url);
    redirectUrl.searchParams.set(
      "callbackUrl",
      encodeURI(request.nextUrl.pathname),
    );
    return NextResponse.redirect(redirectUrl);
  }

  if (isAuthPath && isAuthenticated) {
    // Redirect to home if trying to access auth paths while authenticated
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all protected paths
    "/profile/:path*",
    "/movies/:id/book/:path*",
    // Match all auth paths
    "/auth/:path*",
  ],
};
