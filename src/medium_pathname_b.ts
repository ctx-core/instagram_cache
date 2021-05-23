import { _b } from '@ctx-core/object'
import { derived$ } from '@ctx-core/store'
import { medium_pathname_a1_b } from './medium_pathname_a1_b'
import { medium_pathname_idx_b } from './medium_pathname_idx_b'
import type { instagram_cache_Ctx } from './instagram_cache_Ctx'
const key = 'medium_pathname'
export const medium_pathname_b = _b<instagram_cache_Ctx, typeof key>(key, ctx=>
	derived$([
			medium_pathname_a1_b(ctx),
			medium_pathname_idx_b(ctx),
		],
		([$medium_pathname_a1, $medium_pathname_idx])=>
			$medium_pathname_a1[$medium_pathname_idx]
	)
)
