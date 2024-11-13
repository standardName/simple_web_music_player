"use client";
import styles from "../../styles/Player.module.css";
import { playerStore } from "@/lib/store";
import { IoVolumeMediumOutline } from "react-icons/io5";
function Volume() {
  const audioRef = playerStore((state) => state.audioRef);
  const handleChangeVolume = (e: number) => {
    const value = e / 10;

    if (audioRef.current) {
      audioRef.current.volume = value;
    }
  };
  return (
    <>
      <div className={styles["volume-box"]}>
        <button className={styles["volume-btn"]}>
          <IoVolumeMediumOutline />
        </button>{" "}
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          className={styles["range-input"]}
          onChange={(e) => handleChangeVolume(Number(e.target.value))}
        />
      </div>
    </>
  );
}

export default Volume;
