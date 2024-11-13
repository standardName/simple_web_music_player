interface Track {
  artist: string;
  artist_img: string;
  cover: string;
  created_at: string;
  id: number;
  track_link: string;
  track_name: string;
  duration: number;
  genre: string;
}

interface MusicContextType {
  data: Track[];
  play: boolean;
  setPlay: React.Dispatch<React.SetStateAction<boolean>>;
  currentTrack: Track | null;
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track | null>>;
  audioRef: React.RefObject<HTMLAudioElement>;
  handleSetTrack: (id: number) => void;
  setTrackPos: (action: string) => void;
  trackIndex: number;
}

interface ContentProps {
  data: Track[];
}

export type { Track, ContentProps, MusicContextType };
