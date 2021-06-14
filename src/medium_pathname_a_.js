import { fetch_medium_pathname_a } from './fetch_medium_pathname_a';
export async function medium_pathname_a_() {
    const response = await fetch_medium_pathname_a();
    const text = await response.text();
    return text.split('\n');
}
export { medium_pathname_a_ as _arr__pathname__medium };
//# sourceMappingURL=src/medium_pathname_a_.js.map