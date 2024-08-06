import NewsList from "@/components/newsList/NewsList";
import Header from "@/components/header/Header";
import { getNewsList } from "@/api/news";
import { TNews } from "@/types";

type pageProps = {
  params: { page: string | undefined };
};

const NEWS_PER_PAGE = 10;

export default async function Home({ params: { page } }: pageProps) {
  const pageNumber: number = parseInt(page || "1");
  if (pageNumber <= 0) {
    throw new Error("Invalid page number");
  }
  const offset: number = (pageNumber - 1) * NEWS_PER_PAGE;
  const [data, error] = await getNewsList({
    limit: NEWS_PER_PAGE,
    offset: offset,
  });

  if (error) {
    console.log(error);
    throw error;
  }

  const newsList: TNews[] = data.newsList;
  const totalCount: number = data.totalCount;

  return (
    <main>
      <Header />
      <NewsList
        newsList={newsList}
        pageNumber={pageNumber}
        offset={offset}
        limit={NEWS_PER_PAGE}
        totalCount={totalCount}
      />
    </main>
  );
}
