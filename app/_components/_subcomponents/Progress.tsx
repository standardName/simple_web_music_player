"use client";
import styles from "../../styles/Progress.module.css";
import { playerStore } from "@/lib/store";
import { useEffect, useMemo, useState } from "react";
function Progress({ maxHeight }: { maxHeight: number }) {
  const [isLoading, setIsloading] = useState(false);
  const [count, setCount] = useState(0);
  // const [formattedTime, setFormattedTime] = useState("00:00");
  const currentTime = playerStore((state) => state.currentTime);
  const duration = playerStore((state) => state.duration);
  const progressRef = playerStore((state) => state.progressRef);
  const audioRef = playerStore((state) => state.audioRef);
  const [refWidth, setRefWidth] = useState(0);
  const array = useMemo(
    () =>
      Array.from({ length: Math.floor(refWidth / 4) }, (_, i) => ({
        index: i,
        height: Math.floor(Math.random() * (maxHeight - 5 + 1)) + 5,
      })),
    [maxHeight, refWidth]
  );
  const handleClickBar = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const width = progressRef.current.getBoundingClientRect();
      const pos = e.clientX - width.left;
      const percent = pos / width.width;
      if (progressRef.current && audioRef.current.duration) {
        audioRef.current.currentTime = percent * audioRef.current.duration;
      }
    }
  };
  useEffect(() => {
    setIsloading(true);
    if (progressRef.current) {
      const width = progressRef.current.offsetWidth;
      setRefWidth(width);
    }
    //
    if (duration > 0) {
      setCount(Math.floor((currentTime / duration) * (refWidth / 4)));
    }
    // const minutes = Math.floor(currentTime / 60);
    // const seconds = Math.floor(currentTime % 60);
    // const formattedMinutes = String(minutes).padStart(2, "0");
    // const formattedSeconds = String(seconds).padStart(2, "0");
    // setFormattedTime(`${formattedMinutes}:${formattedSeconds}`);
  }, [currentTime, duration, progressRef, refWidth, audioRef]);

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div onClick={handleClickBar} className={styles.progress} ref={progressRef}>
      {array.map((item, i) => {
        return (
          <span
            key={i}
            className={styles.item}
            style={{
              height: item.height,
              background: count > item.index ? "#ffffff" : "#757576",
            }}
          ></span>
        );
      })}
    </div>
  );
}

export default Progress;
