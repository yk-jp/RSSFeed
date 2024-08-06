export type NullError = null | Error;

export type Result<T> = [T, null] | [null, Error];

export type News = {
    id: string;
    title: string;
    link: string;
    image: string;
};

export type NewsListResp = {
    newsList: News[];
    totalCount: number;
};
