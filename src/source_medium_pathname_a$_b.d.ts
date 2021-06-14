import { B } from '@ctx-core/object';
import { Writable } from '@ctx-core/store';
import type { instagram_cache_Ctx } from './instagram_cache_Ctx';
declare const key = "source_medium_pathname_a$";
export declare const source_medium_pathname_a$_b: B<instagram_cache_Ctx, typeof key>;
export interface source_medium_pathname_a$_T extends Writable<string[] | undefined> {
    reload_source_medium_pathname_a: () => Promise<void>;
}
export {};
