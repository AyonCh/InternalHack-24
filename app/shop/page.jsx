"use client";
import ShopCards from "@/components/shopcards";
import { useState } from "react";

export default function Shop() {
  const [search, setSearch] = useState("");
  return (
    <div className="px-[30px] pt-[100px]">
      <h1 className="text-[40px] sm:text-[60px] font-bold title text-center">
        About
      </h1>
      <div className="flex flex-col gap-10">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-[1px] border-primary/5 rounded-md bg-transparent p-2 outline-none w-full placeholder:text-text/25"
        />
        <ShopCards
          data={[
            {
              title: "Ayon",
              description: "Ayonc",
              image: "https://api.dicebear.com/9.x/glass/svg?seed=Felix",
            },
            {
              title: "No one",
              description: "No One",
              image: "https://api.dicebear.com/9.x/glass/svg?seed=No One",
            },
          ]}
        />
      </div>
    </div>
  );
}
