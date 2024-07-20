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
      <div className={styles.gridContainer}>
        {images.map((imgSrc, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${imgSrc.src})`,
            }}
            className={`${styles.wrapper} ${
              index === 0 ? styles.newsTall : index === 1 ? styles.newsWide : ""
            }`}
          >
            <h5 className={styles.newsTitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
