import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest, ev: NextResponse) {
  const { pathname } = req.nextUrl;
  if (pathname == "/projects") {
    const url = req.nextUrl.clone();
    url.pathname = "/projects/createbase";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
