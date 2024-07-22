import Link from "next/link";

import styles from "./article.module.css";
import { News } from "@/types";

type ArticleProps = {
  idx: number;
  news: News;
};

const Article = ({ idx, news }: ArticleProps) => {
  return (
    <Link
      href={news.link}
      key={idx}
      className={`${styles.wrapper} ${
        idx === 0 ? styles.newsTall : idx === 1 ? styles.newsWide : ""
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
  );
};

export default Article;
