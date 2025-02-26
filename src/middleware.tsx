// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;
  
//   if (path.split("/")[1] !== "auth" && !request.cookies.has("cion_token")) {
//     return NextResponse.redirect(new URL("/auth/login", request.url));
//   }
//   if (path.split("/")[1] === "auth" && request.cookies.has("cion_token")) {
//     return NextResponse.redirect(new URL(`/dashboards/shoppingplace`, request.url));
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };


import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Allow access to the root ("/") to display the index.html file in the public folder
  if (path === "*") {
    return NextResponse.redirect(new URL("/index.html", request.url));
  }
  if (path === "/") {
    return NextResponse.redirect(new URL("/index.html", request.url));
  }

  // If not authenticated and not accessing the auth routes, redirect to login
  if (path.split("/")[1] !== "auth" && !request.cookies.has("cion_token")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // If already authenticated and trying to access auth routes, redirect to dashboard
  if (path.split("/")[1] === "auth" && request.cookies.has("cion_token")) {
    return NextResponse.redirect(new URL(`/dashboards/home`, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|index.html).*)"],
};
