import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export const dbClient = new DynamoDBClient({
    region: 'us-west-2',
    endpoint: 'http://host.docker.internal:4566',
    credentials: {
        accessKeyId: 'test',
        secretAccessKey: 'test',
    },
});
