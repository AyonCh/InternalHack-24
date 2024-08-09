import { NextResponse } from "next/server";
import client from "@/util/mongo";

export async function POST(req) {
  const { title, newTitle, newDescription, newPrice, newImage } =
    await req.json();

  const db = client.db("internalhack-24");

  await db.collection("shop").updateOne(
    { title },
    {
      $set: {
        title: newTitle,
        description: newDescription,
        price: newPrice,
        image: newImage,
      },
    },
  );

  return NextResponse.json({
    message: "Updated item successfully",
  });
}
