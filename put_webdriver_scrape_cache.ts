import { _medium_href_a1 } from './_medium_href_a1'
import { s3_put_medium_pathname_a1 } from './s3_put_medium_pathname_a1'
export async function put_webdriver_scrape_cache(options = {}) {
	const medium_pathname_a1 = await _medium_href_a1(options)
	console.info('medium_pathname_a1.length', medium_pathname_a1.length)
	await s3_put_medium_pathname_a1(medium_pathname_a1)
}
