import { _medium } from '@ctx-core/instagram'
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { _created_time } from './_created_time'
import { _medium_pathname_a1 } from './_medium_pathname_a1'
const dynamoDB = new DynamoDBClient({})
const TableName = 'instagram_media'
export async function put_all_media() {
	const current_medium_pathname_a1 = await _medium_pathname_a1()
	const promise_a1 = [] as Promise<void>[]
	for (let i = 0; i < current_medium_pathname_a1.length; i++) {
		const pathname = current_medium_pathname_a1[i]
		const Item = await _Item(pathname)
		promise_a1.push(put(pathname, Item))
	}
	return await Promise.all(promise_a1)
	async function put(_pathname, Item) {
		const putItemCommand = new PutItemCommand({
			TableName,
			Item,
			ConditionExpression: 'attribute_not_exists(pathname)',
		})
		try {
			await dynamoDB.send(putItemCommand)
			console.debug('success!', Item)
		} catch (err) {
			if (err.code != 'ConditionalCheckFailedException') {
				throw err
			}
		}
	}
}
export async function _Item(pathname) {
	const medium = await _medium(pathname)
	const created_time = _created_time(medium)
	const info = {}
	copy('title')
	copy('thumbnail_url')
	copy('thumbnail_width')
	copy('thumbnail_height')
	return {
		pathname,
		created_time,
		info
	}
	function copy(key) {
		if (medium[key]) info[key] = medium[key]
	}
}
