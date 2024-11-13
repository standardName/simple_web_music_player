"use client";
import styles from "../../styles/Logo.module.css";
import { IoIosMenu } from "react-icons/io";
import { SiNeptune } from "react-icons/si";
import { IoMdClose } from "react-icons/io";
import { playerStore } from "@/lib/store";
const MobileMenu = () => {
  const mobMenu = playerStore((state) => state.mobMenu);
  const setShowMenu = (newState: boolean) =>
    playerStore.getState().setShowMenu(newState);
  return (
    <div>
      <SiNeptune className={styles["logo-icon"]} />{" "}
      {!mobMenu ? (
        <IoIosMenu
          className={styles.menu}
          onClick={() => setShowMenu(!mobMenu)}
        />
      ) : (
        <IoMdClose
          className={styles.menu}
          onClick={() => setShowMenu(!mobMenu)}
        />
      )}
    </div>
  );
};

export default MobileMenu;
