import { fetch } from '@ctx-core/fetch'
export function fetch_medium_pathname_a1(opts:fetch_medium_pathname_a1_opts_type = {}) {
	const {
		Bucket = process.env.S3_BUCKET,
		MEDIUM_PATHNAME_A1_KEY = process.env.MEDIUM_PATHNAME_A1_KEY,
	} = opts
	return fetch(
		`https://s3.amazonaws.com/${Bucket}/${MEDIUM_PATHNAME_A1_KEY}`,
		{ mode: 'cors' }
	)
}
export {
	fetch_medium_pathname_a1 as fetch__arr__pathname__medium
}
export interface fetch_medium_pathname_a1_opts_type {
	Bucket?:string
	MEDIUM_PATHNAME_A1_KEY?:string
}
