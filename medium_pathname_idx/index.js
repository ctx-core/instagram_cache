/// <reference types="ctx-core" />
import { next_idx_, prev_idx_ } from 'ctx-core/array'
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
import { medium_pathname_a_ } from '../medium_pathname_a/index.js'
export const [
	medium_pathname_idx$_,
	medium_pathname_idx_,
	medium_pathname_idx__set,
] = /** @type {be_sig_triple_T<number>} */
id_be_sig_triple_(
	'medium_pathname_idx',
	()=>0)
export { medium_pathname_idx$_ as medium_pathname_idx__ }
/**
 * @param {ctx_T}ctx
 */
export function medium_pathname_idx__next(ctx) {
	const { length } = medium_pathname_a_(ctx)
	medium_pathname_idx__set(ctx, next_idx_(length, medium_pathname_idx_(ctx)))
}
/**
 * @param {ctx_T}ctx
 */
export function medium_pathname_idx__prev(ctx) {
	const { length } = medium_pathname_a_(ctx)
	medium_pathname_idx__set(ctx, prev_idx_(length, medium_pathname_idx_(ctx)))
}
