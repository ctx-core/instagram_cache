import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { medium_pathname_a1_b } from './medium_pathname_a1_b'
import { medium_pathname_idx_b } from './medium_pathname_idx_b'
export const medium_pathname_b = _b('medium_pathname', ctx=>
	derived([
			medium_pathname_a1_b(ctx),
			medium_pathname_idx_b(ctx),
		],
		([$medium_pathname_a1, $medium_pathname_idx])=>
			$medium_pathname_a1[$medium_pathname_idx]
	)
)
