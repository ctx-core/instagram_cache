import { medium_pathname_a__fetch_get } from '../medium_pathname_a__fetch_get/index.js'
/** @type {typeof import(medium_pathname_a_).medium_pathname_a_} */
export const medium_pathname_a_ = async ()=>{
	const response = await medium_pathname_a__fetch_get()
	const text = await response.text()
	return text.split('\n')
}
export { medium_pathname_a_ as _arr__pathname__medium }
