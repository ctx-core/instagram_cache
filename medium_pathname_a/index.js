import { import_meta_env_ } from '@ctx-core/env'
import { fetch } from '@ctx-core/fetch-undici'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { source__medium_pathname_a_ } from '../source__medium_pathname_a/index.js'
/** @type {typeof import('./index.d.ts').medium_pathname_a__} */
export const [
	medium_pathname_a$_,
	medium_pathname_a_,
] = be_computed_pair_(ctx=>
	source__medium_pathname_a_(ctx) || [])
	.config({ id: 'medium_pathname_a' })
export { medium_pathname_a$_ as medium_pathname_a__ }
/** @type {typeof import('./index.d.ts').medium_pathname_a__new} */
export const medium_pathname_a__new = async ()=>{
	const response = await medium_pathname_a__fetch_get()
	const text = await response.text()
	return text.split('\n')
}
export { medium_pathname_a__new as _arr__pathname__medium }
/** @type {typeof import('./index.d.ts').medium_pathname_a__fetch_get} */
export const medium_pathname_a__fetch_get = async (opts = {})=>{
	const {
		Bucket = import_meta_env_().S3_BUCKET,
		MEDIUM_PATHNAME_A_KEY = import_meta_env_().MEDIUM_PATHNAME_A_KEY,
	} = opts
	return fetch(`https://s3.amazonaws.com/${Bucket}/${MEDIUM_PATHNAME_A_KEY}`, {
		mode: 'cors'
	})
}
export {
	medium_pathname_a__fetch_get as fetch_medium_pathname_a,
	medium_pathname_a__fetch_get as fetch__arr__pathname__medium,
}
