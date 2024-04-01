/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { import_meta_env_ } from 'ctx-core/env'
import { id_be_memo_pair_ } from 'ctx-core/rmemo'
import { source__medium_pathname_a_ } from '../source__medium_pathname_a/index.js'
export const [
	medium_pathname_a$_,
	medium_pathname_a_,
] = /** @type {be_memo_pair_T<string[]>} */
id_be_memo_pair_(
	'medium_pathname_a',
	ctx=>
		source__medium_pathname_a_(ctx) || [])
export { medium_pathname_a$_ as medium_pathname_a__ }
/** @type {typeof medium_pathname_a__new} */
export const medium_pathname_a__new = async ()=>{
	const response = await medium_pathname_a__fetch_get()
	const text = await response.text()
	return text.split('\n')
}
export { medium_pathname_a__new as _arr__pathname__medium }
/** @type {typeof medium_pathname_a__fetch_get} */
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
