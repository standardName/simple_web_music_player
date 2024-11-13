import { create } from "zustand";
import { createRef, RefObject } from "react";
import { Track } from "../types/index";

interface PlayerStore {
  favorites: Track[];
  setFavorites: (newState: Track) => void;
  deleteFavorite: (newState: Track) => void;
  play: boolean;
  duration: number;
  trackPos: string;
  setDuration: (newState: number) => void;
  currentTime: number;
  random: boolean;
  setRandom: (newState: boolean) => void;
  repeat: boolean;
  setRepeat: (newState: boolean) => void;
  setCurrentTime: (newState: number) => void;
  progressBar: number;
  setProgressBar: (newState: number) => void;
  audioRef: RefObject<HTMLAudioElement>;
  progressRef: RefObject<HTMLDivElement>;
  trackIndex: number;
  setTrackIndex: (newState: number) => void;
  setPlay: (newState: boolean) => void;
  data: Track[] | null;
  setData: (newState: Track[]) => void;
  currentTrack: Track | null;
  setCurrentTrack: (newState: Track) => void;
  mobMenu: boolean;
  setShowMenu: (newState: boolean) => void;
  genre: string;
  setGenre: (newState: string) => void;
}
const playerStore = create<PlayerStore>((set, get) => ({
  favorites: [],
  setFavorites: (newTrack: Track) =>
    set((state) => ({ favorites: [...state.favorites, newTrack] })),

  deleteFavorite: (track: Track) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item !== track),
    })),
  genre: "Pop",
  setGenre: (newState) => set({ genre: newState }),
  play: false,
  duration: 0,
  trackPos: "",
  setDuration: (newState) => set({ duration: newState }),
  progressBar: 0,
  setProgressBar: (newState) => set({ progressBar: newState }),
  audioRef: createRef(),
  progressRef: createRef(),
  trackIndex: 0,
  random: false,
  setRandom: (newState) => set({ random: newState }),
  mobMenu: false,
  setShowMenu: (newState) => set({ mobMenu: newState }),
  repeat: false,
  setRepeat: (newState) => set({ repeat: newState }),
  setTrackIndex: (newState) => set({ trackIndex: newState }),
  setPlay: (newState) => {
    set({ play: newState });
    const { audioRef } = get();
    if (audioRef.current) {
      if (newState) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  },
  data: [],
  setData: (newState) => set({ data: newState }),
  currentTrack: null,
  setCurrentTrack: (newState: Track) => set({ currentTrack: newState }),
  currentTime: 0,
  setCurrentTime: (newState) => set({ currentTime: newState }),
}));

export { playerStore };
