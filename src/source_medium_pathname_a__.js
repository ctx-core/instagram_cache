import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { medium_pathname_a_ } from './medium_pathname_a_.js'
/** @type {import(source_medium_pathname_a__.d.ts)}.source_medium_pathname_a__ */
export const source_medium_pathname_a__ = be_('source_medium_pathname_a__', ()=>{
	const source_medium_pathname_a_ = atom_(undefined)
	if (has_dom) {
		reload_source_medium_pathname_a().then()
	}
	return assign(source_medium_pathname_a_, {
		reload_source_medium_pathname_a
	})
	async function reload_source_medium_pathname_a() {
		const medium_pathname_a = await medium_pathname_a_()
		source_medium_pathname_a_.set(medium_pathname_a)
	}
})
export { source_medium_pathname_a__ as source_medium_pathname_a$_ }
