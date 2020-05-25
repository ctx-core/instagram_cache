#!/usr/bin/env node
import command_line_args from 'command-line-args'
const options = command_line_args([
	{ name: 'reload', alias: 'r', type: Boolean, description: 'Reload full cache.' },
	{ name: 'help', alias: 'h', description: 'Print this usage guid.' },
])
import { put__cache__scrape__webdriver } from '@ctx-core/instagram_cache'
put__cache__scrape__webdriver(options)
