import { next_idx_, prev_idx_ } from '@ctx-core/array'
import { be_atom_triple_ } from '@ctx-core/nanostores'
import { medium_pathname_a_ } from '../medium_pathname_a/index.js'
/** @typedef {import('@ctx-core/object').be_atom_triple_T} */
/** @typedef {import('@ctx-core/object').Ctx} */
export const [
	medium_pathname_idx$_,
	medium_pathname_idx_,
	medium_pathname_idx__set,
] = /** @type {be_atom_triple_T<number>} */ be_atom_triple_(()=>
	0)
	.config({ id: 'medium_pathname_idx' })
export { medium_pathname_idx$_ as medium_pathname_idx__ }
/**
 * @param {Ctx}ctx
 */
export function medium_pathname_idx__next(ctx) {
	const { length } = medium_pathname_a_(ctx)
	medium_pathname_idx__set(ctx, next_idx_(length, medium_pathname_idx_(ctx)))
}
/**
 * @param {Ctx}ctx
 */
export function medium_pathname_idx__prev(ctx) {
	const { length } = medium_pathname_a_(ctx)
	medium_pathname_idx__set(ctx, prev_idx_(length, medium_pathname_idx_(ctx)))
}
