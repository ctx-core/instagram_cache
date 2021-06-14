import { JSDOM } from 'jsdom';
export function created_time_(medium) {
    const dom = new JSDOM(medium.html);
    const time = dom.window.document.querySelector('time');
    const datetime = time.getAttribute('datetime');
    return new Date(datetime).getTime();
}
//# sourceMappingURL=src/created_time_.js.map