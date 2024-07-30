import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req) {
  cookies().delete("token");
  cookies().delete("refreshToken");

  return NextResponse.json({
    message: "Successfully logged out of this device",
  });
}
