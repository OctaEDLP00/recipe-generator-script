/**
 * @constant
 */
export const WOOD_TYPE = {
  ACACIA: "acacia",
  BAMBOO: "bamboo",
  BIRCH: "birch",
  CHERRY: "cherry",
  CRIMSON: "crimson",
  DARK_OAK: "dark_oak",
  JUNGLE: "jungle",
  MANGROVE: "mangrove",
  OAK: "oak",
  PALE_OAK: "pale_oak",
  SPRUCE: "spruce",
  WARPED: "warped"
} as const

export const SLOT_TYPE = {
  ANY: "any",
  MAINHAND: "mainhand",
  OFFHAND: "offhand",
  HAND: "hand",
  ARMOR: "armor",
  SADDLE: "saddle",
  HEAD: "head",
  BODY: "body",
  CHEST: "chest",
  FEET: "feet",
  LEGS: "legs"
} as const

export const OPERATION_TYPE = {
  ADD_MULTIPLE_BASE: "add_multiplied_base",
  ADD_MULTIPLE_TOTAL: "add_multiplied_total",
  ADD_VALUE: "add_value"
} as const
