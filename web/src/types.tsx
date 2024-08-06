import { StaticImageData } from "next/image";

export type NullError = null | Error;

export type Result<T> = [T, null] | [null, Error];

export type TNews = {
  title: string;
  image: string; // Changed from StaticImageData to string
  link: string;
};

export type TNewsReqParams = {
  limit: number;
  offset: number;
};

export type TNewsListResp = {
  newsList: TNews[];
  totalCount: number;
};
