import { next_idx_, prev_idx_ } from '@ctx-core/array'
import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { medium_pathname_a$_ } from './medium_pathname_a$_.js'
/** @type {import(medium_pathname_idx$_.d.ts).medium_pathname_idx$_} */
export const medium_pathname_idx$_ = be_('medium_pathname_idx$', ctx=>{
	const medium_pathname_idx$ = atom_(0)
	const medium_pathname_a$ = medium_pathname_a$_(ctx)
	return assign(medium_pathname_idx$, {
		next_medium_pathname,
		prev_medium_pathname
	})
	function next_medium_pathname() {
		const { length } = medium_pathname_a$.$
		medium_pathname_idx$.$ = next_idx_(length, medium_pathname_idx$.$)
	}
	function prev_medium_pathname() {
		const { length } = medium_pathname_a$.$
		medium_pathname_idx$.$ = prev_idx_(length, medium_pathname_idx$.$)
	}
})
