import { NextResponse } from "next/server";
import client from "@/util/mongo";

export async function GET(req) {
  const url = new URL(req.url);
  const searchParam = new URLSearchParams(url.search);
  let name = searchParam.get("name") || "";

  const db = client.db("internalhack-24");

  let user = await db.collection("users").findOne({ name });

  return NextResponse.json(user["cart"]);
}
