import { be_, assign } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { writable } from '@ctx-core/store';
import { medium_pathname_a_ } from './medium_pathname_a_';
const key = 'source_medium_pathname_a$';
export const source_medium_pathname_a$_b = be_(key, () => {
    const source_medium_pathname_a$ = writable(undefined);
    if (has_dom) {
        reload_source_medium_pathname_a().then();
    }
    return assign(source_medium_pathname_a$, {
        reload_source_medium_pathname_a,
    });
    async function reload_source_medium_pathname_a() {
        const medium_pathname_a = await medium_pathname_a_();
        source_medium_pathname_a$.set(medium_pathname_a);
    }
});
//# sourceMappingURL=src/source_medium_pathname_a$_b.js.map