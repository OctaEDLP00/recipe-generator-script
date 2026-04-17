/**
 * Defaults by type
 * @param {string} type
 * @returns {import('../jsdoc.d.mjs').Pattern}
 */
export function defaultPatternForType(type) {
  switch (type) {
    case "stairs": return [ "X  ", "XX ", "XXX" ]
    case "slab": return [ "XXX" ]
    case "trapdoor": return [ "XXX", "XXX" ]
    default:  return [ "XXX" ]
  }
}
