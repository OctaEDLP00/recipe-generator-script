import { TYPE_WOOD } from './const/index.js'

/**
 * @typedef {'building' | 'misc'| 'equipment' | 'redstone'} Category
 */

/**
 * @typedef {`${string}_${keyof typeof TYPE_WOOD}_${string}` | `${keyof typeof TYPE_WOOD}_${string}`} Name
 */

/**
 * @typedef {([string] | [string, string] | [string, string, string] | undefined)} Pattern
 */

/**
 * @typedef {Object} CraftingShaped
 * @property {"crafting_shaped"} type
 * @property {string} group
 * @property {Category} category
 * @property {{ [x: string]: string }} key
 * @property {Pattern} pattern
 * @property {{ count: number; id: string }} result
 */

/**
 * @typedef {Object} Opts
 * @property {string} pattern
 * @property {Category} category
 * @property {number} count
 * @property {string} id
 * @property {string} out
 * @property {boolean} dry
 * @property {string} value
 * @property {string} key
 * @property {string} group
 */
