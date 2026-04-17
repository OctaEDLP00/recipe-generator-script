import { buildRecipe } from './buildRecipe.js'
import { writeJson } from './writeJson.js';

const { log } = console

/**
 * Genera una receta para una madera + tipo + opciones
 * @param {import('../jsdoc.d.mjs').Name} name
 * @param {import('../jsdoc.d.mjs').Opts} opts
 */
export async function generateOne(name, opts) {
  /** @type {import('../jsdoc.d.mjs').CraftingShaped} */
  const props = {
    type: "crafting_shaped",
    group: opts.group,
    category: opts.category,
    key: {
      [opts.key]: opts.value
    },
    pattern: JSON.parse(opts.pattern),
    result: {
      count: opts.count,
      id: opts.id
    }
  };

  const recipe = buildRecipe(props);

  if (opts.dry) {
    log(`[DRY] Will write ${name}.json with content:`);
    log(JSON.stringify(recipe, null, 2));
  } else {
    await writeJson(opts.out, name, recipe);
    log(`✔️ Wrote ${name}.json`);
  }
}
