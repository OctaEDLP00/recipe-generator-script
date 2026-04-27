#!/usr/bin/env node
export type * from './src/global.js'
import meow from 'meow'
import { styleText } from 'node:util'
import { createRequire } from 'node:module'
const requireJson = createRequire(import.meta.filename)
const packageJson = requireJson('./package.json') as PackageJson
// import { generateOne, writeJson, defaultPatternForType } from './src/index.ts'

const cli = meow(
  `
  ${styleText('underline', 'Usage')}
    recipe-generator <name> [options]

  ${styleText('underline', 'Options')}
    --help -h             Show Help
    --out, -o             Set the output folder to write file/s
    --dry                 Don't show message to the create file/s
    --version -v          Show version CLI
    --template, -t        Set the template to create recipe. valid options ('all', 'trapdoor',
                          'stairs','slab', 'stick') by default is 'all'

  ${styleText('underline', 'Examples')}
    recipe-generator -o './my-folder'
    recipe-generator -t 'trapdoor' -o './my-folder'
    recipe-generator -t 'slab' -o './my-folder' --dry
`,
  {
    importMeta: import.meta,
    flags: {
      help: { type: 'boolean', shortFlag: 'h' },
      version: { type: 'string', shortFlag: 'v', default: packageJson.version },
      template: {
        type: 'string',
        shortFlag: 't',
        default: 'all',
        choices: ['all', 'trapdoor', 'stairs', 'slab', 'stick'],
      },
      out: { type: 'string', shortFlag: 'o', default: import.meta.dirname },
      dry: { type: 'boolean' },
    },
  }
)

function run() {
  const { flags } = cli
  const { dry, help, out, template, version } = flags
  console.log({ dry, help, out, template, version })
  if (dry) {
    // ejecutar silenciosamente
    if (out && template === 'all') {
      // generar todas las templates ('stairs', 'slabs', 'trapdoor', etc...)
    }
    if (out && template) {
      // generar el template especifico dentro de las opciones disponibles
    }
    if (version) return
  }
  if (version) {
    return version
  }
  if (out && template === 'all') {
    // generar todas las templates ('stairs', 'slabs', 'trapdoor', etc...)
  }
  if (out && template) {
    // generar el template especifico dentro de las opciones disponibles
  }
  if (help) {
    cli.showHelp()
  }
}

run()
