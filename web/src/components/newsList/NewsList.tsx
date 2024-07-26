import styles from "./newsList.module.css";

import News from "../news/News";
import { TNews } from "@/types";

type NewsListProps = {
  newsList: TNews[];
};

const NewsList = ({ newsList }: NewsListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {newsList.map((news, idx) => (
          <News key={idx} idx={idx} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
