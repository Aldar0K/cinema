import { CookieNames } from "@/shared/constants";
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.delete(CookieNames.ACCESS_TOKEN);

  return response;
}
