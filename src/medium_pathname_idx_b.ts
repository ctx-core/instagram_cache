import { _b, assign } from '@ctx-core/object'
import { _next_idx, _prev_idx } from '@ctx-core/array'
import { writable$, Writable$ } from '@ctx-core/store'
import { medium_pathname_a1_b } from './medium_pathname_a1_b'
import type { instagram_cache_Ctx } from './instagram_cache_Ctx'
const key = 'medium_pathname_idx'
export const medium_pathname_idx_b = _b<instagram_cache_Ctx, typeof key>(key, ctx=>{
	const medium_pathname_idx = writable$(0) as medium_pathname_idx_T
	const medium_pathname_a1 = medium_pathname_a1_b(ctx)
	return assign(medium_pathname_idx, {
		next_medium_pathname,
		prev_medium_pathname,
	})
	function next_medium_pathname() {
		const { length } = medium_pathname_a1.$
		medium_pathname_idx.update(
			medium_pathname_idx=>_next_idx(length, medium_pathname_idx)
		)
	}
	function prev_medium_pathname() {
		const { length } = medium_pathname_a1.$
		medium_pathname_idx.update(
			medium_pathname_idx=>_prev_idx(length, medium_pathname_idx)
		)
	}
	return medium_pathname_idx
})
export type $medium_pathname_idx_T = number
export interface medium_pathname_idx_T extends Writable$<$medium_pathname_idx_T> {
	next_medium_pathname:()=>void
	prev_medium_pathname:()=>void
}
