import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { import_meta_env_ } from '@ctx-core/env'
const Bucket = import_meta_env_().S3_BUCKET
export async function s3__medium_pathname_a__new(params = {}) {
	const {
		region = 'us-east-1',
		MEDIUM_PATHNAME_A_KEY = import_meta_env_().MEDIUM_PATHNAME_A_KEY,
	} = params
	const s3 = new S3Client({ region })
	const json = await s3.send(new GetObjectCommand({
		Bucket,
		Key: MEDIUM_PATHNAME_A_KEY
	})).then($=>$.toString())
	return json ? JSON.parse(json) : null
}
export {
	s3__medium_pathname_a__new as get_medium_pathname_a,
}
