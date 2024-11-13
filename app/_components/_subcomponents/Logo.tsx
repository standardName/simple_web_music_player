import styles from "../../styles/Logo.module.css";
import Audio from "./Audio";
import getmusic from "@/lib/api";
import MobileMenu from "./MobileMenu";
async function Logo() {
  const data = await getmusic();
  return (
    <div className={styles.logo}>
      <Audio data={data} />
      <MobileMenu />
      <h2 className={styles["logo-title"]}>RhytmoTune</h2>
    </div>
  );
}

export default Logo;
