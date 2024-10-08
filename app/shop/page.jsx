"use client";
import ShopCards from "@/components/shopcards";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [data, setData] = useState([]);
  const [session, setSession] = useState({});

  useEffect(() => {
    (async () => {
      let response = (
        await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/shop`)
      ).data;
      setRes(response);
      setData(response);

      let res = (
        await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/user/auth`)
      ).data;
      setSession(res);
    })();
  }, []);

  useEffect(() => {
    setData(
      res.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      }),
    );
  }, [search]);

  return (
    <div className="px-[30px] pt-[100px] pb-32">
      <h1 className="text-[40px] sm:text-[60px] font-bold title text-center pb-5">
        Shop
      </h1>
      <div className="flex flex-col gap-10">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-primary/10 rounded-md bg-transparent p-2 w-full placeholder:text-text/25"
        />
        {res.length ? (
          <ShopCards data={data} session={session} />
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
