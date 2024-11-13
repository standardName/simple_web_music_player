import CategoriesList from "./_components/CategoriesList";
import PopularSongs from "./_components/PopularSongs";
import Slider from "./_components/Slider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Slider />
      <CategoriesList />
      <PopularSongs />
    </div>
  );
}
