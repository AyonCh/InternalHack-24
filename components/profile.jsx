import { useToast } from "./ui/use-toast";
import { useRef, useState } from "react";
import axios from "axios";
import CartCards from "./cartcards";

export default function Profile({ profileRef, handleClick, session }) {
  const { toast } = useToast();
  const cartRef = useRef(null);
  const [data, setData] = useState([]);

  const handleLogoutClick = async () => {
    let res = (
      await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/user/logout`)
    ).data;
    toast({ description: res["message"] });

    handleClick("close");
  };

  const handleCartClick = (state) => {
    if (state == "open") {
      cartRef.current.showModal();
      (async () => {
        let response = (
          await axios.get(
            `${process.env.NEXT_PUBLIC_URI}/api/cart?name=${session["name"]}`,
          )
        ).data;
        setData(response);
      })();
    } else {
      cartRef.current.close();
    }

    handleClick("close");
  };

  return (
    <>
      <dialog
        className="w-dvw h-dvh p-5 rounded-lg text-text border border-primary/10 bg-background bg-opacity-10 backdrop:backdrop-blur-xl"
        ref={profileRef}
      >
        <div className="w-full h-full flex justify-center gap-1 sm:gap-10 items-center md:flex-row flex-col text-center md:text-left">
          <img src={session["pfp"]} alt="alt" width={300} height={300} />
          <div className="flex flex-col gap-2 md:items-start items-center">
            <div className="flex flex-col md:items-start gap-1">
              <h1 className="text-4xl md:text-5xl font-bold">
                {session["name"]}
              </h1>
              <p className="text-text/50">{session["email"]}</p>
            </div>
            <div className="flex gap-2">
              <button
                className=" rounded-lg py-2 px-6 hover:bg-primary/10 bg-primary/5 w-40"
                onClick={() => handleCartClick("open")}
              >
                Cart
              </button>
              <button
                className=" rounded-lg py-2 px-6 hover:bg-primary/10 bg-primary/5 w-40"
                onClick={() => handleLogoutClick()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <button
          className="absolute top-5 right-5 h-6 w-6 cursor-pointer"
          onClick={() => handleClick("close")}
          autoFocus="autofocus"
        >
          &#10005;
        </button>
      </dialog>
      <dialog
        className="w-dvw h-dvh p-5 rounded-lg text-text border border-primary/10 bg-background bg-opacity-10 backdrop:backdrop-blur-xl z-10"
        ref={cartRef}
      >
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-4xl md:text-5xl font-bold">Cart</h1>
          {data.length ? (
            <CartCards data={data} session={session} />
          ) : (
            <h1 className="sm:text-[20px] text-[15px] opacity-75">
              Nothing added to cart yet
            </h1>
          )}
        </div>
        <button
          className="absolute top-5 right-5 h-6 w-6 cursor-pointer"
          onClick={() => handleCartClick("close")}
          autoFocus="autofocus"
        >
          &#10005;
        </button>
      </dialog>
    </>
  );
}
