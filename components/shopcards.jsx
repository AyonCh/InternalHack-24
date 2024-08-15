"use client";

import axios from "axios";
import { toast } from "./ui/use-toast";

export default function ShopCards({ data, session }) {
  const handleClick = (key, state) => {
    let dialog = document.getElementById("dialog_" + key);
    if (state == "open") {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };

  const addToCart = async (key, title) => {
    let res = (
      await axios.post(`${process.env.NEXT_PUBLIC_URI}/api/cart/add`, {
        title,
        name: session["name"],
      })
    ).data;

    if (res["error"]) {
      handleClick(key, "close");
      toast({ description: res["error"] });
      return;
    }

    handleClick(key, "close");
    toast({ description: res["message"] });
  };

  return (
    <div className="flex gap-10 flex-wrap justify-center sm:justify-start">
      {data.map(({ title, description, price, image }, key) => (
        <>
          <div
            className="flex flex-col justify-between cursor-pointer w-[450px] sm:w-[250px]"
            onClick={() => handleClick(key, "open")}
            key={key}
          >
            <img
              src={image}
              alt="image"
              height={450}
              width={450}
              draggable={false}
              onDragStart={false}
              className="rounded-lg z-[-1]"
            />
            <div className="rounded-b-lg bg-background/10 px-4 py-3 backdrop-blur-[10px]">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-xl font-bold">{title}</h1>
                  <p className="text-sm text-text/50 w-20 sm:w-40 overflow-x-hidden whitespace-nowrap">
                    {description}
                  </p>
                </div>
                <p className="text-text/50">{price}</p>
              </div>
            </div>
          </div>
          <dialog
            id={"dialog_" + key}
            className="w-dvw h-dvh p-5 rounded-lg text-text border border-primary/10 bg-background bg-opacity-10 backdrop:backdrop-blur-xl"
          >
            <div className="w-full h-full flex justify-center gap-1 sm:gap-10 items-center text-center md:flex-row flex-col md:text-left">
              <img
                src={image}
                alt="image"
                height={500}
                width={500}
                draggable={false}
                onDragStart={false}
                className="rounded-lg z-[-1]"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h1 className="text-5xl font-bold">{title}</h1>
                  <p className="text-text/50">{price}</p>
                  <p className="text-sm text-text/50 text-pretty break-all">
                    {description}
                  </p>
                </div>
                <button
                  className=" rounded-lg py-2 px-6 hover:bg-primary/10 bg-primary/5 w-52"
                  onClick={() => addToCart(key, title)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <button
              className="absolute top-5 right-5 h-6 w-6 cursor-pointer"
              onClick={() => handleClick(key, "close")}
            >
              &#10005;
            </button>
          </dialog>
        </>
      ))}
    </div>
  );
}
