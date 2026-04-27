#!/usr/bin/env node
import { parseArgs, type ParseArgsOptionsConfig } from 'node:util'
import { argv } from 'node:process'

const args = argv.slice(2)

const options = {
  // non optional options if not encountered options the cli crash (exit(-1))
  template: { type: 'string', short: 't' },
  out: { type: 'string', short: 'o', default: import.meta.dirname },
  // optional options
  dry: { type: 'boolean', default: false },
  // global options
  help: { type: 'boolean', default: false, short: 'h' },
  version: { type: 'boolean', default: false, short: 'v' },
} satisfies ParseArgsOptionsConfig

const { values, positionals } = parseArgs({ args, options })

console.dir(values, positionals)
