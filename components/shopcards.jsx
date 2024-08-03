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
    <div className="flex gap-10">
      {data.map(({ title, description, image }, key) => (
        <>
          <div
            className="relative cursor-pointer w-[250px]"
            onClick={() => handleClick(key, "open")}
          >
            <img
              src={image}
              alt="image"
              height={250}
              width={250}
              draggable={false}
              onDragStart={false}
              className="rounded-lg z-[-1]"
            />
            <div className="rounded-b-lg bg-background/20 absolute bottom-0 left-0 w-[250px] px-4 py-3 backdrop-blur-[10px]">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-sm text-text/50">{description}</p>
            </div>
          </div>
          <dialog
            id={"dialog_" + key}
            className="w-dvw h-dvh p-5 rounded-lg text-text border border-primary/10 bg-background bg-opacity-10 backdrop:backdrop-blur-xl"
          >
            <div className="flex items-start justify-start gap-10">
              <img
                src={image}
                alt="image"
                height={500}
                width={500}
                draggable={false}
                onDragStart={false}
                className="rounded-lg z-[-1]"
              />
              <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="text-text/50">{description}</p>
              </div>
            </div>
            <button
              className="absolute top-5 right-5"
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
