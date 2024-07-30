import axios from "axios";

export default function Profile({ profileRef, handleClick, session }) {
  const handleLogoutClick = async () => {
    let res = (
      await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/user/logout`)
    ).data;
    alert(res["message"]);

    handleClick("close");
  };
  return (
    <dialog
      id="navbar"
      className="w-dvw h-dvh fixed top-[30px] p-5 rounded-lg text-text border border-white/10 bg-background bg-opacity-10 backdrop:backdrop-blur-md"
      ref={profileRef}
    >
      <div className="w-full h-full flex justify-center gap-10 items-center">
        <img src={session["pfp"]} alt="alt" width={300} height={300} />
        <div className="flex flex-col gap-2 items-start">
          <div className="flex flex-col items-start gap-1">
            <h1 className="text-5xl font-bold">{session["name"]}</h1>
            <p className="text-text/50">{session["email"]}</p>
          </div>
          <button
            className=" rounded-lg py-2 px-6 hover:bg-primary/10 bg-primary/5"
            onClick={() => handleLogoutClick()}
          >
            Logout
          </button>
        </div>
      </div>
      <button
        className="absolute top-5 right-5"
        onClick={() => handleClick("close")}
      >
        &#10005;
      </button>
    </dialog>
  );
}
