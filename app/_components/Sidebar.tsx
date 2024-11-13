import styles from "../styles/Sidebar.module.css";
import Logo from "./_subcomponents/Logo";
import Navigation from "./_subcomponents/Navigation";
import NavPlaylists from "./_subcomponents/NavPlaylists";
import SignOut from "./_subcomponents/SignOut";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Navigation />
      <NavPlaylists />
      <div className={styles["logout-title"]}>
        <SignOut />
      </div>
    </div>
  );
}

export default Sidebar;
