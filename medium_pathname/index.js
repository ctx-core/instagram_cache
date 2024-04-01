import { id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { medium_pathname_a_ } from '../medium_pathname_a/index.js'
import { medium_pathname_idx_ } from '../medium_pathname_idx/index.js'
export const [
	medium_pathname$_,
	medium_pathname_,
] = id_be_memo_pair_(
	'medium_pathname',
	ctx=>
		nullish__none_([medium_pathname_a_(ctx), medium_pathname_idx_(ctx)], (
			medium_pathname_a, medium_pathname_idx
		)=>medium_pathname_a[medium_pathname_idx]))
export { medium_pathname$_ as medium_pathname__ }
