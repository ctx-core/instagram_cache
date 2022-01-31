import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { source_medium_pathname_a$_ } from './source_medium_pathname_a$_.js'
const key = 'medium_pathname_a$'
/** @type {import(medium_pathname_a$_).medium_pathname_a$_} */
export const medium_pathname_a$_ = be_(key, ctx=>
	computed$(source_medium_pathname_a$_(ctx),
		source_medium_pathname_a=>
			source_medium_pathname_a || []
	))
