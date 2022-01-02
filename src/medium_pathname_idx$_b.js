import { next_idx_, prev_idx_ } from '@ctx-core/array'
import { atom$ } from '@ctx-core/nanostores'
import { be_, assign } from '@ctx-core/object'
import { medium_pathname_a$_b } from './medium_pathname_a$_b.js'
const key = 'medium_pathname_idx$'
/** @type {import(medium_pathname_idx$_b.d.ts).medium_pathname_idx$_b} */
export const medium_pathname_idx$_b = be_(key, ctx=>{
	const medium_pathname_idx$ = atom$(0)
	const medium_pathname_a$ = medium_pathname_a$_b(ctx)
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
