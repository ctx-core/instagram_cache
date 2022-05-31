import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { source_medium_pathname_a__ } from './source_medium_pathname_a__.js'
/** @type {import(medium_pathname_a__).medium_pathname_a__} */
export const medium_pathname_a__ = be_('medium_pathname_a__', ctx=>
	computed_(source_medium_pathname_a__(ctx),
		source_medium_pathname_a=>
			source_medium_pathname_a || []))
export { medium_pathname_a__ as medium_pathname_a$_ }
