"use client";

import { useRef } from "react";

export default function Navbar() {
  const navbarRef = useRef(null);
  const handleHamburgerClick = (state) => {
    if (state == "open") {
      navbarRef.current.showModal();
    } else {
      navbarRef.current.close();
    }
  };

  return (
    <>
      <div className="nav fixed bg-background bg-opacity-10 backdrop-blur-[10px] w-[92dvw] sm:w-[96dvw] py-3 px-5 left-[50%] translate-x-[-50%] top-[30px] rounded-lg border-[1px] border-primary/10">
        <nav className="flex justify-between">
          <h1>NuxeCorps</h1>
          <div className="sm:flex hidden gap-5">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/shop">Shop</a>
            <a href="/login">Login</a>
          </div>
          <div className="flex sm:hidden gap-5">
            <button onClick={() => handleHamburgerClick("open")}>
              &#9776;
            </button>
          </div>
        </nav>
      </div>
      <dialog
        id="navbar"
        className="w-dvw h-dvh fixed top-[30px] p-5 rounded-lg text-text border border-white/10 bg-background bg-opacity-10 backdrop:backdrop-blur-md"
        ref={navbarRef}
      >
        <div className="flex flex-col gap-5">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/login">Login</a>
        </div>
        <button
          onClick={() => handleHamburgerClick("close")}
          className="absolute right-5 top-5"
        >
          &#10005;
        </button>
      </dialog>
    </>
  );
}
