import Link from "next/link";

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

const newsData = [
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: birdImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: boatImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: bokehImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: moonImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: girlImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: githubImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: lakeImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: lizardImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: seaImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: moonImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: githubImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: girlImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: githubImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: bokehImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: boatImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
  {
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    image: bokehImg,
    link: "https://theconversation.com/biden-steps-aside-setting-in-motion-an-unprecedented-period-in-american-politics-235189",
  },
];
const ArticleList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {newsData.map((news, index) => (
          <Link
            href={news.link}
            key={index}
            className={`${styles.wrapper} ${
              index === 0 ? styles.newsTall : index === 1 ? styles.newsWide : ""
            }`}
          >
            <div
              className={styles.imageContainer}
              style={{
                backgroundImage: `url(${news.image.src})`,
              }}
            >
              <h5 className={styles.newsTitle}>{news.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
