import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Paths that require authentication
const protectedPaths = ["/", "/profile"];

// Paths that are only accessible to non-authenticated users
const authPaths = ["/auth/login", "/auth/register"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log("Request path:", path);

  // Check if the path is protected or auth-only
  const isProtectedPath = protectedPaths.some((protectedPath) => {
    if (protectedPath.includes("*")) {
      const regex = new RegExp(`^${protectedPath.replace("*", ".*")}`);
      return regex.test(path);
    }
    return path === protectedPath || path.startsWith(`${protectedPath}/`);
  });
  console.log("Is protected path:", isProtectedPath);

  const isAuthPath = authPaths.some(
    (authPath) => path === authPath || path.startsWith(`${authPath}/`),
  );
  console.log("Is auth path:", isAuthPath);

  // Get the token from cookies
  const token = request.cookies.get("access_token")?.value;
  console.log("Token:", token);

  // Determine if the user is authenticated based on the presence of the token
  const isAuthenticated = Boolean(token);
  console.log("Is authenticated:", isAuthenticated);

  // Redirect logic
  if (isProtectedPath && !isAuthenticated) {
    // Redirect to login if trying to access protected path while not authenticated
    const redirectUrl = new URL("/auth/login", request.url);
    redirectUrl.searchParams.set(
      "callbackUrl",
      encodeURI(request.nextUrl.pathname),
    );
    console.log("Redirecting to login");
    return NextResponse.redirect(redirectUrl);
  }

  if (isAuthPath && isAuthenticated) {
    // Redirect to home if trying to access auth paths while authenticated
    console.log("Redirecting to home");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all protected paths
    "/",
    "/profile",
    // Match all auth paths
    "/auth/:path*",
  ],
};
