"use client";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="pt-[150px] flex justify-start flex-col grid-lattice"
      >
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center text-center items-center max-w-[900px] gap-5">
            <div>
              <h1 className="text-[60px] sm:text-[100px] font-bold title glow">
                NuxeCorps
              </h1>
              <p className="sm:text-[20px] text-[15px] opacity-75">
                At NuxeCorps, we are dedicated to pioneering solutions for major
                illnesses. We have helped over 100,000+ children by supporting
                them in their fight against illness through innovation and
                creativity. Our commitment is to use advanced technology and to
                provide children the care they deserve as humanities future to
                make a real difference in the lives of those who need it most.{" "}
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
      <div id="about" className="py-[100px] flex justify-center items-center">
        <div className="relative flex flex-col justify-center text-center items-center">
          <h1 className="text-[40px] sm:text-[60px] font-bold title">About</h1>
          <div className="flex justify-center gap-20 max-w-[800px]">
            <img
              src="/robot_hand.png"
              alt="about"
              height={400}
              width={400}
              className="hidden sm:block absolute top-[-20%] left-[-15%] opacity-50 "
            />
            <img
              src="/robot_hand.png"
              alt="about"
              height={150}
              width={150}
              className="hidden sm:block opacity-0"
            />
            <p className="sm:text-[20px] text-[15px] opacity-75">
              NuxeCorps is a multinational company committed to the betterment
              of the medical industry. Not only do our executives have personal
              experience with the topic including our CEO.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
