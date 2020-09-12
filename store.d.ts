import { Writable } from 'svelte/store';
import type { falsy } from '@ctx-core/function';
export interface Writable__a1__pathname__medium__source extends Writable<falsy | string[]> {
    reload__a1__pathname__medium__source: () => Promise<void>;
}
export declare const b__a1__pathname__medium__source: (ctx?: any, opts?: any) => any;
export declare const __a1__pathname__medium__source: any;
export declare const reload__a1__pathname__medium__source: any;
export interface Writable__idx__pathname__medium extends Writable<number> {
    next__pathname__medium: () => void;
    prev__pathname__medium: () => void;
}
export declare const b__idx__pathname__medium: (ctx?: any, opts?: any) => Writable__idx__pathname__medium;
export declare const __idx__pathname__medium: Writable__idx__pathname__medium;
export declare const next__pathname__medium: () => void, prev__pathname__medium: () => void;
export declare const b__a1__pathname__medium: (ctx?: any, opts?: any) => import("svelte/store").Readable<unknown>;
export declare const __a1__pathname__medium: import("svelte/store").Readable<unknown>;
export declare const b__pathname__medium: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __pathname__medium: import("svelte/store").Readable<any>;
