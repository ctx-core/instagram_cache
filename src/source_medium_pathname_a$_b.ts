import { has_dom } from '@ctx-core/dom'
import { B, be_, assign } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { medium_pathname_a_ } from './medium_pathname_a_.js'
const key = 'source_medium_pathname_a$'
export const source_medium_pathname_a$_b:B<source_medium_pathname_a$_T> = be_(key, ()=>{
	const source_medium_pathname_a$ = atom$(undefined) as source_medium_pathname_a$_T
	if (has_dom) {
		reload_source_medium_pathname_a().then()
	}
	return assign(source_medium_pathname_a$, {
		reload_source_medium_pathname_a,
	}) as source_medium_pathname_a$_T
	async function reload_source_medium_pathname_a() {
		const medium_pathname_a = await medium_pathname_a_()
		source_medium_pathname_a$.set(medium_pathname_a)
	}
})
export interface source_medium_pathname_a$_T extends WritableAtom$<string[]|undefined> {
	reload_source_medium_pathname_a:()=>Promise<void>
}
