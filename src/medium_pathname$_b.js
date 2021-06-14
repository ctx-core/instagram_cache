import { be_ } from '@ctx-core/object';
import { _tuple } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { medium_pathname_a$_b } from './medium_pathname_a$_b';
import { medium_pathname_idx$_b } from './medium_pathname_idx$_b';
const key = 'medium_pathname$';
export const medium_pathname$_b = be_(key, ctx => derived$(_tuple(medium_pathname_a$_b(ctx), medium_pathname_idx$_b(ctx)), ([medium_pathname_a, medium_pathname_idx]) => medium_pathname_a === null || medium_pathname_a === void 0 ? void 0 : medium_pathname_a[medium_pathname_idx]));
//# sourceMappingURL=src/medium_pathname$_b.js.map