import type { maybe } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const source_medium_pathname_a1_b: import("@ctx-core/object").be_type<source_medium_pathname_a1_type, object>;
export declare type $source_medium_pathname_a1_type = maybe<string[]>;
export interface source_medium_pathname_a1_type extends Writable<$source_medium_pathname_a1_type> {
    reload_source_medium_pathname_a1: () => Promise<void>;
}
