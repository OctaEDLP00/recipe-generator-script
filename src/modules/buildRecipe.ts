import { CraftingShaped, CraftingShapeless, Recipe } from '~/types.js'

/**
 *
 * @param {Recipe} arg
 * @returns {boolean}
 */
function checkCraftingShaped(arg: Recipe): arg is CraftingShaped {
  return arg.type === 'crafting_shaped'
}

/**
 * Construye el objeto de receta JSO N (CraftingShaped).
 *
 * @param {import('../jsdoc.d.mjs').CraftingShaped} props
 * @returns {object}
 */
export function buildRecipe(props: Recipe): CraftingShaped | CraftingShapeless {
  if (checkCraftingShaped(props)) {
    return {
      type: props.type,
      group: props.group,
      category: props.category,
      key: props.key,
      pattern: props.pattern,
      result: {
        count: props.result.count,
        id: props.result.id,
      },
    }
  }
  return {
    type: props.type,
    ingredients: props.ingredients,
    result: props.result,
    category: props.category,
    group: props.group,
    show_notification: props.show_notification,
  }

  props
}
