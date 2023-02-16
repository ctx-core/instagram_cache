import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { medium_pathname_a_ } from '../medium_pathname_a_/index.js'
/** @type {typeof import(source__medium_pathname_a__.d.ts)}.source__medium_pathname_a__ */
export const source__medium_pathname_a__ = be_('source__medium_pathname_a__', ctx=>{
	const source_medium_pathname_a_ = atom_(undefined)
	if (has_dom) {
		queueMicrotask(()=>source__medium_pathname_a__reload(ctx))
	}
	return source_medium_pathname_a_
})
export {
	source__medium_pathname_a__ as source_medium_pathname_a__,
	source__medium_pathname_a__ as source_medium_pathname_a$_,
}
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {Promise<void>}
 */
export async function source__medium_pathname_a__reload(ctx) {
	const medium_pathname_a = await medium_pathname_a_()
	source__medium_pathname_a__(ctx).set(medium_pathname_a)
}
