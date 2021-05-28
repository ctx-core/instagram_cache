import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { medium_pathname_a1_T } from './medium_pathname_a1_b'
import { medium_pathname_a1_b } from './medium_pathname_a1_b'
import type { medium_pathname_T } from './medium_pathname_b'
import { medium_pathname_b } from './medium_pathname_b'
import type { medium_pathname_idx_T } from './medium_pathname_idx_b'
import { medium_pathname_idx_b } from './medium_pathname_idx_b'
import type { source_medium_pathname_a1_T } from './source_medium_pathname_a1_b'
import { source_medium_pathname_a1_b } from './source_medium_pathname_a1_b'
export interface instagram_cache_ctx_I {
	medium_pathname_a1?:medium_pathname_a1_T
	medium_pathname?:medium_pathname_T
	medium_pathname_idx?:medium_pathname_idx_T
	source_medium_pathname_a1?:source_medium_pathname_a1_T
	instagram_cache_b_h?:instagram_cache_b_h_T
}
export interface instagram_cache_b_h_T {
	get medium_pathname_a1():medium_pathname_a1_T
	get medium_pathname():medium_pathname_T
	get medium_pathname_idx():medium_pathname_idx_T
	get source_medium_pathname_a1():source_medium_pathname_a1_T
}
export function instagram_cache_b_h_b(ctx:instagram_cache_ctx_I):B<instagram_cache_ctx_I, 'instagram_cache_b_h'> {
	return _b('instagram_cache_b_h', ()=>{
		return {
			get medium_pathname_a1() { return medium_pathname_a1_b(ctx) },
			get medium_pathname() { return medium_pathname_b(ctx) },
			get medium_pathname_idx() { return medium_pathname_idx_b(ctx) },
			get source_medium_pathname_a1() { return source_medium_pathname_a1_b(ctx) }
		}
	})
}