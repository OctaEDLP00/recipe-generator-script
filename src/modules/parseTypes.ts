/**
 * Normalize types string into array
 * @param {string|boolean|undefined} types
 * @returns {string[]}
 */
export function parseTypes(types) {
  if (!types) return ["stairs", "slab", "trapdoor"]
  if (types === true) return ["stairs", "slab", "trapdoor"]
  return String(types).split(",").map(s => s.trim()).filter(Boolean)
}
