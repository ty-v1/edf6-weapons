import { S3Client } from '@aws-sdk/client-s3';

export const s3Client = (() => {
  if (process.env.NODE_ENV !== 'production') {
    return new S3Client({
      region: 'ap-northeast-1',
      endpoint: 'http://localhost:3090',
      credentials: {
        accessKeyId: 'minio',
        secretAccessKey: 'password',
      },
      forcePathStyle: true,
    });
  } else {
    return new S3Client({
      region: 'us-west-1',
    });
  }
})();
