import { NextResponse } from "next/server";
import client from "@/util/mongo";

export async function POST(req) {
  const { title, name } = await req.json();

  const db = client.db("internalhack-24");

  const item = await db.collection("shop").findOne({ title });
  const user = await db.collection("users").findOne({ name });

  for (let i = 0; i < user["cart"].length; i++) {
    if (user["cart"][i]["title"] == item["title"]) {
      return NextResponse.json({
        error: "Item aready added to cart",
      });
    }
  }

  let res = await db.collection("users").updateOne(
    { name },
    {
      $set: {
        cart: [...user["cart"], item],
      },
    },
  );

  return NextResponse.json({
    message: "Added item to cart successfully",
  });
}
