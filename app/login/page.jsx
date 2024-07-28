"use client";

import { useState } from "react";

export default function About() {
  const [activePage, setActivePage] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-lg border-[1px] border-white/10 flex justify-evenly items-center lg:gap-10 sm:px-10 pt-5 max-w-full flex-wrap lg:flex-nowrap">
        <div className="flex justify-center items-center text-center">
          <h1 className="text-6xl font-bold w-60">
            {activePage == "login" ? "Login" : "Sign Up"}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 p-10 w-full sm:w-[500px]">
          <div className="flex gap-1 rounded-md p-1 w-full bg-white/5">
            <button
              className={`hover:bg-white/5 p-1 rounded-sm w-full ${activePage == "signup" ? "bg-white/5" : ""}`}
              onClick={() => setActivePage("signup")}
            >
              Sign Up
            </button>
            <button
              className={`hover:bg-white/5 p-1 rounded-sm w-full ${activePage == "login" ? "bg-white/5" : ""}`}
              onClick={() => setActivePage("login")}
            >
              Login
            </button>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-5 w-full"
          >
            <input
              type="text"
              placeholder="Name"
              className="border-[1px] border-white/5 rounded-md bg-transparent p-2 outline-none w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {activePage == "signup" ? (
              <input
                type="email"
                placeholder="Email"
                className="border-[1px] border-white/5 rounded-md bg-transparent p-2 outline-none w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              ""
            )}
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] border-white/5 rounded-md bg-transparent p-2 outline-none w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="hover:bg-white/5 p-2 rounded-md w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
