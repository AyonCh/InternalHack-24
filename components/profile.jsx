export default function Profile({ profileRef, handleClick }) {
  return (
    <dialog
      id="navbar"
      className="w-dvw h-dvh fixed top-[30px] p-5 rounded-lg text-text border border-white/10 bg-background bg-opacity-10 backdrop:backdrop-blur-md"
      ref={profileRef}
    >
      <h1>Hello</h1>
      <button onClick={() => handleClick("close")}>&#10005;</button>
    </dialog>
  );
}
