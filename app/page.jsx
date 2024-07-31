"use client";

export default function Home() {
  return (
    <div className="pt-[200px] flex justify-start flex-col">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center text-center items-center max-w-[700px] gap-5">
          <div>
            <h1 className="text-[60px] sm:text-[100px] font-bold title glow">
              NuxeCorps
            </h1>
            <p className="sm:text-[20px] text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              eos sed? Porro laborum error officia vel dolore, facilis eligendi
              debitis earum voluptatum accusamus est, sunt quos accusantium,
              corrupti autem sapiente.
            </p>
          </div>

          <div className="flex gap-5 links">
            <a href="#about">About</a>
            <a href="/shop">Shop</a>
          </div>
        </div>
        <img
          src="https://api.dicebear.com/9.x/glass/svg?seed=pink&radius=50"
          alt="img"
          width={650}
          height={650}
          className="hidden absolute right-[-100px] top-[-100px] z-[-1] opacity-50 blur-3xl"
        />
      </div>
    </div>
  );
}
