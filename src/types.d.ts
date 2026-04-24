import { SLOT_TYPE, OPERATION_TYPE } from './const/index.ts'

export type Category = 'building' | 'misc' | 'equipment' | 'redstone'
export type Group = string
export type PatternRecipe = [string] | [string, string] | [string, string, string] | undefined
export type IngredientSlot = Array<string>
export type IngredientsSlotTuple = [
  IngredientSlot,
  IngredientSlot,
  IngredientSlot,
  IngredientSlot,
  IngredientSlot,
  IngredientSlot,
  IngredientSlot,
  IngredientSlot,
  IngredientSlot,
]
export type Ingredient = IngredientSlot | IngredientsSlotTuple
export interface ResultShaped {
  id: string
  count: number
}
export interface ResultShapeless {
  id: string
  count: number
  components: Components
}
type Slot = (typeof SLOT_TYPE)[keyof typeof SLOT_TYPE]
type Operation = (typeof OPERATION_TYPE)[keyof typeof OPERATION_TYPE]

export interface CraftRecipe<Result> {
  group?: Group
  category?: Category
  show_notification?: boolean
  result: Result
}

export interface CraftingShaped extends CraftRecipe<ResultShaped> {
  type: 'crafting_shaped'
  pattern: PatternRecipe
  key: Record<string, string>
}

export interface CraftingShapeless extends CraftRecipe<ResultShapeless> {
  type: 'crafting_shapeless'
  ingredients: Ingredient
}

interface AttackRange {
  hitbox_margin: number
  max_creative_reach: number
  max_reach: number
  min_creative_reach: number
  min_reach: number
  mob_factor: number
}

export type Recipe = CraftingShaped | CraftingShapeless

interface Components {}

export interface Opts {
  out?: string
  dry?: boolean
}
