import { be_, assign } from '@ctx-core/object';
import { next_idx_, prev_idx_ } from '@ctx-core/array';
import { writable$ } from '@ctx-core/store';
import { medium_pathname_a$_b } from './medium_pathname_a$_b';
const key = 'medium_pathname_idx$';
export const medium_pathname_idx$_b = be_(key, ctx => {
    const medium_pathname_idx = writable$(0);
    const medium_pathname_a = medium_pathname_a$_b(ctx);
    return assign(medium_pathname_idx, {
        next_medium_pathname,
        prev_medium_pathname,
    });
    function next_medium_pathname() {
        const { length } = medium_pathname_a.$;
        medium_pathname_idx.update(medium_pathname_idx => next_idx_(length, medium_pathname_idx));
    }
    function prev_medium_pathname() {
        const { length } = medium_pathname_a.$;
        medium_pathname_idx.update(medium_pathname_idx => prev_idx_(length, medium_pathname_idx));
    }
});
//# sourceMappingURL=src/medium_pathname_idx$_b.js.map