"use client";
import styles from "../../../app/styles/Sidebar.module.css";
import { signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";

const SignOut = () => {
  return (
    <>
      <button className={styles.logout} type="button" onClick={() => signOut()}>
        <IoLogOutOutline className={styles["logout-icon"]} />
        Logout
      </button>
    </>
  );
};

export default SignOut;
