#!/usr/bin/env node
import command_line_args from 'command-line-args'
import { put_webdriver_scrape_cache } from '@ctx-core/instagram_cache'
const options = command_line_args([
	{ name: 'reload', alias: 'r', type: Boolean, description: 'Reload full cache.' },
	{ name: 'help', alias: 'h', description: 'Print this usage guid.' },
])
put_webdriver_scrape_cache(options)
