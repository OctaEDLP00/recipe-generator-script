import type { Opts, Recipe } from '~/types.d.ts'
import { buildRecipe } from './buildRecipe.js'
import { writeJson } from './writeJson.js'
import { log } from 'node:console'

/**
 * Genera una receta para una madera + tipo + opciones
 *
 * @param {string} name
 * @param {Opts} opts
 */
export async function generateOne(type: Recipe['type'], name: string, opts: Opts) {
  const recipe = buildRecipe(props)

  if (opts.dry) {
    log(`[DRY] Will write ${name}.json with content:`)
    log(JSON.stringify(recipe, null, 2))
  } else {
    await writeJson(opts.out, name, recipe)
    log(`✔️ Wrote ${name}.json`)
  }
}
