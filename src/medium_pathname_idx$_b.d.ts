import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { instagram_cache_Ctx } from './instagram_cache_Ctx';
declare const key = "medium_pathname_idx$";
export declare const medium_pathname_idx$_b: B<instagram_cache_Ctx, typeof key>;
export declare type medium_pathname_idx_T = number;
export interface medium_pathname_idx$_T extends Writable$<medium_pathname_idx_T> {
    next_medium_pathname: () => void;
    prev_medium_pathname: () => void;
}
export {};
