import { has_dom } from '@ctx-core/dom'
import { atom$ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { medium_pathname_a_ } from './medium_pathname_a_.js'
/** @type {import(source_medium_pathname_a$_.d.ts)}.source_medium_pathname_a$_ */
export const source_medium_pathname_a$_ = be_('source_medium_pathname_a$', ()=>{
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
