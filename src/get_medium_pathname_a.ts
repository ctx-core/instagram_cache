import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import type { medium_pathname_a1_opts_T } from './medium_pathname_a1_opts_T'
const Bucket = process.env.S3_BUCKET as string
export async function get_medium_pathname_a(opts:medium_pathname_a1_opts_T = {}) {
	const {
		region = 'us-east-1',
		MEDIUM_PATHNAME_A1_KEY =
			process.env.MEDIUM_PATHNAME_A1_KEY as string,
	} = opts
	const s3 = new S3Client({ region })
	const json = (await s3.send(new GetObjectCommand({
		Bucket,
		Key: MEDIUM_PATHNAME_A1_KEY,
	}))).toString()
	return json && JSON.parse(json)
}
