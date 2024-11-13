"use client";
import styles from "../../styles/Navigation.module.css";
import { RiHomeLine } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { playerStore } from "@/lib/store";
import Link from "next/link";
const navlist = [
  { name: "Home", link: "/", icon: <RiHomeLine /> },
  { name: "Category", link: "/categories", icon: <HiOutlineSquares2X2 /> },
  { name: "Artists", link: "/artists", icon: <AiOutlineUser /> },
];
function Navigation() {
  const pathname = usePathname();
  const mobMenu = playerStore((state) => state.mobMenu);
  return (
    <nav className={mobMenu ? styles["active-nav"] : styles.nav}>
      <ul className={styles["nav-list"]}>
        {navlist.map((item, i) => (
          <li className={styles["list-item"]} key={i}>
            <Link
              href={item.link}
              className={`${styles["list-item-link"]} ${
                pathname === item.link ? styles["active"] : ""
              }`}
            >
              <span className={styles["nav-item-icon"]}>{item.icon}</span>
              <span className={styles["nav-item-name"]}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
