/// <reference types="ctx-core" />
import { is_browser_ } from 'ctx-core/env'
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
import { medium_pathname_a__new } from '../medium_pathname_a/index.js'
export const [
	source__medium_pathname_a$_,
	source__medium_pathname_a_,
	source__medium_pathname_a__set,
] = /** @type {be_sig_triple_T<string[]|undefined>} */
	id_be_sig_triple_(
		'source__medium_pathname_a',
		()=>undefined,
		[
			ctx=>{
				if (is_browser_()) {
					queueMicrotask(()=>
						source__medium_pathname_a__reload(ctx))
				}
			}
		])
export {
	source__medium_pathname_a$_ as source__medium_pathname_a__,
	source__medium_pathname_a$_ as source_medium_pathname_a__,
	source__medium_pathname_a$_ as source_medium_pathname_a$_,
}
/**
 * @param {ctx_T}ctx
 * @returns {Promise<void>}
 */
export async function source__medium_pathname_a__reload(ctx) {
	const medium_pathname_a = await medium_pathname_a__new()
	source__medium_pathname_a__set(ctx, medium_pathname_a)
}
