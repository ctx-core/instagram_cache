import { JSDOM } from 'jsdom'
import type { Medium } from '@ctx-core/instagram'
export function _created_time(medium:Medium) {
	const dom = new JSDOM(medium.html)
	const time = dom.window.document.querySelector('time')!
	const datetime = time.getAttribute('datetime')!
	return new Date(datetime).getTime()
}
