import { loginSchema } from "@/entities/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = loginSchema.parse(body);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-in`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { message: error.message || "Authentication failed" },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log("data", data);

    const { token } = data;
    // setAuthCookie(token);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json(
      { message: "An unknown error occurred" },
      { status: 500 },
    );
  }
}
