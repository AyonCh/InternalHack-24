"use client";

import AdminCards from "@/components/admincards";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

export default function Dashboard() {
  const router = useRouter();
  const addRef = useRef(null);
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("John Doe");
  const [description, setDescription] = useState("John Doe");
  const [price, setPrice] = useState("1$");
  const [image, setImage] = useState(
    "https://api.dicebear.com/9.x/initials/svg?seed=John%20Doe&backgroundType=gradientLinear",
  );

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

  const handleClick = (state) => {
    if (state == "open") {
      addRef.current.showModal();
    } else {
      addRef.current.close();
    }

    setTitle("John Doe");
    setDescription("John Doe");
    setPrice("1$");
    setImage(
      "https://api.dicebear.com/9.x/initials/svg?seed=John%20Doe&backgroundType=gradientLinear",
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = (
      await axios.post(`${process.env.NEXT_PUBLIC_URI}/api/shop/add`, {
        title,
        description,
        price,
        image,
      })
    ).data;

    if (res["error"]) {
      toast({ description: res["error"], variant: "destructive" });
      handleClick("close");
      return;
    }

    handleClick("close");
    toast({ description: res["message"] });
  };

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    let file = e.target.files[0];

    reader.addEventListener("load", () => {
      setImage(reader.result);
    });

    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="px-[30px] pt-[100px] pb-32">
        <h1 className="text-[40px] sm:text-[60px] font-bold title text-center pb-5">
          Dashboard
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
            <button
              className="hover:bg-primary/5 p-2 rounded-md w-full sm:w-fit sm:px-10 border border-primary/10"
              onClick={() => handleClick("open")}
            >
              Add
            </button>
          </div>
          {res.length ? <AdminCards data={data} /> : "Loading..."}
        </div>
      </div>
      <dialog
        ref={addRef}
        className="w-dvw h-dvh p-5 rounded-lg text-text border border-primary/10 bg-background bg-opacity-10 backdrop:backdrop-blur-xl"
      >
        <div className="w-full h-full flex justify-center gap-1 sm:gap-10 items-center md:flex-row flex-col md:text-left sm:pr-10">
          <div className="relative cursor-pointer w-[500px]">
            <img
              src={image}
              alt="image"
              height={500}
              width={500}
              draggable={false}
              onDragStart={() => { }}
              className="rounded-lg z-[-1]"
            />
            <div className="rounded-b-lg bg-background/10 absolute bottom-0 left-0 right-0 px-4 py-3 backdrop-blur-[10px]">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-xl font-bold">{title}</h1>
                  <p className="text-sm text-text/50">{description}</p>
                </div>
                <p className="text-text/50">{price}</p>
              </div>
            </div>
          </div>
          <form
            className="flex flex-col justify-between w-[600px] gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Title"
              className="border border-primary/5 rounded-md bg-transparent py-3 px-2 w-full placeholder:text-text/25"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              className="border border-primary/5 rounded-md bg-transparent py-3 px-2 w-full placeholder:text-text/25"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Price"
              className="border border-primary/5 rounded-md bg-transparent py-3 px-2 w-full placeholder:text-text/25"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label className="cursor-pointer border border-primary/5 rounded-md bg-transparent py-3 px-2 w-full placeholder:text-text/25">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e)}
              />
              <img
                src={image}
                alt="image"
                height={100}
                width={100}
                draggable={false}
                onDragStart={() => { }}
                className="rounded-lg z-[-1]"
              />
            </label>
            <button className="hover:bg-primary/5 p-2 rounded-md w-full">
              Submit
            </button>
          </form>
          <button
            className="absolute top-5 right-5 h-6 w-6 cursor-pointer"
            onClick={() => handleClick("close")}
          >
            &#10005;
          </button>
        </div>
      </dialog>
    </>
  );
}
