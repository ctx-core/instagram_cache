import { fetch_medium_pathname_a } from './fetch_medium_pathname_a'
export async function medium_pathname_a() {
	const response = await fetch_medium_pathname_a()
	const text = await response.text()
	return text.split('\n')
}
export {
	medium_pathname_a as _arr__pathname__medium
}
