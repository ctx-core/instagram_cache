import { Writable } from '@ctx-core/store';
export declare const medium_pathname_idx_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Writable<number>;
export declare type $medium_pathname_idx_type = number;
export interface medium_pathname_idx_type extends Writable<$medium_pathname_idx_type> {
    next_medium_pathname: () => void;
    prev_medium_pathname: () => void;
}
