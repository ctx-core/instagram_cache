#!/usr/bin/env node
require = require('esm')(module)
const command_line_args = require('command-line-args')
const { put__cache__scrape__webdriver } = require('@ctx-core/instagram_cache')
const options = command_line_args([
	{ name: 'reload', alias: 'r', type: Boolean, description: 'Reload full cache.' },
	{ name: 'help', alias: 'h', description: 'Print this usage guid.' },
])
put__cache__scrape__webdriver(options)
