import { Writable$ } from '@ctx-core/store';
import type { instagram_cache_Ctx } from './instagram_cache_Ctx';
export declare const medium_pathname_idx_b: import("@ctx-core/object").Be<instagram_cache_Ctx, "medium_pathname_idx", medium_pathname_idx_T>;
export declare type $medium_pathname_idx_T = number;
export interface medium_pathname_idx_T extends Writable$<$medium_pathname_idx_T> {
    next_medium_pathname: () => void;
    prev_medium_pathname: () => void;
}
