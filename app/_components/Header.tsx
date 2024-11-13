import styles from "../styles/Header.module.css";

import Search from "./_subcomponents/Search";
import UserControl from "./_subcomponents/UserControl";
function Header() {
  return (
    <header className={styles.header}>
      <Search />
      <UserControl />
    </header>
  );
}

export default Header;
