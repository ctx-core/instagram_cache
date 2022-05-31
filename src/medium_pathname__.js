import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { medium_pathname_a__ } from './medium_pathname_a__.js'
import { medium_pathname_idx__ } from './medium_pathname_idx__.js'
/** @type {import(medium_pathname__).medium_pathname__} */
export const medium_pathname__ = be_('medium_pathname__', ctx=>{
	return computed_([
		medium_pathname_a__(ctx),
		medium_pathname_idx__(ctx)
	], (medium_pathname_a, medium_pathname_idx)=>{
		return medium_pathname_a === null || medium_pathname_a === void 0 ? void 0 : medium_pathname_a[medium_pathname_idx]
	})
})
export { medium_pathname__ as medium_pathname$_ }
