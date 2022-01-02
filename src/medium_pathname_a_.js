import { fetch_medium_pathname_a } from './fetch_medium_pathname_a.js'
/** @type {import(medium_pathname_a_).medium_pathname_a_} */
export const medium_pathname_a_ = async ()=>{
	const response = await fetch_medium_pathname_a()
	const text = await response.text()
	return text.split('\n')
}
export { medium_pathname_a_ as _arr__pathname__medium }
