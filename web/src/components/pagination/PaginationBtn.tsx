"use client";

import { useRouter } from "next/navigation";

import styles from "./paginationBtn.module.css";

type PaginationBtnProps = {
  pageNumber: number;
};

const PaginationBtn = ({ pageNumber }: PaginationBtnProps) => {
  const router = useRouter();

  const clickPrev = () => {
    router.push(`/news/${pageNumber - 1}`);
  };

  const clickNext = () => {
    router.push(`/news/${pageNumber + 1}`);
  };

  return (
    <div className={styles.container}>
      <button onClick={clickPrev} disabled={pageNumber === 0}>
        Prev
      </button>
      <button onClick={clickNext}>Next</button>
    </div>
  );
};

export default PaginationBtn;
