import { writable, derived, get, Writable } from 'svelte/store'
import { _has__dom } from '@ctx-core/dom'
import { _idx__prev, _idx__next } from '@ctx-core/array'
import { _a1__pathname__medium } from './fetch'
import { _b, assign } from '@ctx-core/object'
import { falsy } from '@ctx-core/function'
export interface Writable__a1__pathname__medium__source extends Writable<falsy|string[]> {
	reload__a1__pathname__medium__source:()=>Promise<void>
}
export const b__a1__pathname__medium__source = _b('__a1__pathname__medium__source', ()=>{
	const __a1__pathname__medium__source = writable(null)
	if (_has__dom()) {
		reload__a1__pathname__medium__source()
	}
	return assign(__a1__pathname__medium__source, {
		reload__a1__pathname__medium__source,
	})
	async function reload__a1__pathname__medium__source() {
		const a1__pathname__medium = await _a1__pathname__medium()
		__a1__pathname__medium__source.set(a1__pathname__medium)
	}
})
export const __a1__pathname__medium__source = b__a1__pathname__medium__source()
export const {
	reload__a1__pathname__medium__source,
} = __a1__pathname__medium__source
export interface Writable__idx__pathname__medium extends Writable<number> {
	next__pathname__medium:()=>void
	prev__pathname__medium:()=>void
}
export const b__idx__pathname__medium = _b<Writable__idx__pathname__medium>('__idx__pathname__medium', ()=>{
	const __idx__pathname__medium = writable(0)
	return assign(__idx__pathname__medium, {
		next__pathname__medium,
		prev__pathname__medium,
	})
	function next__pathname__medium() {
		const { length } = get(__a1__pathname__medium)
		__idx__pathname__medium.update(
			idx__pathname__medium=>_idx__next(length, idx__pathname__medium)
		)
	}
	function prev__pathname__medium() {
		const { length } = get(__a1__pathname__medium)
		__idx__pathname__medium.update(
			idx__pathname__medium=>_idx__prev(length, idx__pathname__medium)
		)
	}
	return __idx__pathname__medium
})
export const __idx__pathname__medium = b__idx__pathname__medium()
export const {
	next__pathname__medium,
	prev__pathname__medium,
} = __idx__pathname__medium
export const b__a1__pathname__medium = _b('__a1__pathname__medium', ctx=>
	derived(b__a1__pathname__medium__source(ctx),
		a1__pathname__medium__source=>
			a1__pathname__medium__source
			|| []))
export const __a1__pathname__medium = b__a1__pathname__medium()
export const b__pathname__medium = _b('__pathname__medium', ctx=>
	derived([
			b__a1__pathname__medium(ctx),
			b__idx__pathname__medium(ctx),
		],
		([a1__pathname__medium, idx__pathname__medium])=>
			a1__pathname__medium[idx__pathname__medium]
	))
export const __pathname__medium = b__pathname__medium()
