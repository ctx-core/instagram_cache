import { _tuple } from '@ctx-core/array'
import { be_, B } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { medium_pathname_a$_b } from './medium_pathname_a$_b.js'
import { medium_pathname_idx$_b } from './medium_pathname_idx$_b.js'
const key = 'medium_pathname$'
export const medium_pathname$_b:B<medium_pathname$_T> = be_(key, ctx=>
	derived$(_tuple(
		medium_pathname_a$_b(ctx),
		medium_pathname_idx$_b(ctx),
		),
		([medium_pathname_a, medium_pathname_idx])=>
			medium_pathname_a?.[medium_pathname_idx]
	)
)
export type medium_pathname$_T = Readable$<string>
