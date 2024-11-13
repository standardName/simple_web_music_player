import styles from "../styles/Player.module.css";
import PlayerTrackInfo from "./_subcomponents/PlayerTrackInfo";
import AudioControls from "./_subcomponents/AudioControls";
import Progress from "./_subcomponents/Progress";
import Playback from "./_subcomponents/Playback";
function Player() {
  return (
    <div className={styles["player-container"]}>
      <PlayerTrackInfo />
      <AudioControls />
      <Progress maxHeight={20} />
      <Playback />
    </div>
  );
}

export default Player;
