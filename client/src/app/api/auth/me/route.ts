import { CookieNames } from "@/shared/constants";
import { decodeJwt } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(CookieNames.ACCESS_TOKEN)?.value;

  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const { sub, email } = decodeJwt(token);

    const data = { id: sub, email };

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    // console.log("error", error);

    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { message: "An unknown error occurred" },
        { status: 500 },
      );
    }
  }
}
