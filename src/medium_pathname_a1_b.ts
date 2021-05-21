import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { source_medium_pathname_a1_b, source_medium_pathname_a1_Ctx } from './source_medium_pathname_a1_b'
const key = 'medium_pathname_a1'
export interface medium_pathname_a1_Ctx extends source_medium_pathname_a1_Ctx {
	medium_pathname_a1?:medium_pathname_a1_T
}
export const medium_pathname_a1_b = _b<medium_pathname_a1_Ctx, typeof key>(key, ctx=>
	derived$(source_medium_pathname_a1_b(ctx),
		source_medium_pathname_a1=>
			source_medium_pathname_a1 || []
	) as medium_pathname_a1_T
)
export interface medium_pathname_a1_T extends Readable$<string[]> {}
