import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { source_medium_pathname_a$_b } from './source_medium_pathname_a$_b';
const key = 'medium_pathname_a$';
export const medium_pathname_a$_b = be_(key, ctx => derived$(source_medium_pathname_a$_b(ctx), source_medium_pathname_a => source_medium_pathname_a || []));
//# sourceMappingURL=src/medium_pathname_a$_b.js.map