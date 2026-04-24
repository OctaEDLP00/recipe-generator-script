import { WOOD_TYPE } from './const/index'

/**
 * @typedef {'building' | 'misc'| 'equipment' | 'redstone'} Category
 * @typedef {string} Group
 * @typedef {([string] | [string, string] | [string, string, string] | undefined)} PatternRecipe
 *
 * @typedef {Array<string>} IngredientSlot
 * @typedef {IngredientSlot | [IngredientSlot?, IngredientSlot?, IngredientSlot?, IngredientSlot?, IngredientSlot?, IngredientSlot?, IngredientSlot?, IngredientSlot?, IngredientSlot?]} Ingredients
 *
 * @typedef {Object} CraftingShaped
 * @property {boolean} show_notification
 * @property {"crafting_shaped"} type
 * @property {Group} group
 * @property {Category} category
 * @property {{ [x: string]: string }} key
 * @property {PatternRecipe} pattern
 * @property {{ count: number; id: string }} result
 *
 * @typedef {Object} CraftingShapeless
 * @property {"crafting_shapeless"} type
 * @property {boolean} show_notification
 * @property {Group} group
 * @property {Category} category
 * @property {Ingredients} ingredients
 * @property {RecipeResult} result
 *
 * @typedef {keyof typeof WOOD_TYPE} Woods
 * @typedef {`${string}_${Woods}_${string}` | `${Woods}_${string}`} Name
 *
 * @typedef {Object} RecipeResult
 * @property {string} id - The item ID
 * @property {number} count - Optional item count
 * @property {Components} [components] - Data components for the result
 *
 * @typedef {Object} AttackRange
 * @property {number} hitbox_margin
 * @property {number} max_creative_reach
 * @property {number} max_reach
 * @property {number} min_creative_reach
 * @property {number} min_reach
 * @property {number} mob_factor
 *
 * @typedef {"any" | "mainhand" | "offhand" | "hand" | "armor" | "saddle" | "head" | "body" | "chest" | "feet" | "legs"} Slot
 * @typedef {"add_multiplied_base" | "add_multiplied_total" | "add_value"} Operation
 *
 * @typedef {Object} AttributeModifiers
 * @property {number} amount
 * @property {string} id
 * @property {Operation} operation
 * @property {string} type
 * @property {{ type: "default" | "hidden" | "override" }} display
 * @property {Slot} slot
 *
 * @typedef {Object} Bees
 * @property {{ id: string }} entity_data
 * @property {number} min_ticks_in_hive
 * @property {number} ticks_in_hive
 *
 * @typedef {"black" | "blue" | "nrown" | "cyan" | "gray" | "green" | "light_blue" | "light_gray" | "lime" | "magenta" | "orange" | "pink" | "purple" | "red" | "white" | "yellow"} Color
 * @typedef {"base" | "border" | "bricks" | "circle" | "creeper" | "cross" | "curly_border" | "diagonal_left" | "diagonal_right" | "diagonal_up_right" | "diagonal_up_left" | "flow" | "flower" | "globe" | "gradient" | "gradient_up" | "guster" | "half_horizontal" | "half_horizontal_bottom" | "half_horizontal_right" | "mojang" | "piglin" | "rhombus" | "skull" | "small_stripes" | "square_bottom_left" | "square_bottom_right" | "square_top_left" | "square_top_right" | "straight_cross" | "stripe_bottom" | "stripe_center" | "stripe_downleft" | "stripe_downright" | "stripe_left" | "stripe_middle" | "stripe_right" | "strippe_top" | "triangle_bottom" | "triangle_top" | "triangles_bottom" | "triangles_top"} Pattern
 *
 * @typedef {Object} BannerPattern
 * @property {Color} color
 * @property {Pattern} pattern
 *
 * @typedef {Object} BlocksAttacks
 * @property {number} block_delay_seconds
 * @property {string} block_sound
 * @property {string} bypassed_by
 * @property {Array<unknown>} damage_reductions
 * @property {number} disable_cooldown_scale
 * @property {string} disabled_sound
 * @property {{ base: number, factor: number, threshold: number }} item_damage
 *
 * @typedef {CustomNameObject | string} CustomName
 *
 * @typedef {Object} CustomNameObject
 * @property {*} block
 * @property {*} entity
 * @property {*} keybind
 * @property {*} nbt
 * @property {*} player
 * @property {*} score
 * @property {*} selector
 * @property {*} sprite
 * @property {*} storage
 * @property {*} text
 * @property {*} translate
 * @property {*} atlas
 * @property {*} bold
 * @property {*} click_event
 * @property {Color} color
 * @property {*} extra
 * @property {*} fallback
 * @property {*} font
 * @property {*} hat
 * @property {*} hover_event
 * @property {*} insertion
 * @property {*} interpret
 * @property {*} italic
 * @property {*} obfuscated
 * @property {*} object
 * @property {*} plain
 * @property {*} separator
 * @property {*} shadow_color
 * @property {*} source
 * @property {*} strikethrough
 * @property {*} type
 * @property {*} underline
 * @property {*} with
 *
 * @typedef {Object} ApplyEffects
 * @property {"apply_effects"} type
 *
 * @typedef {Object} ClearAllEffects
 * @property {"clear_all_effects"} type
 *
 * @typedef {Object} PlaySound
 * @property {"play_sound"} type
 *
 * @typedef {Object} RemoveEffects
 * @property {"remove_effects"} type
 *
 * @typedef {Object} TeleportRandomly
 * @property {"teleport_randomly"} type
 *
 * @typedef {ApplyEffects | ClearAllEffects | PlaySound | RemoveEffects | TeleportRandomly} DeathEffects
 *
 * @typedef {"aqua_affinity" | "lure"} EnchantmentKeys
 *
 * @typedef {Object} Components
 * @property {number} [additional_trade_cost]
 * @property {AttackRange} [attack_range]
 * @property {Array<AttributeModifiers>} [attribute_modifiers]
 * `axolotl/variant` add property
 * @property {Array<BannerPattern>} [banner_patterns]
 * @property {Color} [base_color]
 * @property {Array<Bees>} [bees]
 * @property {{ id: string }} [block_entity_data]
 * @property {{ [key: string]: string }} [block_state]
 * @property {*} [blocks_attacks]
 * @property {*} [break_sound]
 * @property {*} [bucket_entity_data]
 * @property {*} [bundle_contents]
 * @property {*} [can_break]
 * @property {*} [can_place_on]
 * `cat/collar` add property -> type Color
 * `cat/sound_variant` add property -> string
 * `cat/variant` add property -> type custom string "all black", ..., etc,
 * @property {*} [charged_projectiles]
 * `chicken/sound_variant` add property -> type string
 * `chicken/variant` add property -> type string "cold", "template", "warm"
 * @property {*} consumable
 * @property {*} container
 * @property {*} container_loot
 * "cow/sound_variant" -> type string
 * "cow/variant" -> type string "cold", "template", "warm"
 * @property {*} creative_slot_lock
 * @property {{ [key: string]: string }} custom_data
 * @property {*} custom_model_data
 * @property {CustomName} custom_name
 * @property {*} damage
 * @property {*} damage_resistant
 * @property {*} damage_type
 * @property {{ death_effects: Array<DeathEffects> }} death_protection
 * @property {*} debug_stick_state
 * @property {Color} dye
 * @property {*} dye_color
 * @property {{ value: string }} enchantable
 * @property {boolean} enchantment_glint_override
 * @property {{ [key in EnchantmentKeys]: number }} enchantments
 * @property {*} entity_data
 * @property {*} equippable
 * @property {*} firework_explosion
 * @property {*} fireworks
 * @property {*} food
 * fox/variant
 * frog/variant
 * @property {*} glider
 * horse/variant
 * @property {*} instrument
 * @property {*} intangible_projectile
 * @property {*} item_model
 * @property {*} item_name
 * @property {*} jukebox_playable
 * @property {*} kinetic_weapon
 * llama/variant
 * @property {*} lock
 * @property {*} lodestone_tracker
 * @property {*} lore
 * @property {*} map_color
 * @property {*} map_decorations
 * @property {*} map_id
 * @property {*} map_post_processing
 * @property {*} max_damage
 * @property {*} max_stack_size
 * @property {*} minimum_attack_charge
 * mooshroom/variant
 * @property {*} note_block_sound
 * @property {*} ominous_bottle_amplifier
 * painting/variant
 * parrot/variant
 * @property {*} piercing_weapon
 * pig/sound_variant
 * pig/variant
 * @property {*} pot_decorations
 * @property {*} potion_contents
 * @property {*} potion_duration_scale
 * @property {*} profile
 * @property {*} provides_banner_patterns
 * @property {*} provides_trim_material
 * rabbit/variant
 * @property {*} rarity
 * @property {*} recipes
 * @property {*} repair_cost
 * @property {*} repairable
 * salmon/size
 * sheep/color
 * shulker/color
 * @property {*} stored_enchantments
 * @property {*} suspicious_stew_effects
 * @property {*} swing_animation
 * @property {*} tool
 * @property {*} tooltip_display
 * @property {*} tooltip_style
 * @property {*} trim
 * tropical_fish/base_color
 * tropical_fish/pattern
 * tropical_fish/pattern_color
 * @property {*} unbreakable
 * @property {*} use_cooldown
 * @property {*} use_effects
 * @property {*} use_remainder
 * @property {*} weapon
 * wolf/collar
 * wolf/sound_variant
 * wolf/variant
 * @property {*} writable_book_content
 * @property {*} written_book_content
 * zombie_nautilus/variant
 *
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
