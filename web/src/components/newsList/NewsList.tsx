import styles from "./newsList.module.css";

import News from "../news/News";
import PaginationBtn from "../pagination/PaginationBtn";
import { TNews } from "@/types";

type NewsListProps = {
  newsList: TNews[];
  pageNumber: number;
};

const NewsList = ({ newsList, pageNumber }: NewsListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {newsList.map((news, idx) => (
          <News key={idx} idx={idx} news={news} />
        ))}
      </div>
      <div className={styles.loadMore}>
        <PaginationBtn pageNumber={pageNumber} />
      </div>
    </div>
  );
};

export default NewsList;
