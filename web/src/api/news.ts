import { TNews, Result } from "@/types";
import { ApiKey } from "@/config";

export const getNewsList = async (): Promise<Result<TNews[]>> => {
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
