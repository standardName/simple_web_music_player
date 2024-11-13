import styles from "../../styles/Player.module.css";
import AddFavorite from "./AddFavorite";
import Random from "./Random";
import Repeat from "./Repeat";
import Volume from "./Volume";
function Playback() {
  return (
    <div className={styles.playback}>
      <AddFavorite />
      <Random />
      <Repeat />
      <Volume />
    </div>
  );
}

export default Playback;
