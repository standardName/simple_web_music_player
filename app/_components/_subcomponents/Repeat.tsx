"use client";
import { playerStore } from "@/lib/store";
import { BsRepeat } from "react-icons/bs";
function Repeat() {
  const repeat = playerStore((state) => state.repeat);
  const setRepeat = (state: boolean) => playerStore.getState().setRepeat(state);
  const setRandom = (state: boolean) => playerStore.getState().setRandom(state);
  const handleRepeat = () => {
    setRepeat(!repeat);
    setRandom(false);
  };
  return (
    <button
      onClick={handleRepeat}
      style={repeat ? { color: "red" } : { color: "#fff" }}
    >
      <BsRepeat />
    </button>
  );
}

export default Repeat;
