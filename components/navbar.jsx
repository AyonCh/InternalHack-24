export default function Navbar() {
  return (
    <div className="nav fixed bg-background bg-opacity-10 backdrop-blur-[10px] w-[96svw] py-3 px-5 left-[50%] translate-x-[-50%] top-[30px] rounded-lg border-[1px] border-white/10">
      <nav className="flex justify-between">
        <h1>NuxeCorps</h1>
        <div className="flex gap-5">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/login">Login</a>
        </div>
      </nav>
    </div>
  );
}
