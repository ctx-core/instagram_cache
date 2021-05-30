import { _b, B } from '@ctx-core/object'
import { _tuple } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import { medium_pathname_a$_b } from './medium_pathname_a$_b'
import { medium_pathname_idx$_b } from './medium_pathname_idx$_b'
import type { instagram_cache_Ctx } from './instagram_cache_Ctx'
const key = 'medium_pathname$'
export const medium_pathname$_b:B<instagram_cache_Ctx, typeof key> = _b(key, ctx=>
	derived$(_tuple(
		medium_pathname_a$_b(ctx),
		medium_pathname_idx$_b(ctx),
		),
		([medium_pathname_a, medium_pathname_idx])=>
			medium_pathname_a?.[medium_pathname_idx]
	)
)
export type medium_pathname$_T = Readable$<string>
