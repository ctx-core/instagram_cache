/// <reference types="ctx-core" />
import { has_dom } from '@ctx-core/dom'
import { be_sig_triple_ } from 'ctx-core/rmemo'
import { medium_pathname_a__new } from '../medium_pathname_a/index.js'
export const [
	source__medium_pathname_a$_,
	source__medium_pathname_a_,
	source__medium_pathname_a__set,
] = /** @type {be_sig_triple_T<string[]|undefined>} */
	be_sig_triple_(
		()=>undefined,
		{ id: 'source__medium_pathname_a' }
	).add(ctx=>{
		if (has_dom) {
			queueMicrotask(()=>
				source__medium_pathname_a__reload(ctx))
		}
	})
export {
	source__medium_pathname_a$_ as source__medium_pathname_a__,
	source__medium_pathname_a$_ as source_medium_pathname_a__,
	source__medium_pathname_a$_ as source_medium_pathname_a$_,
}
/**
 * @param {Ctx}ctx
 * @returns {Promise<void>}
 */
export async function source__medium_pathname_a__reload(ctx) {
	const medium_pathname_a = await medium_pathname_a__new()
	source__medium_pathname_a__set(ctx, medium_pathname_a)
}
