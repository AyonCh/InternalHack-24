"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Profile from "./profile";

export default function Navbar() {
  const profileRef = useRef(null);
  const [session, setSession] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    (async () => {
      let res = (
        await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/user/auth`)
      ).data;
      setSession(res);

      let user = (
        await axios.get(
          `${process.env.NEXT_PUBLIC_URI}/api/user?name=${res["name"]}`,
        )
      ).data;

      setIsAdmin(user["admin"]);
    })();

    // setInterval(async () => {
    //   let res = (
    //     await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/user/auth`)
    //   ).data;
    //
    //   setSession(res);
    // }, 5000);
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
      <div className="z-10 fixed bg-background bg-opacity-10 backdrop-blur-[10px] w-[92dvw] sm:w-[96dvw] py-3 px-5 left-[50%] translate-x-[-50%] top-[30px] rounded-lg border border-primary/10">
        <nav className="flex justify-between">
          <h1>NuxeCorps</h1>
          <div className="sm:flex hidden gap-5">
            <a href="/#home">Home</a>
            <a href="/#about">About</a>
            <a href="/shop">Shop</a>
            {isAdmin && <a href="/dashboard">Dasboard</a>}
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
        </nav>
      </div>
      <div className="z-10 sm:hidden fixed bg-background bg-opacity-10 backdrop-blur-[10px] w-[92dvw] sm:w-[96dvw] py-3 px-5 left-[50%] translate-x-[-50%] bottom-[30px] rounded-lg border border-primary/10">
        <div className="flex justify-between">
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/shop">Shop</a>
          {isAdmin && <a href="/dashboard">dashboard</a>}
        </div>
      </div>
      <Profile
        profileRef={profileRef}
        handleClick={handleProfileClick}
        session={session}
      />
    </>
  );
}
