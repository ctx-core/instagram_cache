import { fetch } from '@ctx-core/fetch-undici'
/** @type {typeof import('./medium_pathname_a__fetch_get.d.ts').medium_pathname_a__fetch_get} */
export const medium_pathname_a__fetch_get = async (opts = {})=>{
	const {
		Bucket = process.env.S3_BUCKET,
		MEDIUM_PATHNAME_A_KEY = process.env.MEDIUM_PATHNAME_A_KEY,
	} = opts
	return fetch(`https://s3.amazonaws.com/${Bucket}/${MEDIUM_PATHNAME_A_KEY}`, {
		mode: 'cors'
	})
}
export {
	medium_pathname_a__fetch_get as fetch_medium_pathname_a,
	medium_pathname_a__fetch_get as fetch__arr__pathname__medium,
}
