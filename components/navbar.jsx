"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Profile from "./profile";

export default function Navbar() {
  const profileRef = useRef(null);
  const [session, setSession] = useState({});

  useEffect(() => {
    setInterval(async () => {
      let res = (
        await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/user/auth`)
      ).data;

      setSession(res);
    }, 10000);
  }, []);

  const handleProfileClick = (state) => {
    if (state == "open") {
      profileRef.current.showModal();
    } else {
      profileRef.current.close();
    }
  };

  return (
    <>
      <div className="fixed bg-background bg-opacity-10 backdrop-blur-[10px] w-[92dvw] sm:w-[96dvw] py-3 px-5 left-[50%] translate-x-[-50%] top-[30px] rounded-lg border-[1px] border-primary/10">
        <nav className="flex justify-between">
          <h1>NuxeCorps</h1>
          <div className="sm:flex hidden gap-5">
            <a href="/">Home</a>
            <a href="/#about">About</a>
            <a href="/shop">Shop</a>
            {session["name"] ? (
              <button onClick={() => handleProfileClick("open")}>
                <img src={session["pfp"]} alt="avatar" width={25} height={25} />
              </button>
            ) : (
              <a href="/login">Login</a>
            )}
          </div>
          {session["name"] ? (
            <button
              onClick={() => handleProfileClick("open")}
              className="sm:hidden"
            >
              <img src={session["pfp"]} alt="avatar" width={25} height={25} />
            </button>
          ) : (
            <a href="/login" className="sm:hidden">
              Login
            </a>
          )}
          <div className="sm:hidden fixed bg-background bg-opacity-10 backdrop-blur-[10px] w-[92dvw] sm:w-[96dvw] py-3 px-5 left-[50%] translate-x-[-50%] bottom-[-84dvh] rounded-lg border-[1px] border-primary/10">
            <div className="flex justify-between">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/shop">Shop</a>
            </div>
          </div>
        </nav>
      </div>
      <Profile
        profileRef={profileRef}
        handleClick={handleProfileClick}
        session={session}
      />
    </>
  );
}
