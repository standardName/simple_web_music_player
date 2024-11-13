"use client";
import styles from "../../styles/NavPlaylists.module.css";
import { PiPlaylist } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
function NavPlaylists() {
  const [isShow, setIsShow] = useState(false);

  const defaultPlaylist = [
    {
      icon: "/globe.svg",
      name: "Vibes",
    },
    {
      icon: "/globe.svg",
      name: "Vibes",
    },
  ];
  return (
    <div className={styles.playlists}>
      <button
        className={styles["playlist-btn"]}
        onClick={() => setIsShow(!isShow)}
      >
        <PiPlaylist className={styles["btn-icon"]} />
        <span className={styles["btn-title"]}>Playlists</span>
        <span className={styles["list-show-icon"]}>
          {!isShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      {isShow && (
        <div className={styles["playlist-container"]}>
          <ul className={styles["playlist-list"]}>
            {defaultPlaylist.map((item, i) => (
              <li className={styles["playlist-item"]} key={i}>
                <Image width={15} height={15} alt={item.name} src={item.icon} />
                <span className={styles["playlist-name"]}>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavPlaylists;
