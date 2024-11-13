"use client";
import { playerStore } from "@/lib/store";
import { Track } from "@/types";
import { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
function AddFavorite() {
  const [active, setActive] = useState(false);
  const setFavorites = (state: Track) =>
    playerStore.getState().setFavorites(state);
  const deleteFavorite = (state: Track) =>
    playerStore.getState().deleteFavorite(state);
  const favorites = playerStore((state) => state.favorites);
  const currentTrack = playerStore((state) => state.currentTrack);
  useEffect(() => {
    if (favorites && currentTrack) {
      const isFavorite = favorites.some((item) => item.id === currentTrack.id);
      setActive(isFavorite);
    }
  }, [favorites, currentTrack]);

  function handleChangeFavorite() {
    if (active && currentTrack) {
      deleteFavorite(currentTrack);
    } else if (!active && currentTrack) {
      setFavorites(currentTrack);
    }
  }
  return (
    <button onClick={handleChangeFavorite}>
      <MdFavoriteBorder
        style={active ? { color: "red" } : { color: "inherit" }}
      />
    </button>
  );
}

export default AddFavorite;
