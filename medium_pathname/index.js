import { nullish__none_ } from '@ctx-core/function'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { medium_pathname_a$_ } from '../medium_pathname_a/index.js'
import { medium_pathname_idx$_ } from '../medium_pathname_idx/index.js'
export const [
	medium_pathname$_,
	medium_pathname_,
] = be_computed_pair_(
	ctx=>[
		medium_pathname_a$_(ctx),
		medium_pathname_idx$_(ctx)
	], ([medium_pathname_a, medium_pathname_idx])=>
		nullish__none_([medium_pathname_a, medium_pathname_idx], ()=>
			medium_pathname_a[medium_pathname_idx]),
	{ id: 'medium_pathname' })
export { medium_pathname$_ as medium_pathname__ }
