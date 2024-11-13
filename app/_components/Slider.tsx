"use client";
import { useEffect, useState } from "react";
import styles from "../styles/Slider.module.css";
import { useStore } from "zustand";
import { playerStore } from "@/lib/store";
import { Track } from "@/types";
import { IoPlayOutline } from "react-icons/io5";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const Slider = () => {
  const { data, setCurrentTrack, setPlay, audioRef } = useStore(playerStore);
  const [sliderData, setSliderData] = useState(data?.slice(0, 5));
  useEffect(() => {
    if (data?.length) {
      setSliderData(data?.slice(0, 5));
    }
  }, [data]);
  // const [active, setActive] = useState(2);
  function setTrack(track: Track) {
    if (audioRef.current) {
      setCurrentTrack(track);
      audioRef.current.load();
      audioRef.current.play();
      setPlay(true);
    }
  }

  function handeleNextSlide() {
    if (sliderData) {
      const updatedSliderData = [
        sliderData[sliderData.length - 1],
        ...sliderData.slice(0, -1),
      ];
      setSliderData(updatedSliderData);
    }
  }

  function handlePrevSlide() {
    if (sliderData) {
      const updateSliderData = [
        ...sliderData.slice(1, sliderData.length),
        sliderData[0],
      ];
      setSliderData(updateSliderData);
    }
  }

  if (!sliderData) {
    return <div>Not found</div>;
  }

  return (
    <div className={styles.slider}>
      {sliderData?.map((item, i) => {
        const className =
          i === Math.floor(sliderData.length / 2)
            ? styles.activeSlide
            : i === Math.floor(sliderData.length / 2) + 1
            ? styles.center
            : i === Math.floor(sliderData.length / 2) - 1
            ? styles.center
            : styles.slide;

        return (
          <div
            key={item?.id}
            style={{
              borderTopLeftRadius: 2 > i ? "20px" : "0",
              borderBottomLeftRadius: 2 > i ? "20px" : "0",
              borderTopRightRadius: 2 < i ? "20px" : "0",
              borderBottomRightRadius: 2 < i ? "20px" : "0",
              borderLeft: 2 > i ? "none" : "0",
              borderRight: 2 < i ? "none" : "0",
            }}
            className={className}
          >
            <Image
              fill
              src={item?.cover}
              alt="slide"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
            <div className={styles.action}>
              <div>
                <h3>{item.track_name}</h3> <p>{item.artist}</p>
              </div>
              <button onClick={() => setTrack(item)}>
                <IoPlayOutline />
              </button>
            </div>
          </div>
        );
      })}

      <div className={styles.btns}>
        <button onClick={handeleNextSlide}>
          <GrPrevious />
        </button>
        <button onClick={handlePrevSlide}>
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Slider;
