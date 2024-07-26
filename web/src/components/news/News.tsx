import Link from "next/link";

import styles from "./news.module.css";
import { TNews } from "@/types";

type NewsProps = {
  idx: number;
  news: TNews;
};

const News = ({ idx, news }: NewsProps) => {
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
          backgroundImage: `url(${news.image})`,
        }}
      >
        <h5 className={styles.newsTitle}>{news.title}</h5>
      </div>
    </Link>
  );
};

export default News;
