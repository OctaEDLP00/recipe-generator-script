import { writeJson } from './writeJson.js'
import { log } from 'node:console'

/**
 * Genera una receta para una madera + tipo + opciones
 *
 * @param {string} name
 * @param {CLI.Opts} opts
 */
export async function generateOne(type: Minecraft.Recipe['type'], name: string, opts: CLI.Opts) {
  const recipe = {}
  if (opts.dry) {
    log(`[DRY] Will write ${name}.json with content:`)
    await writeJson(opts.out, name, recipe)
    log(JSON.stringify(recipe, null, 2))
  } else {
    await writeJson(opts.out, name, recipe)
    log(`✔️ Wrote ${name}.json`)
  }
}
