import Link from "next/link";
import { StaticImageData } from "next/image";

import styles from "./article.module.css";

type Props = {
  idx: number;
  news: {
    title: string;
    image: StaticImageData;
    link: string;
  };
};

const Article = ({ idx, news }: Props) => {
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
