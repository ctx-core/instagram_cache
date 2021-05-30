import webdriver from 'selenium-webdriver'
import { sleep } from '@ctx-core/sleep'
import { medium_pathname_a } from './medium_pathname_a'
export async function medium_href_a_(opts:_medium_href_a1_opts_type = {}) {
	const {
		INSTAGRAM_NAME = process.env.INSTAGRAM_NAME,
		reload,
	} = opts
	const current_medium_pathname_a1 =
		reload
		? []
		: await medium_pathname_a()
	const current_media_set = new Set(current_medium_pathname_a1)
	const chrome_Capabilities = webdriver.Capabilities.chrome()
	chrome_Capabilities.set('chromeOptions', { args: ['--headless'] })
	const driver = new webdriver.Builder()
		.forBrowser('chrome')
		.withCapabilities(chrome_Capabilities)
		.build()
	await driver.get(`https://www.instagram.com/${INSTAGRAM_NAME}/`)
	let medium_href_a1 = current_medium_pathname_a1
	let iteration = { href_a1_length: 0, iteration_count: 0 }
	do {
		await driver.executeScript('window.scrollBy(0, window.innerHeight)')
		const href_a1 = JSON.parse(await driver.executeScript(`
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
		medium_href_a1 = [...new Set([...href_a1, ...medium_href_a1])]
		if (iteration.href_a1_length != medium_href_a1.length) {
			iteration = {
				href_a1_length: medium_href_a1.length,
				iteration_count: 0
			}
		} else {
			iteration.iteration_count += 1
		}
		if (_current_set_any(href_a1)) break
		await sleep(500)
		console.debug({ 'medium_href_a1.length': medium_href_a1.length })
	} while (iteration.iteration_count < 10)
	await driver.quit()
	return medium_href_a1
	function _current_set_any(href_a1:string[]) {
		for (let i = 0; i < href_a1.length; i++) {
			if (current_media_set.has(href_a1[i])) return true
		}
		return false
	}
}
interface _medium_href_a1_opts_type {
	INSTAGRAM_NAME?:string
	reload?:boolean
}
export {
	medium_href_a_ as _arr__href__medium
}
