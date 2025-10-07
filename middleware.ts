// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { verifyToken } from "./lib/auth";

// export async function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;
//   const protectedRoutes = ["/cart"];

//   if (protectedRoutes.some((path) => req.nextUrl.pathname.startsWith(path))) {
//     if (!token) {
//       console.log("No token found, redirecting to login");
//       const loginUrl = new URL("/login", req.url);
//       return NextResponse.redirect(loginUrl);
//     }

//     // Verify token
//     try {
//       const decoded = verifyToken(token);
//       if (!decoded) {
//         console.log("Invalid token, redirecting to login");
//         const loginUrl = new URL("/login", req.url);
//         return NextResponse.redirect(loginUrl);
//       }

//       // Token is valid, allow access
//       console.log("Token verified, allowing access");
//       return NextResponse.next();
//     } catch (error) {
//       console.error("Token verification error:", error);
//       const loginUrl = new URL("/login", req.url);
//       return NextResponse.redirect(loginUrl);
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/cart/:path*"],
// };
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  // Disable middleware check temporarily
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
