/**
 * @param {Minecraft.} type
 * @returns {Minecraft.PatternRecipe}
 */
export function defaultPatternForType(type: Minecraft.RecipeType): Minecraft.PatternRecipe {
  switch (type) {
    case 'stairs':
      return ['#  ', '## ', '###']
    case 'slab':
      return ['###']
    case 'trapdoor':
      return ['###', '###']
    case 'stick': // to me like caramel
      return ['#', '#']
    default:
      return ['', '', '']
  }
}
