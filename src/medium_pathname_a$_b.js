import { be_ } from '@ctx-core/object'
import { computed$ } from '@ctx-core/nanostores'
import { source_medium_pathname_a$_b } from './source_medium_pathname_a$_b.js'
const key = 'medium_pathname_a$'
/** @type {import(medium_pathname_a$_b).medium_pathname_a$_b} */
export const medium_pathname_a$_b = be_(key, (ctx)=>
	computed$(source_medium_pathname_a$_b(ctx),
		(source_medium_pathname_a)=>
			source_medium_pathname_a || []
	))
