import styles from "./header.module.css";

const Header = () => {
  return (
    <header
      className={`${styles.sticky} ${styles.bg} ${styles.vw100} ${styles.container}`}
    >
      <div className={`${styles.w80} ${styles.p1}`}>
        <p className={`${styles.thick}`}>RSS Feed</p>
      </div>
    </header>
  );
};

export default Header;
