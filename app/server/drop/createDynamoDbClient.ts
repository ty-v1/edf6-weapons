import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export const dynamoDbClient = (() => {
  if (process.env.NODE_ENV !== 'production') {
    return new DynamoDBClient({
      region: 'us-east-1',
      endpoint: 'http://localhost:4545',
      credentials: {
        accessKeyId: 'dummy',
        secretAccessKey: 'dummy',
      },
    });
  } else {
    return new DynamoDBClient({
      region: 'us-west-1',
    });
  }
})();
