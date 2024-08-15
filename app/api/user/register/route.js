import { NextResponse } from "next/server";
import client from "@/util/mongo";

export async function POST(req) {
  const { name, email, password } = await req.json();

  const db = client.db("internalhack-24");

  const user = await db.collection("users").findOne({ name });

  if (user) {
    return NextResponse.json({ error: "Username already exists" });
  }

  const res = await db.collection("users").insertOne({
    name,
    email,
    password,
    pfp: `https://api.dicebear.com/9.x/initials/svg?seed="${name}"&backgroundType=gradientLinear&radius=50`,
  });

  return NextResponse.json({
    message: "Signed Up successfully",
  });
}
