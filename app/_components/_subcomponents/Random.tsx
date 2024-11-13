"use client";
import { playerStore } from "@/lib/store";
import { LiaRandomSolid } from "react-icons/lia";
function Random() {
  const random = playerStore((state) => state.random);
  const setRandom = (state: boolean) => playerStore.getState().setRandom(state);
  const setRepeat = (state: boolean) => playerStore.getState().setRepeat(state);
  function handleRandom() {
    setRandom(!random);
    setRepeat(false);
  }
  return (
    <>
      <button
        onClick={handleRandom}
        style={random ? { color: "red" } : { color: "#fff" }}
      >
        <LiaRandomSolid />
      </button>
    </>
  );
}

export default Random;
