export default function Home() {
  return (
    <h1 className="pt-[100px]">
      Hello World
      <dialog className="w-[60vw] h-[60vh] p-5 rounded-xl text-base font-semibold text-white/[0.95] border border-white/[0.15] bg-[var(--background)] backdrop:backdrop-blur-sm">
        <div className="flex flex-col gap-5">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/login">Login</a>
        </div>
      </dialog>
    </h1>
  );
}
