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
      <div className="rounded-lg border-[1px] border-white/10 flex justify-evenly items-center gap-10 px-10 w-max-full">
        <div className="flex justify-center items-center text-center">
          <h1 className="text-6xl font-bold w-60">
            {activePage == "login" ? "Login" : "Sign Up"}
          </h1>
        </div>
        <div className=" flex flex-col justify-center items-center gap-5 p-10 w-[500px]">
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

  return (
    <>
      <div class="w-full h-full flex justify-center items-center px-4 sm:px-20 lg:px-0">
        <div class="relative min-h-[350px] px-3 lg:px-14 py-7 bg-white/[0.03] border border-white/[0.15] rounded-xl flex flex-col lg:flex-row justify-between items-center w-full lg:w-auto gap-10 lg:gap-40">
          <div class="flex flex-col items-center gap-3 lg:gap-8 w-40">
            <img
              src="assets/logo_nobg.png"
              alt=""
              class="rounded-xl w-24 lg:w-32"
            />
            <p class="text-3xl lg:text-5xl font-extrabold" id="authTxt">
              Signup
            </p>
            <a href="mailto:exun@dpsrkp.net" class="text-sm">
              Need Help?
            </a>
          </div>

          <div class="h-[294px] flex-1 flex flex-col justify-between items-center gap-8 w-full lg:w-96">
            <div
              class="flex flex-col gap-5 w-full transition duration-300 relative translate-x-0"
              id="inputList"
            >
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                class="w-full bg-[var(--background)] px-3 py-2 border border-white/[0.35] focus:border-white/[0.5] outline-none rounded-lg placeholder:text-white/[0.5] text-sm transition duration-300 opacity-1 scale-1 input"
              />
              <input
                id="email"
                type="text"
                placeholder="Enter your email"
                class="w-full bg-[var(--background)] px-3 py-2 border border-white/[0.35] focus:border-white/[0.5] outline-none rounded-lg placeholder:text-white/[0.5] text-sm input"
              />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                class="w-full bg-[var(--background)] px-3 py-2 border border-white/[0.35] focus:border-white/[0.5] outline-none rounded-lg placeholder:text-white/[0.5] text-sm input"
              />
              <div class="flex gap-2 w-full items-center justify-start">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    class="absolute opacity-0 cursor-pointer w-0 h-0"
                  />
                  <div class="checkbox__checkmark bg-[var(--background)] border border-white/[0.35]"></div>
                  <div class="text-white/75 text-sm">Stay Signed In</div>
                </label>
              </div>
            </div>

            <div
              id="otpform_container"
              class="hidden w-full h-full flex-col justify-between items-center transition duration-300 gap-3 lg:gap-0"
            >
              <div class="w-full flex flex-col items-center justify-center">
                <h1 class="text-2xl font-bold">Email Verification</h1>
                <p class="text-sm text-center text-white/75">
                  Enter the 6-digit verification code that was sent to your
                  mail.
                </p>
              </div>
              <div id="otp-form">
                <div class="flex items-center justify-center gap-3">
                  <input
                    type="number"
                    class="w-7 h-7 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-center text-lg lg:text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 lg:p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2"
                    maxlength="1"
                  />
                  <input
                    type="number"
                    class="w-7 h-7 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-center text-lg lg:text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 lg:p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2"
                    maxlength="1"
                  />
                  <input
                    type="number"
                    class="w-7 h-7 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-center text-lg lg:text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 lg:p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2"
                    maxlength="1"
                  />
                  <input
                    type="number"
                    class="w-7 h-7 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-center text-lg lg:text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 lg:p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2"
                    maxlength="1"
                  />
                  <input
                    type="number"
                    class="w-7 h-7 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-center text-lg lg:text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 lg:p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2"
                    maxlength="1"
                  />
                  <input
                    type="number"
                    class="w-7 h-7 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-center text-lg lg:text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-1 lg:p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2"
                    maxlength="1"
                  />
                </div>
              </div>
              <div class="text-sm text-slate-500" id="resend_otp">
                Didn't receive code?{" "}
                <a
                  class="font-medium text-indigo-500 hover:text-indigo-600"
                  style={{ cursor: "pointer" }}
                >
                  Resend
                </a>
              </div>
            </div>

            <div class="flex flex-row items-center w-full gap-5">
              <button
                id="signup"
                class="w-full py-[8px] rounded-xl text-sm lg:text-base font-semibold text-white/[0.95] hover:scale-[1.02] transition hover:bg-white/[0.07] signup_button signup_type1"
              >
                <p class="signup_btn-txt">Login</p>
              </button>
              <button
                id="submit"
                class="bg-[var(--primary)] w-full py-[8px] rounded-xl text-sm lg:text-base font-semibold text-white hover:scale-[1.02] transition duration-300"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
