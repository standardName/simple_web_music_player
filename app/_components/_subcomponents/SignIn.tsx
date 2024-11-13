"use client";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { signIn } from "next-auth/react";
import { Session } from "next-auth";
const SignIn = ({ session }: { session: Session | null }) => {
  function handleAuth() {
    if (!session) {
      signIn();
    }
  }
  return (
    <div className={styles["user-img"]} onClick={handleAuth}>
      <Image
        width={35}
        height={35}
        src={session?.user?.image || "/vercel.svg"}
        alt="user-img"
      />
    </div>
  );
};

export default SignIn;
