import { _b, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { writable, Writable } from '@ctx-core/store'
import { _medium_pathname_a1 } from './_medium_pathname_a1'
const key = 'source_medium_pathname_a1'
export interface source_medium_pathname_a1_Ctx {
	source_medium_pathname_a1?:source_medium_pathname_a1_T
}
export const source_medium_pathname_a1_b = _b<source_medium_pathname_a1_Ctx, typeof key>(key, ()=>{
	const source_medium_pathname_a1 = writable(undefined) as source_medium_pathname_a1_T
	if (has_dom) {
		reload_source_medium_pathname_a1().then()
	}
	return assign(source_medium_pathname_a1, {
		reload_source_medium_pathname_a1,
	}) as source_medium_pathname_a1_T
	async function reload_source_medium_pathname_a1() {
		const medium_pathname_a1 = await _medium_pathname_a1()
		source_medium_pathname_a1.set(medium_pathname_a1)
	}
})
export type $source_medium_pathname_a1_T = string[]|undefined
export interface source_medium_pathname_a1_T extends Writable<$source_medium_pathname_a1_T> {
	reload_source_medium_pathname_a1:()=>Promise<void>
}
