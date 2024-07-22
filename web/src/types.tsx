import { StaticImageData } from "next/image";

export type News = {
  title: string;
  image: StaticImageData;
  link: string;
};
