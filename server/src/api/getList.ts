import { APIGatewayProxyResult, Handler } from 'aws-lambda';
import { ScanCommand, ScanCommandOutput } from '@aws-sdk/client-dynamodb';

import { dbClient } from '../dbConfig';
import { Result, News } from '../types';

const getNewsData = async (query: ScanCommand): Promise<Result<News[]>> => {
    try {
        const resp: ScanCommandOutput = await dbClient.send(query);

        const newsList: News[] =
            resp.Items?.map((item) => ({
                id: item.id.S as string,
                title: item.title.S as string,
                link: item.link.S as string,
                image: item.image.S as string,
            })) || [];
        return [newsList, null];
    } catch (error) {
        return [null, new Error(`Failed to get list data: ${error}`)];
    }
};

export const lambdaHandler: Handler = async (): Promise<APIGatewayProxyResult> => {
    const command = new ScanCommand({ TableName: 'News' });
    const [newsList, getListError] = await getNewsData(command);

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
