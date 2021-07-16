#!/usr/bin/env node
import command_line_args from 'command-line-args'
import { put_webdriver_scrape_cache } from '../dist/index.mjs'
const options = command_line_args([
	{ name: 'reload', alias: 'r', type: Boolean, description: 'Reload full cache.' },
	{ name: 'help', alias: 'h', description: 'Print this usage guid.' },
])
put_webdriver_scrape_cache(options)
