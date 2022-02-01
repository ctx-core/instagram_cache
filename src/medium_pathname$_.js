import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { medium_pathname_a$_ } from './medium_pathname_a$_.js'
import { medium_pathname_idx$_ } from './medium_pathname_idx$_.js'
/** @type {import(medium_pathname$_).medium_pathname$_} */
export const medium_pathname$_ = be_('medium_pathname$', ctx=>{
	return computed$([
		medium_pathname_a$_(ctx),
		medium_pathname_idx$_(ctx)
	], (medium_pathname_a, medium_pathname_idx)=>{
		return medium_pathname_a === null || medium_pathname_a === void 0 ? void 0 : medium_pathname_a[medium_pathname_idx]
	})
})
