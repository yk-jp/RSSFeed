import { APIGatewayProxyResult, Handler } from 'aws-lambda';
import { ScanCommand, ScanCommandOutput } from '@aws-sdk/client-dynamodb';

import { dbClient } from '../dbConfig';
import { Result, News, NewsListResp } from '../types';

const getNewsData = async (limit: number, offset: number): Promise<Result<NewsListResp>> => {
    try {
        const dataResp: ScanCommandOutput = await dbClient.send(
            new ScanCommand({
                TableName: 'News',
            }),
        );

        let newsList: News[] =
            dataResp.Items?.map((item) => ({
                id: item.id.S as string,
                title: item.title.S as string,
                link: item.link.S as string,
                image: item.image.S as string,
            })) || [];

        const totalCount: number = newsList.length;
        newsList = newsList.slice(offset, offset + limit);

        return [{ newsList, totalCount }, null];
    } catch (error) {
        return [null, new Error(`Failed to get list data: ${error}`)];
    }
};

export const lambdaHandler: Handler = async (event): Promise<APIGatewayProxyResult> => {
    const limit = parseInt(event.queryStringParameters?.limit || '10', 10);
    const offset = parseInt(event.queryStringParameters?.offset || '0', 10);

    const [newsList, getListError] = await getNewsData(limit, offset);

    if (getListError) {
        console.error(getListError);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: getListError.message,
            }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(newsList),
    };
};
