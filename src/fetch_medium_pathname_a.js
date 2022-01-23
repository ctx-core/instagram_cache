import { fetch } from '@ctx-core/fetch-undici'
/** @type {import('./fetch_medium_pathname_a.d.ts').fetch_medium_pathname_a} */
export const fetch_medium_pathname_a = async (opts = {})=>{
	const { Bucket = process.env.S3_BUCKET, MEDIUM_PATHNAME_A_KEY = process.env.MEDIUM_PATHNAME_A_KEY, } = opts
	const res = await fetch(`https://s3.amazonaws.com/${Bucket}/${MEDIUM_PATHNAME_A_KEY}`, {
		mode: 'cors'
	})
	return [await res.json(), res]
}
export { fetch_medium_pathname_a as fetch__arr__pathname__medium }
