import NewsList from "@/components/newsList/NewsList";
import Header from "@/components/header/Header";
import { getNewsList } from "@/api/news";

import styles from "./page.module.css";

type pageProps = {
  params: { page: string | undefined };
};

const NEWS_PER_PAGE = 10;

export default async function Home({ params: { page } }: pageProps) {
  const offset: number = parseInt(page || "0");
  const [newsList, error] = await getNewsList({
    limit: NEWS_PER_PAGE,
    offset: offset,
  });

  if (error) {
    console.log(error);
    throw error;
  }

  return (
    <main>
      <Header />
      <NewsList newsList={newsList} />
    </main>
  );
}
