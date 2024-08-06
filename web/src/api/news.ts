import { Result, TNewsReqParams, TNewsListResp } from "@/types";
import { ApiKey } from "@/config";
import newsData from "@/_data/dummy_news.json";

const useDummyData = false;

export const getNewsList = async ({
  limit,
  offset,
}: TNewsReqParams): Promise<Result<TNewsListResp>> => {
  if (useDummyData) {
    const dummyData: TNewsListResp = {
      newsList: newsData["Items"].slice(offset, offset + limit),
      totalCount: newsData["Items"].length,
    };
    return [dummyData, null];
  }

  try {
    console.log(limit, offset);
    const response = await fetch(
      `${ApiKey}/news?limit=${limit}&offset=${offset}`,
      {
        method: "GET",
        next: { revalidate: 43200 },
      }
    );

    console.log(response);

    if (!response.ok) {
      return [
        null,
        new Error(`Failed to fetch news status code: ${response.status}`),
      ];
    }
    const data: TNewsListResp = await response.json();
    console.log(data);
    return [data, null];
  } catch (error) {
    console.error(error);
    return [null, new Error(`Failed to fetch news ${error}`)];
  }
};
