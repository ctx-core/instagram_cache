import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
const Bucket = process.env.S3_BUCKET;
export async function s3_put_medium_pathname_a(medium_pathname_a, opts = {}) {
    const { region = 'us-east-1', MEDIUM_PATHNAME_A1_KEY = process.env.MEDIUM_PATHNAME_A1_KEY, } = opts;
    const s3 = new S3Client({ region });
    return await s3.send(new PutObjectCommand({
        Bucket,
        Key: MEDIUM_PATHNAME_A1_KEY,
        Body: JSON.stringify(medium_pathname_a)
    }));
}
export { s3_put_medium_pathname_a as put__arr__pathname__medium };
//# sourceMappingURL=src/s3_put_medium_pathname_a.js.map