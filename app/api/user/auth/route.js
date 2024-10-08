import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import client from "@/util/mongo";

export async function GET() {
  const token = cookies().get("token");
  const refreshToken = cookies().get("refreshToken");

  try {
    const data = jwt.verify(token["value"], process.env.JWT_SEC);
    return NextResponse.json(data);
  } catch {}

  try {
    const data = jwt.verify(refreshToken["value"], process.env.JWT_SEC);

    const db = client.db("internalhack-24");
    const user = await db.collection("users").findOne({ name: data["name"] });

    const newToken = jwt.sign(
      { name: user["name"], email: user["email"], pfp: user["pfp"] },
      process.env.JWT_SEC,
      {
        expiresIn: "15m",
      },
    );

    cookies().set({
      name: "token",
      value: newToken,
      httpOnly: true,
      secure: true,
      path: "/",
      domain: "",
      maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
    });

    return NextResponse.json(user);
  } catch {}

  return NextResponse.json({ message: "User logged out" });
}
