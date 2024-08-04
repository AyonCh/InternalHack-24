import { NextResponse } from "next/server";
import client from "@/util/mongo";

export async function GET(req) {
  const url = new URL(req.url);
  const searchParam = new URLSearchParams(url.search);
  let title = searchParam.get("title") || "";

  const db = client.db("internalhack-24");
  let item;

  if (title) {
    item = await db.collection("shop").findOne({ title });
  } else {
    item = await db.collection("shop").find({}).toArray();
  }

  return NextResponse.json(item);
}
