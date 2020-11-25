import { get, writable, Writable } from '@ctx-core/store'
import { _b, assign } from '@ctx-core/object'
import { _idx__next, _idx__prev } from '@ctx-core/array'
import { medium_pathname_a1_b } from './medium_pathname_a1_b'
export const medium_pathname_idx_b = _b<type__idx__pathname__medium>('medium_pathname_idx', (ctx)=>{
	const medium_pathname_idx = writable(0) as type__idx__pathname__medium
	const __a1__pathname__medium = medium_pathname_a1_b(ctx)
	return assign(medium_pathname_idx, {
		next__pathname__medium,
		prev__pathname__medium,
	})
	function next__pathname__medium() {
		const { length } = get(__a1__pathname__medium)
		medium_pathname_idx.update(
			idx__pathname__medium=>_idx__next(length, idx__pathname__medium)
		)
	}
	function prev__pathname__medium() {
		const { length } = get(__a1__pathname__medium)
		medium_pathname_idx.update(
			idx__pathname__medium=>_idx__prev(length, idx__pathname__medium)
		)
	}
	return medium_pathname_idx
})
export interface type__idx__pathname__medium extends Writable<number> {
	next__pathname__medium:()=>void
	prev__pathname__medium:()=>void
}
