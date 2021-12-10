import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { source_medium_pathname_a$_b } from './source_medium_pathname_a$_b.js'
const key = 'medium_pathname_a$'
export const medium_pathname_a$_b:B<medium_pathname_a$_T> = be_(key, ctx=>
	derived$(source_medium_pathname_a$_b(ctx),
		source_medium_pathname_a=>
			source_medium_pathname_a || []
	) as medium_pathname_a$_T
)
export type medium_pathname_a$_T = Readable$<string[]>
