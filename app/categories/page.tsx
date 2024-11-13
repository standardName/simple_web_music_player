import styles from "@/app/categories/categoriesPage.module.css";
import Image from "next/image";

const genres = [
  { name: "Rock", img: "/genres/rock.webp" },
  { name: "Pop", img: "/genres/pop.webp" },
  { name: "Jazz", img: "/genres/jazz.webp" },
  { name: "Alternative", img: "/genres/alternative.webp" },
  { name: "Electronic", img: "/genres/electronic.webp" },
  { name: "Classical", img: "/genres/classical.webp" },
  { name: "Blues", img: "/genres/blues.webp" },
  { name: "Reggae", img: "/genres/reggae.webp" },
  { name: "Country", img: "/genres/country.webp" },
  { name: "Soul", img: "/genres/soul.webp" },
  { name: "R&B", img: "/genres/rnb.webp" },
  { name: "Funk", img: "/genres/funk.jpg" },
  { name: "Metal", img: "/genres/metal.webp" },
  { name: "Punk", img: "/genres/punk.webp" },
  { name: "Folk", img: "/genres/folk.jpg" },
  { name: "Disco", img: "/genres/disco.webp" },
  { name: "House", img: "/genres/house.webp" },
  { name: "Techno", img: "/genres/techno.jpg" },
  { name: "Trap", img: "/genres/trap.webp" },
  { name: "Dubstep", img: "/genres/dubstep.webp" },
];

function page() {
  return (
    <div className={styles.container}>
      {genres.map((item, i) => (
        <div key={i} className={styles.genre}>
          <Image width={100} height={100} src={item.img} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default page;
