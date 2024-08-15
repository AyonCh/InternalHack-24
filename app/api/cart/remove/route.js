import { NextResponse } from "next/server";
import client from "@/util/mongo";

export async function POST(req) {
  const { title, name } = await req.json();

  const db = client.db("internalhack-24");

  const user = await db.collection("users").findOne({ name });

  let cart = [];

  for (let i = 0; i < user["cart"].length; i++) {
    if (user["cart"][i]["title"] != title) {
      cart.push(user["cart"][i]);
    }
  }

  let res = await db.collection("users").updateOne(
    { name },
    {
      $set: {
        cart: cart,
      },
    },
  );

  return NextResponse.json({
    message: "Removed item from cart successfully",
  });
}
