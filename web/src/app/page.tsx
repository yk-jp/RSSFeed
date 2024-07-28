import NewsList from "@/components/newsList/NewsList";
import Header from "@/components/header/Header";
import { getNewsList } from "@/api/news";

export default async function Home() {
  const [newsList, error] = await getNewsList();
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
