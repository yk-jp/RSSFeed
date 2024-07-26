import { StaticImageData } from "next/image";

export type NullError = null | Error;

export type Result<T> = [T, null] | [null, Error];

export type TNews = {
  title: string;
  image: StaticImageData;
  link: string;
};
