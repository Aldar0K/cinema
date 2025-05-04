import { CookieNames } from "@/shared/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(CookieNames.ACCESS_TOKEN)?.value;

  if (!token) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log("response", response);

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    const data = await response.json();
    console.log("data", data);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("error", error);

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
