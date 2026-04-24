import type { PatternRecipe } from "../types.d.ts"

/**
 * Defaults by type
 * @param {string} type
 * @returns {import('../jsdoc.d.mjs').PatternRecipe}
 */
export function defaultPatternForType(type: string): PatternRecipe {
  switch (type) {
    case "stairs": return [ "X  ", "XX ", "XXX" ]
    case "slab": return [ "XXX" ]
    case "trapdoor": return [ "XXX", "XXX" ]
    default:  return [ "XXX" ]
  }
}
