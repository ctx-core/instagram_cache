import { _b } from '@ctx-core/object'
import { derived, Readable } from '@ctx-core/store'
import { source_medium_pathname_a1_b } from './source_medium_pathname_a1_b'
export const medium_pathname_a1_b = _b('medium_pathname_a1', ctx=>
	derived(source_medium_pathname_a1_b(ctx),
		a1__pathname__medium__source=>
			a1__pathname__medium__source
			|| []) as Readable<string[]>
)
