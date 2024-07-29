"use client";

import axios from "axios";
import { useState } from "react";

export default function About() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      let signUpRes = (
        await axios.post(`${process.env.NEXT_PUBLIC_URI}/api/user/register`, {
          name,
          email,
          password,
        })
      ).data;

      if (signUpRes["error"]) {
        alert(signUpRes["error"]);
        return;
      }

      alert(signUpRes["message"]);
    }

    let loginRes = (
      await axios.post(`${process.env.NEXT_PUBLIC_URI}/api/user/login`, {
        name,
        password,
      })
    ).data;

    if (loginRes["error"]) {
      alert(loginRes["error"]);
      return;
    }

    alert(loginRes["message"]);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-lg border-[1px] border-primary/10 flex justify-evenly items-center lg:gap-10 sm:px-10 pt-5 max-w-full flex-wrap lg:flex-nowrap">
        <div className="flex justify-center items-center text-center">
          <h1 className="text-6xl font-bold w-60">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 p-10 w-full sm:w-[500px]">
          <div className="flex gap-1 rounded-md p-1 w-full bg-primary/5">
            <button
              className={`hover:bg-primary/5 p-1 rounded-sm w-full ${!isLogin ? "bg-primary/5" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
            <button
              className={`hover:bg-primary/5 p-1 rounded-sm w-full ${isLogin ? "bg-primary/5" : ""}`}
              onClick={() => setIsLogin(true)}
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
              className="border-[1px] border-primary/5 rounded-md bg-transparent p-2 outline-none w-full placeholder:text-text/25"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!isLogin && (
              <input
                type="email"
                placeholder="Email"
                className="border-[1px] border-primary/5 rounded-md bg-transparent p-2 outline-none w-full placeholder:text-text/25"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] border-primary/5 rounded-md bg-transparent p-2 outline-none w-full placeholder:text-text/25"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="hover:bg-primary/5 p-2 rounded-md w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
