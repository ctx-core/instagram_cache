import type { instagram_cache_Ctx } from './instagram_cache_Ctx';
import type { medium_pathname$_T } from './medium_pathname$_b';
import type { medium_pathname_a$_T } from './medium_pathname_a$_b';
import type { medium_pathname_idx$_T } from './medium_pathname_idx$_b';
import type { source_medium_pathname_a$_T } from './source_medium_pathname_a$_b';
export interface instagram_cache_ctx_I {
    medium_pathname$?: medium_pathname$_T;
    medium_pathname_a$?: medium_pathname_a$_T;
    medium_pathname_idx$?: medium_pathname_idx$_T;
    source_medium_pathname_a$?: source_medium_pathname_a$_T;
    instagram_cache_b_h?: instagram_cache_b_h_T;
}
export interface instagram_cache_b_h_T {
    get medium_pathname$(): medium_pathname$_T;
    get medium_pathname_a$(): medium_pathname_a$_T;
    get medium_pathname_idx$(): medium_pathname_idx$_T;
    get source_medium_pathname_a$(): source_medium_pathname_a$_T;
}
export declare function instagram_cache_b_h_b(ctx: instagram_cache_Ctx): instagram_cache_b_h_T;
