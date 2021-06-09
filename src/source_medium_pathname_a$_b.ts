import { B, be_, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { writable, Writable } from '@ctx-core/store'
import { medium_pathname_a } from './medium_pathname_a'
import type { instagram_cache_Ctx } from './instagram_cache_Ctx'
const key = 'source_medium_pathname_a$'
export const source_medium_pathname_a$_b:B<instagram_cache_Ctx, typeof key> = be_(key, ()=>{
	const source_medium_pathname_a1 = writable(undefined) as source_medium_pathname_a$_T
	if (has_dom) {
		reload_source_medium_pathname_a1().then()
	}
	return assign(source_medium_pathname_a1, {
		reload_source_medium_pathname_a1,
	}) as source_medium_pathname_a$_T
	async function reload_source_medium_pathname_a1() {
		const medium_pathname_a1 = await medium_pathname_a()
		source_medium_pathname_a1.set(medium_pathname_a1)
	}
})
export type source_medium_pathname_a_T = string[]|undefined
export interface source_medium_pathname_a$_T extends Writable<source_medium_pathname_a_T> {
	reload_source_medium_pathname_a1:()=>Promise<void>
}
