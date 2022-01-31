import { next_idx_, prev_idx_ } from '@ctx-core/array'
import { atom$ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { medium_pathname_a$_ } from './medium_pathname_a$_.js'
const key = 'medium_pathname_idx$'
/** @type {import(medium_pathname_idx$_.d.ts).medium_pathname_idx$_} */
export const medium_pathname_idx$_ = be_(key, ctx=>{
	const medium_pathname_idx$ = atom$(0)
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
