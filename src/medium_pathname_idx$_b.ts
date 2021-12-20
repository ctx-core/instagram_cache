import { next_idx_, prev_idx_ } from '@ctx-core/array'
import { B, be_, assign } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { medium_pathname_a$_b } from './medium_pathname_a$_b.js'
const key = 'medium_pathname_idx$'
export const medium_pathname_idx$_b:B<medium_pathname_idx$_T> = be_(key, ctx=>{
	const medium_pathname_idx$ = atom$(0) as medium_pathname_idx$_T
	const medium_pathname_a$ = medium_pathname_a$_b(ctx)
	return assign(medium_pathname_idx$, {
		next_medium_pathname,
		prev_medium_pathname,
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
export interface medium_pathname_idx$_T extends WritableAtom$<number> {
	next_medium_pathname:()=>void
	prev_medium_pathname:()=>void
}
