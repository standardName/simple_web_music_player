import styles from "../../styles/Header.module.css";
import { GrFavorite } from "react-icons/gr";
import { PiGearSixThin } from "react-icons/pi";
import Link from "next/link";
import { auth } from "@/lib/auth";
import SignIn from "./SignIn";
async function UserControl() {
  const session = await auth();
  return (
    <div className={styles["user-control"]}>
      <div className={styles["user-info"]}>
        <SignIn session={session} />
        <div className={styles["user-desc"]}>
          {!session && (
            <>
              <Link href="/api/auth/signin"></Link>
            </>
          )}

          {session && (
            <>
              <h2 className={styles["user-name"]}>{session?.user?.name}</h2>
              <span className={styles["user-status"]}>premium</span>
            </>
          )}
        </div>
      </div>
      <div className={styles.btns}>
        <Link href="/favorite">
          {" "}
          <button>
            <GrFavorite />
          </button>
        </Link>

        <button>
          <PiGearSixThin />
        </button>
      </div>
    </div>
  );
}

export default UserControl;
