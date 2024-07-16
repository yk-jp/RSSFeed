import Image from "next/image";

import styles from "./articleList.module.css";

import Article from "../article/Article";

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

const ArticleList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        {images.map((imgSrc, index) => (
          <div key={index} className={styles.wrapper}>
            <Image
              src={imgSrc}
              // layout="responsive"
              alt="err"
              fill={true}
              objectFit="cover"
            />
            <div className={styles.articleInfo}>
              <h2 className={styles.title}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <p className={styles.outline}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset shee
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <Article /> */}
    </div>
  );
};

export default ArticleList;
