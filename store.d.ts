import { Writable } from 'svelte/store';
import type { maybe } from '@ctx-core/function';
export interface type__a1__pathname__medium__source extends Writable<maybe<string[]>> {
    reload__a1__pathname__medium__source: () => Promise<void>;
}
export declare const b__a1__pathname__medium__source: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => type__a1__pathname__medium__source;
export declare const __a1__pathname__medium__source: type__a1__pathname__medium__source;
export declare const reload__a1__pathname__medium__source: () => Promise<void>;
export interface type__idx__pathname__medium extends Writable<number> {
    next__pathname__medium: () => void;
    prev__pathname__medium: () => void;
}
export declare const b__idx__pathname__medium: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => type__idx__pathname__medium;
export declare const __idx__pathname__medium: type__idx__pathname__medium;
export declare const next__pathname__medium: () => void, prev__pathname__medium: () => void;
export declare const b__a1__pathname__medium: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => import("svelte/store").Readable<number | string[]>;
export declare const __a1__pathname__medium: import("svelte/store").Readable<number | string[]>;
export declare const b__pathname__medium: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => import("svelte/store").Readable<any>;
export declare const __pathname__medium: import("svelte/store").Readable<any>;
