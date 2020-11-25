import JSDOM from 'jsdom'
export function _created_time(medium) {
	const dom = new JSDOM(medium.html)
	const time = dom.window.document.querySelector('time')
	const datetime = time.getAttribute('datetime')
	return new Date(datetime).getTime()
}
