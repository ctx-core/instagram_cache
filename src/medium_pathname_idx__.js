import { next_idx_, prev_idx_ } from '@ctx-core/array'
import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { medium_pathname_a__ } from './medium_pathname_a__.js'
/** @type {import(medium_pathname_idx__.d.ts).medium_pathname_idx__} */
export const medium_pathname_idx__ = be_('medium_pathname_idx_', ctx=>{
	const medium_pathname_idx_ = atom_(0)
	const medium_pathname_a_ = medium_pathname_a__(ctx)
	return assign(medium_pathname_idx_, {
		next_medium_pathname,
		prev_medium_pathname
	})
	function next_medium_pathname() {
		const { length } = medium_pathname_a_.$
		medium_pathname_idx_.$ = next_idx_(length, medium_pathname_idx_.$)
	}
	function prev_medium_pathname() {
		const { length } = medium_pathname_a_.$
		medium_pathname_idx_.$ = prev_idx_(length, medium_pathname_idx_.$)
	}
})
export { medium_pathname_idx__ as medium_pathname_idx$_ }
