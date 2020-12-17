import { _b, assign } from '@ctx-core/object'
import { _next_idx, _idx__prev } from '@ctx-core/array'
import { get, writable, Writable } from '@ctx-core/store'
import { medium_pathname_a1_b } from './medium_pathname_a1_b'
export const medium_pathname_idx_b = _b('medium_pathname_idx', (ctx)=>{
	const medium_pathname_idx = writable(0)
	const medium_pathname_a1 = medium_pathname_a1_b(ctx)
	return assign(medium_pathname_idx, {
		next_medium_pathname,
		prev_medium_pathname,
	}) as medium_pathname_idx_type
	function next_medium_pathname() {
		const { length } = get(medium_pathname_a1)
		medium_pathname_idx.update(
			medium_pathname_idx=>_next_idx(length, medium_pathname_idx)
		)
	}
	function prev_medium_pathname() {
		const { length } = get(medium_pathname_a1)
		medium_pathname_idx.update(
			medium_pathname_idx=>_idx__prev(length, medium_pathname_idx)
		)
	}
	return medium_pathname_idx
})
export type $medium_pathname_idx_type = number
export interface medium_pathname_idx_type extends Writable<$medium_pathname_idx_type> {
	next_medium_pathname:()=>void
	prev_medium_pathname:()=>void
}
