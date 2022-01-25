import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { medium_pathname_a$_b } from './medium_pathname_a$_b.js'
import { medium_pathname_idx$_b } from './medium_pathname_idx$_b.js'
const key = 'medium_pathname$'
/** @type {import(medium_pathname$_b).medium_pathname$_b} */
export const medium_pathname$_b = be_(key, ctx=>{
	return computed$([
		medium_pathname_a$_b(ctx),
		medium_pathname_idx$_b(ctx)
	], (medium_pathname_a, medium_pathname_idx)=>{
		return medium_pathname_a === null || medium_pathname_a === void 0 ? void 0 : medium_pathname_a[medium_pathname_idx]
	})
})
