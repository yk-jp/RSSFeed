import Image from "next/image";

import styles from "./article.module.css";

import birdImg from "@/components/assets/dummy/bird.jpg";
import boatImg from "@/components/assets/dummy/boat.jpg";
import bokehImg from "@/components/assets/dummy/bokeh.jpg";
import moonImg from "@/components/assets/dummy/full-moon.jpg";
import girlImg from "@/components/assets/dummy/girl.png";
import githubImg from "@/components/assets/dummy/github.jpeg";
import lakeImg from "@/components/assets/dummy/lake.jpg";
import lizardImg from "@/components/assets/dummy/lizard.jpg";
import seaImg from "@/components/assets/dummy/sea.jpg";

const images = [
  birdImg,
  boatImg,
  bokehImg,
  moonImg,
  girlImg,
  githubImg,
  lakeImg,
  lizardImg,
  seaImg,
  moonImg,
  githubImg,
  girlImg,
  githubImg,
  bokehImg,
  boatImg,
  bokehImg,
  lizardImg,
  seaImg,
];

const Article = () => {
  return (
    <div className={styles.container}>
      {images.map((imgSrc, index) => (
        <div key={index} className={styles.wrapper}>
          <Image src={imgSrc} alt="err" fill objectFit="cover" />
        </div>
      ))}
    </div>
  );
};

export default Article;
