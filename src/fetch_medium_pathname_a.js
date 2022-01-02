import { fetch } from '@ctx-core/fetch'
/** @type {import(fetch_medium_pathname_a).fetch_medium_pathname_a} */
export const fetch_medium_pathname_a = (opts = {})=>{
	const { Bucket = process.env.S3_BUCKET, MEDIUM_PATHNAME_A_KEY = process.env.MEDIUM_PATHNAME_A_KEY, } = opts
	return fetch(`https://s3.amazonaws.com/${Bucket}/${MEDIUM_PATHNAME_A_KEY}`, {
		mode: 'cors'
	})
}
export { fetch_medium_pathname_a as fetch__arr__pathname__medium }
