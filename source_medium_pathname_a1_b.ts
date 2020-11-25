import type { maybe } from '@ctx-core/function'
import { _b, assign } from '@ctx-core/object'
import { has__dom } from '@ctx-core/dom'
import { writable, Writable } from '@ctx-core/store'
import { _medium_pathname_a1 } from './_medium_pathname_a1'
export const source_medium_pathname_a1_b = _b('source_medium_pathname_a1', ()=>{
	const source_medium_pathname_a1 = writable(null) as source_medium_pathname_a1_type
	if (has__dom) {
		reload_source_medium_pathname_a1().then()
	}
	return assign(source_medium_pathname_a1, {
		reload_source_medium_pathname_a1,
	})
	async function reload_source_medium_pathname_a1() {
		const medium_pathname_a1 = await _medium_pathname_a1()
		source_medium_pathname_a1.set(medium_pathname_a1)
	}
})
export type $source_medium_pathname_a1_type = maybe<string[]>
export interface source_medium_pathname_a1_type extends Writable<$source_medium_pathname_a1_type> {
	reload_source_medium_pathname_a1:()=>Promise<void>
}
