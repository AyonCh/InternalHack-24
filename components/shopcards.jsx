"use client";

export default function ShopCards({ data }) {
  const handleClick = (key, state) => {
    let dialog = document.getElementById("dialog_" + key);
    if (state == "open") {
      dialog.showModal();
    } else {
      dialog.close();
    }
  };

  return (
    <div className="flex gap-10 flex-wrap justify-center sm:justify-start">
      {data.map(({ title, description, price, image }, key) => (
        <>
          <div
            className="relative cursor-pointer w-[450px] sm:w-[250px]"
            onClick={() => handleClick(key, "open")}
            key={key}
          >
            <img
              src={image}
              alt="image"
              height={450}
              width={450}
              draggable={false}
              onDragStart={false}
              className="rounded-lg z-[-1] opacity-70"
            />
            <div className="rounded-b-lg bg-background/10 absolute bottom-0 left-0 right-0 px-4 py-3 backdrop-blur-[10px]">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-xl font-bold">{title}</h1>
                  <p className="text-sm text-text/50 w-20 overflow-x-hidden whitespace-nowrap">
                    {description}
                  </p>
                </div>
                <p className="text-text/50">{price}</p>
              </div>
            </div>
          </div>
          <dialog
            id={"dialog_" + key}
            className="w-dvw h-dvh p-5 rounded-lg text-text border border-primary/10 bg-background bg-opacity-10 backdrop:backdrop-blur-xl"
          >
            <div className="w-full h-full flex sm:justify-start justify-center gap-1 sm:gap-10 sm:items-start items-center md:flex-row flex-col md:text-left sm:pr-10">
              <img
                src={image}
                alt="image"
                height={500}
                width={500}
                draggable={false}
                onDragStart={false}
                className="rounded-lg z-[-1]"
              />
              <div className="flex justify-between w-full">
                <div>
                  <h1 className="text-5xl font-bold">{title}</h1>
                  <p className="text-sm text-text/50">{description}</p>
                </div>
                <p className="text-text/50">{price}</p>
              </div>
            </div>
            <button
              className="absolute top-5 right-5 h-6 w-6"
              onClick={() => handleClick(key, "close")}
            >
              &#10005;
            </button>
          </dialog>
        </>
      ))}
    </div>
  );
}
