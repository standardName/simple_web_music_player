"use client";
import styles from "../../styles/Player.module.css";
import { playerStore } from "@/lib/store";
import Image from "next/image";

function PlayerTrackInfo() {
  const currentTrack = playerStore((state) => state.currentTrack);
  return (
    <div className={styles["track-info"]}>
      <div className={styles.cover}>
        <Image
          src={currentTrack?.cover || "/vercel.svg"}
          alt={currentTrack?.track_name || "Track name"}
          width={35}
          height={35}
        />
      </div>
      <div className={styles["music-info"]}>
        <h2 className={styles["track-name"]}>{currentTrack?.track_name}</h2>
        <span className={styles["artist-name"]}>{currentTrack?.artist}</span>
      </div>
    </div>
  );
}

export default PlayerTrackInfo;
