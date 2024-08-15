import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req) {
  cookies().delete("token");
  cookies().delete("refreshToken");

  return NextResponse.json({
    message: "Logged out of this device successfully",
  });
}
