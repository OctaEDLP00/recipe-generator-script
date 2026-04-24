#!/usr/bin/env node
import { resolvePattern } from './src/modules/resolvePattern.js'
import { parseArgs } from 'node:util';
import { argv } from 'node:process';

const args = argv.slice(2);

const options = {
  pattern: { type: 'string', short: 'p' },
  type: { type: 'string', short: 't' },
  version: { type: 'boolean', short: 'v' },
  help: { type: 'boolean', short: 'h' }
};

const { values } = parseArgs({
  args,
  // @ts-ignore
  options
});

// @ts-ignore
const pattern = resolvePattern(values["pattern"], values["type"])
console.log(pattern)
