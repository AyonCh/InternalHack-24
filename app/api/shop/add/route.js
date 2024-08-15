import { NextResponse } from "next/server";
import client from "@/util/mongo";

export async function POST(req) {
  const { title, description, price, image } = await req.json();

  const db = client.db("internalhack-24");

  const item = await db.collection("shop").findOne({ title });

  if (item) {
    return NextResponse.json({ error: "Item already exists" });
  }

  const res = await db.collection("shop").insertOne({
    title,
    description,
    price,
    image,
  });

  return NextResponse.json({
    message: "Added item to shop successfully",
  });
}
