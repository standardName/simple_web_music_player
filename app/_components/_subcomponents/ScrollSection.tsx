import styles from "@/app/styles/CategoriesList.module.css";
import { RefObject } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
interface ScrollSectionProps {
  ref: RefObject<HTMLUListElement>;
  title: string;
}
const ScrollSection: React.FC<ScrollSectionProps> = ({ ref, title }) => {
  function scrollListRight() {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  }
  function scrollListLeft() {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className={styles.title}>
      <h4>{title}</h4>
      <div className={styles["categories-btn"]}>
        <button onClick={scrollListLeft}>
          <GrFormPrevious />
        </button>
        <button onClick={scrollListRight}>
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default ScrollSection;
