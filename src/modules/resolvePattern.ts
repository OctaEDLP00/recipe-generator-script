import type { PatternRecipe } from '../types.d.ts'
import { defaultPatternForType } from './defaultPatternForType.js'

/**
 * Interpret pattern argument. Accepts:
 *
 * - JSON array string: '["X ","XX ","XXX"]'
 * - Comma separated: 'X ,XX ,XXX'
 * - The special value 'auto'
 *
 * @param {import('../jsdoc.d.mjs').PatternRecipe | 'auto' | undefined} patternArg
 * @param {string} type
 * @returns {import('../jsdoc.d.mjs').PatternRecipe}
 */
export function resolvePattern(patternArg: PatternRecipe | 'auto' | undefined, type: string): PatternRecipe {
  if (patternArg == null || patternArg === 'auto') {
    return defaultPatternForType(type)
  }
  const parsed = JSON.parse(patternArg as any as string)
  if (Array.isArray(parsed) && parsed.length === 3) {
    return parsed as PatternRecipe
  }
}
