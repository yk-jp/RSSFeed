import { TNews, Result, TNewsReqParams } from "@/types";
import { ApiKey } from "@/config";
import newsData from "@/_data/dummy_news.json";

const useDummyData = true;

export const getNewsList = async ({
  limit,
  offset,
}: TNewsReqParams): Promise<Result<TNews[]>> => {
  if (useDummyData) {
    return [newsData["Items"].slice(offset, offset + limit), null];
  }

  try {
    const response = await fetch(`${ApiKey}/news`, {
      method: "GET",
      next: { revalidate: 43200 },
    });

    if (!response.ok) {
      return [
        null,
        new Error(`Failed to fetch news status code: ${response.status}`),
      ];
    }
    const newsList: TNews[] = await response.json();
    return [newsList, null];
  } catch (error) {
    console.error(error);
    return [null, new Error(`Failed to fetch news ${error}`)];
  }
};
