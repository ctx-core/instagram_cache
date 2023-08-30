import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { medium_pathname_a_ } from '../medium_pathname_a/index.js'
import { medium_pathname_idx_ } from '../medium_pathname_idx/index.js'
export const [
	medium_pathname$_,
	medium_pathname_,
] = val__be_computed_pair_('medium_pathname', ctx=>
	nullish__none_([
		medium_pathname_a_(ctx),
		medium_pathname_idx_(ctx)
	], (
		medium_pathname_a,
		medium_pathname_idx
	)=>medium_pathname_a[medium_pathname_idx]))
export { medium_pathname$_ as medium_pathname__ }
