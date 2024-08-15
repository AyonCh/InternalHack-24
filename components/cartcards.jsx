"use client";

import axios from "axios";
import { toast } from "./ui/use-toast";

export default function CartCards({ data, session }) {
  const removeFromCart = async (title) => {
    let res = (
      await axios.post(`${process.env.NEXT_PUBLIC_URI}/api/cart/remove`, {
        title,
        name: session["name"],
      })
    ).data;

    toast({ description: res["message"] });
  };

  return (
    <div className="flex gap-10 flex-wrap justify-center items-center">
      {data.map(({ title, description, price, image }, key) => (
        <>
          <div
            className="rounded-lg flex flex-row w-96 bg-background/10 px-4 py-3 backdrop-blur-[10px]"
            key={key}
          >
            <img
              src={image}
              alt="image"
              height={150}
              width={150}
              draggable={false}
              onDragStart={false}
              className="rounded-lg z-[-1]"
            />
            <div className="px-4 py-3 ">
              <div className="flex justify-between gap-1 flex-col">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-text/50">{price}</p>
                <p className="text-sm text-text/50 text-pretty break-all w-40 h-10 overflow-y-hidden">
                  {description}
                </p>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 h-6 w-6 cursor-pointer"
              onClick={() => removeFromCart(title)}
            >
              &#10005;
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
