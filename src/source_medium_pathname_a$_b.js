import { has_dom } from '@ctx-core/dom'
import { be_, assign } from '@ctx-core/object'
import { atom$ } from '@ctx-core/nanostores'
import { medium_pathname_a_ } from './medium_pathname_a_.js'
const key = 'source_medium_pathname_a$'
/** @type {import(source_medium_pathname_a$_b.d.ts)}.source_medium_pathname_a$_b */
export const source_medium_pathname_a$_b = be_(key, ()=>{
	const source_medium_pathname_a$ = atom$(undefined)
	if (has_dom) {
		reload_source_medium_pathname_a().then()
	}
	return assign(source_medium_pathname_a$, {
		reload_source_medium_pathname_a
	})
	async function reload_source_medium_pathname_a() {
		const medium_pathname_a = await medium_pathname_a_()
		source_medium_pathname_a$.set(medium_pathname_a)
	}
})
