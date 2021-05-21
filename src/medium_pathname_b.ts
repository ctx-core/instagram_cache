import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { medium_pathname_a1_b } from './medium_pathname_a1_b'
import { medium_pathname_idx_b } from './medium_pathname_idx_b'
const key = 'medium_pathname'
export interface medium_pathname_Ctx {
	medium_pathname?:Readable$<string|undefined>
}
export const medium_pathname_b = _b(key, ctx=>
	derived$([
			medium_pathname_a1_b(ctx),
			medium_pathname_idx_b(ctx),
		],
		([$medium_pathname_a1, $medium_pathname_idx])=>
			$medium_pathname_a1[$medium_pathname_idx]
	)
)
