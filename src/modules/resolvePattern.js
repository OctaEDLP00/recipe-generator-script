import { defaultPatternForType } from './defaultPatternForType.js'

/**
 * Interpret pattern argument.
 * Accepts:
 *  - JSON array string: '["X  ","XX ","XXX"]'
 *  - comma separated: 'X  ,XX ,XXX'
 *  - the special value 'auto'
 *
 * @param {string|boolean|undefined} patternArg
 * @param {string} type
 * @returns {import('../jsdoc.d.mjs').Pattern}
 */
export function resolvePattern(patternArg, type) {
  if (!patternArg || patternArg === "auto") {
    return defaultPatternForType(type);
  }
  const s = String(patternArg).trim();

  // intento parse JSON
  try {
    const parsed = JSON.parse(s);
    if (Array.isArray(parsed) && parsed.length === 3) {
      return /** @type {[string,string,string]} */ (parsed.map(String));
    }
  } catch (e) {
    // no es JSON
  }

  // si no, separo por comas
  const parts = s.split(",").map(p => p.trim());
  // si hay menos de 3, relleno con cadena vacía
  while (parts.length < 3) parts.push("");
  return /** @type {[string,string,string]} */ ([parts[0], parts[1], parts[2]]);
}
