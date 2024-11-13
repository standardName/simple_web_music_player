"use client";
import styles from "@/app/styles/CategoriesList.module.css";
import { useRef } from "react";
import ScrollSection from "./_subcomponents/ScrollSection";
import { playerStore } from "@/lib/store";
const genres = [
  "Pop",
  "Rock",
  "Jazz",
  "Alternative",
  "Electronic",
  "Classical",
  "Blues",
  "Reggae",
  "Country",
  "Soul",
  "R&B",
  "Funk",
  "Metal",
  "Punk",
  "Folk",
  "Disco",
  "House",
  "Techno",
  "Trap",
  "Dubstep",
];

function CategoriesList() {
  const listRef = useRef<HTMLUListElement>(null);
  const setGenre = (newState: string) =>
    playerStore.getState().setGenre(newState);
  const genre = playerStore((state) => state.genre);

  return (
    <div>
      <ScrollSection ref={listRef} title="Select Categories" />
      <ul className={styles["categories-list"]} ref={listRef}>
        {genres.map((item, i) => (
          <li key={i}>
            <button
              className={
                genre.toLowerCase() === item.toLowerCase() ? styles.active : ""
              }
              onClick={() => setGenre(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
