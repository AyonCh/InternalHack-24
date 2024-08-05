import { NextResponse } from "next/server";
import client from "@/util/mongo";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  const { name, password } = await req.json();

  const db = client.db("internalhack-24");

  const user = await db.collection("users").findOne({ name });

  if (!user) {
    return NextResponse.json({ error: "User doesn't exist" });
  }

  if (user["password"] != password) {
    return NextResponse.json({
      error: "Invalid password",
    });
  }

  const token = jwt.sign(
    { name: user["name"], email: user["email"], pfp: user["pfp"] },
    process.env.JWT_SEC,
    {
      expiresIn: "1d",
    },
  );

  const refreshToken = jwt.sign({ name: user["name"] }, process.env.JWT_SEC, {
    expiresIn: "30d",
  });

  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    secure: true,
    path: "/",
    domain: "",
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
  });

  cookies().set({
    name: "refreshToken",
    value: refreshToken,
    httpOnly: true,
    secure: true,
    path: "/",
    domain: "",
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
  });

  return NextResponse.json({ message: "Logged in" });
}
