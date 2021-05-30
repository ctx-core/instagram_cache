import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { source_medium_pathname_a$_b } from './source_medium_pathname_a$_b'
import type { instagram_cache_Ctx } from './instagram_cache_Ctx'
const key = 'medium_pathname_a$'
export const medium_pathname_a$_b = _b<instagram_cache_Ctx, typeof key>(key, ctx=>
	derived$(source_medium_pathname_a$_b(ctx),
		source_medium_pathname_a1=>
			source_medium_pathname_a1 || []
	) as medium_pathname_a$_T
)
export interface medium_pathname_a$_T extends Readable$<string[]> {}
