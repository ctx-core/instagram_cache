import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
const Bucket = process.env.S3_BUCKET
/** @type {import(get_medium_pathname_a).get_medium_pathname_a} */
export const get_medium_pathname_a = async (opts = {})=>{
	const { region = 'us-east-1', MEDIUM_PATHNAME_A_KEY = process.env.MEDIUM_PATHNAME_A_KEY, } = opts
	const s3 = new S3Client({
		region
	})
	const json = (await s3.send(new GetObjectCommand({
		Bucket,
		Key: MEDIUM_PATHNAME_A_KEY
	}))).toString()
	return json ? JSON.parse(json) : null
}
