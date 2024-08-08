import { NextResponse } from "next/server";
import client from "@/util/mongo";

export async function GET(req) {
  const url = new URL(req.url);
  const searchParam = new URLSearchParams(url.search);
  let name = searchParam.get("name") || "";

  const db = client.db("internalhack-24");
  let user;

  if (name) {
    user = await db.collection("users").findOne({ name });
  } else {
    user = await db.collection("users").find({}).toArray();
  }

  return NextResponse.json(user);
}
