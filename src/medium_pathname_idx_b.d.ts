import { Writable$ } from '@ctx-core/store';
import { medium_pathname_a1_Ctx } from './medium_pathname_a1_b';
export interface medium_pathname_idx_Ctx extends medium_pathname_a1_Ctx {
    medium_pathname_idx?: medium_pathname_idx_T;
}
export declare const medium_pathname_idx_b: import("@ctx-core/object").Be<medium_pathname_idx_Ctx, "medium_pathname_idx">;
export declare type $medium_pathname_idx_T = number;
export interface medium_pathname_idx_T extends Writable$<$medium_pathname_idx_T> {
    next_medium_pathname: () => void;
    prev_medium_pathname: () => void;
}
