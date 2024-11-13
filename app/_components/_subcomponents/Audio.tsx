"use client";
import { playerStore } from "@/lib/store";
import { Track } from "@/types";
import { useEffect } from "react";
import { useStore } from "zustand";
interface AudioProps {
  data: Track[] | null;
}
function Audio({ data }: AudioProps) {
  const {
    setDuration,
    audioRef,
    progressRef,
    currentTrack,
    setData,
    setCurrentTrack,
    setCurrentTime,
    random,
    repeat,
  } = useStore(playerStore);

  useEffect(() => {
    if (data) {
      setData(data);
      setCurrentTrack(data[0]);
    }
  }, [data, setData, setCurrentTrack]);
  const handleAudioMetaData = () => {
    if (progressRef.current && audioRef.current) {
      const duration = audioRef.current.duration;
      setDuration(duration);
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  function handleOnEndedAudio() {
    if (data && audioRef.current) {
      if (random) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentTrack(data[randomIndex]);
      } else if (repeat) {
        audioRef.current.loop = true;
      } else {
        const index = data.findIndex((item) => item.id === currentTrack?.id);
        setCurrentTrack(data[index + 1]);
      }
      audioRef.current.load();
      audioRef.current.play();
    }
  }

  if (!currentTrack) {
    return;
  }
  return (
    <div
      className="audio-player"
      style={{ visibility: "hidden", width: 0, height: 0 }}
    >
      {currentTrack.track_link && audioRef && (
        <audio
          controls
          ref={audioRef}
          onLoadedMetadata={handleAudioMetaData}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleOnEndedAudio}
        >
          <source src={currentTrack?.track_link} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default Audio;
