import { fetch_medium_pathname_a1 } from './fetch_medium_pathname_a1'
export async function _medium_pathname_a1() {
	const response = await fetch_medium_pathname_a1()
	const text = await response.text()
	return text.split('\n')
}
export {
	_medium_pathname_a1 as _arr__pathname__medium
}
