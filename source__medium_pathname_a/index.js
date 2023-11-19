import { has_dom } from '@ctx-core/dom'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { medium_pathname_a__new } from '../medium_pathname_a/index.js'
/** @type {typeof import('./index.d.ts')} */
export const [
	source__medium_pathname_a$_,
	source__medium_pathname_a_,
	source__medium_pathname_a__set,
] = be_atom_triple_('source__medium_pathname_a', ctx=>{
	const source_medium_pathname_a$ = atom_(undefined)
	if (has_dom) {
		queueMicrotask(()=>
			source__medium_pathname_a__reload(ctx))
	}
	return source_medium_pathname_a$
})
export {
	source__medium_pathname_a$_ as source__medium_pathname_a__,
	source__medium_pathname_a$_ as source_medium_pathname_a__,
	source__medium_pathname_a$_ as source_medium_pathname_a$_,
}
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {Promise<void>}
 */
export async function source__medium_pathname_a__reload(ctx) {
	const medium_pathname_a = await medium_pathname_a__new()
	source__medium_pathname_a__set(ctx, medium_pathname_a)
}
