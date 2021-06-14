import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
const Bucket = process.env.S3_BUCKET;
export async function get_medium_pathname_a(opts = {}) {
    const { region = 'us-east-1', MEDIUM_PATHNAME_A1_KEY = process.env.MEDIUM_PATHNAME_A1_KEY, } = opts;
    const s3 = new S3Client({ region });
    const json = (await s3.send(new GetObjectCommand({
        Bucket,
        Key: MEDIUM_PATHNAME_A1_KEY,
    }))).toString();
    return json && JSON.parse(json);
}
//# sourceMappingURL=src/get_medium_pathname_a.js.map