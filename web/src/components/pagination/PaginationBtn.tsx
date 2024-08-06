"use client";

import { useRouter } from "next/navigation";

import styles from "./paginationBtn.module.css";
import { TNews } from "@/types";

type PaginationBtnProps = {
  pageNumber: number;
  totalCount: number;
  offset: number;
  limit: number;
  newsList: TNews[];
};

const PaginationBtn = ({
  pageNumber,
  totalCount,
  offset,
  limit,
  newsList,
}: PaginationBtnProps) => {
  const router = useRouter();

  const clickPrev = () => {
    router.push(`/news/${pageNumber - 1}`);
  };

  const clickNext = () => {
    router.push(`/news/${pageNumber + 1}`);
  };

  return (
    <div className={styles.container}>
      <button onClick={clickPrev} disabled={pageNumber === 1}>
        Prev
      </button>
      <button
        onClick={clickNext}
        disabled={newsList.length < limit || offset + limit >= totalCount}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationBtn;
