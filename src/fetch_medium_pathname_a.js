import { fetch } from '@ctx-core/fetch';
export function fetch_medium_pathname_a(opts = {}) {
    const { Bucket = process.env.S3_BUCKET, MEDIUM_PATHNAME_A1_KEY = process.env.MEDIUM_PATHNAME_A1_KEY, } = opts;
    return fetch(`https://s3.amazonaws.com/${Bucket}/${MEDIUM_PATHNAME_A1_KEY}`, { mode: 'cors' });
}
export { fetch_medium_pathname_a as fetch__arr__pathname__medium };
//# sourceMappingURL=src/fetch_medium_pathname_a.js.map