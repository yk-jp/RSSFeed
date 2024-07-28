"use client";

import styles from "./error.module.css";

import Header from "@/components/header/Header";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

type ErrorProps = {
  error: Error;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <FaceFrownIcon className={styles.icon} />
        </div>
        <div className={styles.errorWrapper}>
          <h2 className={styles.error}>{error.message}</h2>
          <h4 className={styles.errorSub}>
            The page you are looking for is facing errors. Go back and try
            refreshing the page.
          </h4>
        </div>
      </div>
    </main>
  );
};

export default Error;
