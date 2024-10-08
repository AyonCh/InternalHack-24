"use client";

import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function About() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();
  const [session, setSession] = useState({});
  const { toast } = useToast();

  useEffect(() => {
    (async () => {
      let res = (
        await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/user/auth`)
      ).data;

      setSession(res);
    })();
  }, []);

  if (session["name"]) {
    router.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (password != repeatPassword) {
        toast({
          description: "Passwords are not matching",
          variant: "destructive",
        });

        return;
      }
      let signUpRes = (
        await axios.post(`${process.env.NEXT_PUBLIC_URI}/api/user/register`, {
          name,
          email,
          password,
        })
      ).data;

      if (signUpRes["error"]) {
        toast({ description: signUpRes["error"], variant: "destructive" });
        return;
      }

      toast({ description: signUpRes["message"] });
      setIsLogin(!isLogin);
    }

    let loginRes = (
      await axios.post(`${process.env.NEXT_PUBLIC_URI}/api/user/login`, {
        name,
        password,
      })
    ).data;

    if (loginRes["error"]) {
      toast({ description: loginRes["error"], variant: "destructive" });
      return;
    }

    toast({ description: loginRes["message"] });
    router.push("/");
  };
  return (
    <div className="pt-[150px] sm:pt-0 flex justify-center items-center">
      <div className="rounded-lg border border-primary/10 flex justify-evenly items-center lg:gap-10 sm:px-10 pt-5 max-w-full flex-wrap lg:flex-nowrap bg-background/20">
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
              className="border border-primary/5 rounded-md bg-transparent p-2 w-full placeholder:text-text/25"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!isLogin && (
              <input
                type="email"
                placeholder="Email"
                className="border border-primary/5 rounded-md bg-transparent p-2 w-full placeholder:text-text/25"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            <input
              type="password"
              placeholder="Password"
              className="border border-primary/5 rounded-md bg-transparent p-2 w-full placeholder:text-text/25"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Re-type Password"
                className="border border-primary/5 rounded-md bg-transparent p-2 w-full placeholder:text-text/25"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            )}
            <button className="hover:bg-primary/5 p-2 rounded-md w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
