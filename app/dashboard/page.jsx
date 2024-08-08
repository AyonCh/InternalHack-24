"use client";

import AdminCards from "@/components/admincards";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      let res = (
        await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/user/auth`)
      ).data;

      let user = (
        await axios.get(
          `${process.env.NEXT_PUBLIC_URI}/api/user?name=${res["name"]}`,
        )
      ).data;

      if (!user["admin"]) {
        router.push("/");
      }

      let response = (
        await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/shop`)
      ).data;
      setRes(response);
      setData(response);
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
    <div className="px-[30px] pt-[100px]">
      <h1 className="text-[40px] sm:text-[60px] font-bold title text-center pb-5">
        Dasboard
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex gap-5 flex-wrap sm:flex-nowrap">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-primary/10 rounded-md bg-transparent p-2 w-full placeholder:text-text/25"
          />
          <button className="hover:bg-primary/5 p-2 rounded-md w-full sm:w-fit sm:px-10 border border-primary/10">
            Add
          </button>
        </div>
        {res.length ? <AdminCards data={data} /> : "Loading..."}
      </div>
    </div>
  );
}
