#!/usr/bin/env node
import { parseArgs, type ParseArgsOptionsConfig } from 'node:util'
import { argv } from 'node:process'
import meow from 'meow'
// import * as Project from './src/index.js'

const cli = meow(
  `
  Usage
    recipe-generator <name> [options]

  Options
    --help -h
    --version -v      Package manager to use (npm, pnpm, yarn, bun, deno)
    --template, -t     Valid templates (vanilla, phaser, lit)
    --out, -o  Enable TypeScript support

  Examples
    recipe-generator my-app --template phaser --install
    recipe-generator my-app -t lit -pm pnpm -ts
    recipe-generator my-app -t vanilla -g
`,
  {
    importMeta: import.meta,
    flags: {
      help: { type: 'boolean', shortFlag: 'h' },
      version: { type: 'boolean', shortFlag: 'v' },
      template: { type: 'string', shortFlag: 't', default: 'all' },
      out: { type: 'string', shortFlag: 'o', default: import.meta.dirname },
      dry: { type: 'boolean' },
    },
  }
)

function run() {
  // const { input, flags } = cli
  console.dir(cli)
}

run()
