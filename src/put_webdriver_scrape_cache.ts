import { medium_href_a_ } from './medium_href_a_'
import { s3_put_medium_pathname_a } from './s3_put_medium_pathname_a'
export async function put_webdriver_scrape_cache(options = {}) {
	const medium_pathname_a1 = await medium_href_a_(options)
	console.info('medium_pathname_a1.length', medium_pathname_a1.length)
	await s3_put_medium_pathname_a(medium_pathname_a1)
}
