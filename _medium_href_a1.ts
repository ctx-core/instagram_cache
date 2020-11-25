import webdriver from 'selenium-webdriver'
import { sleep } from '@ctx-core/sleep'
import { _medium_pathname_a1 } from './_medium_pathname_a1'
export async function _medium_href_a1(opts:_medium_href_a1_opts_type = {}) {
	const {
		INSTAGRAM_NAME = process.env.INSTAGRAM_NAME,
		reload,
	} = opts
	const a1__pathname__medium__current =
		reload
		? []
		: await _medium_pathname_a1()
	const set__media__current = new Set(a1__pathname__medium__current)
	const Capabilities__chrome = webdriver.Capabilities.chrome()
	Capabilities__chrome.set('chromeOptions', { args: ['--headless'] })
	const driver = new webdriver.Builder()
		.forBrowser('chrome')
		.withCapabilities(Capabilities__chrome)
		.build()
	await driver.get(`https://www.instagram.com/${INSTAGRAM_NAME}/`)
	let a1__href__medium = a1__pathname__medium__current
	let iteration = { length__a1__href: 0, count__iteration: 0 }
	do {
		await driver.executeScript('window.scrollBy(0, window.innerHeight)')
		const a1__href__ = JSON.parse(await driver.executeScript(`
function compact(array) {
	if (!array) return array
	for (let i = array.length; i >= 0; --i) {
		if (array[i] == null) {
			array.splice(i, 1)
		}
	}
	return array
}
return JSON.stringify(
	compact(
		Array.from(
			document.querySelectorAll('[href*="/p/"]')
		).map(a => a.href && new URL(a.href).pathname)
	)
)
		`.trim()))
		a1__href__medium = [...new Set([...a1__href__, ...a1__href__medium])]
		if (iteration.length__a1__href != a1__href__medium.length) {
			iteration = {
				length__a1__href: a1__href__medium.length,
				count__iteration: 0
			}
		} else {
			iteration.count__iteration += 1
		}
		if (_any__set__current(a1__href__)) break
		await sleep(500)
		console.debug({ 'a1__href__medium.length': a1__href__medium.length })
	} while (iteration.count__iteration < 10)
	driver.quit()
	return a1__href__medium
	function _any__set__current(a1__href__) {
		for (let i = 0; i < a1__href__.length; i++) {
			if (set__media__current.has(a1__href__[i])) return true
		}
		return false
	}
}
interface _medium_href_a1_opts_type {
	INSTAGRAM_NAME?:string
	reload?:boolean
}
export {
	_medium_href_a1 as _arr__href__medium
}
