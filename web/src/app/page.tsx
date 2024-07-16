import styles from "./page.module.css";

import ArticleList from "@/components/articleList/ArticleList";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <ArticleList />
    </main>
  );
}
