import dotenv from 'dotenv';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

dotenv.config();

const REGION = process.env.REGION || 'us-west-2';
const ENDPOINT = process.env.DB_ENDPOINT || undefined;

export const dbClient = new DynamoDBClient({
    region: REGION,
    ...(ENDPOINT && { endpoint: ENDPOINT }),
});
