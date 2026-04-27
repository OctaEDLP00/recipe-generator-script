import {
  AXOLOTL_VARIANT_TYPE,
  BANNER_PATTERNS_TYPE,
  CAT_VARIANT_TYPE,
  COLOR_TYPE,
  OPERATION_TYPE,
  SLOT_TYPE,
} from './const/index'

declare global {
  /** Basic representation of a person in package metadata. */
  export interface Person {
    name: string
    url?: string
    email?: string
  }

  /** List of common SPDX licenses with a string fallback. */
  export type License =
    | 'AGPL-3.0-only'
    | 'Apache-2.0'
    | 'BSD-2-Clause'
    | 'BSD-3-Clause'
    | 'BSL-1.0'
    | 'CC0-1.0'
    | 'CDDL-1.0'
    | 'CDDL-1.1'
    | 'EPL-1.0'
    | 'EPL-2.0'
    | 'GPL-2.0-only'
    | 'GPL-3.0-only'
    | 'ISC'
    | 'LGPL-2.0-only'
    | 'LGPL-2.1-only'
    | 'LGPL-2.1-or-later'
    | 'LGPL-3.0-only'
    | 'LGPL-3.0-or-later'
    | 'MIT'
    | 'MPL-2.0'
    | 'MS-PL'
    | 'UNLICENSED'
    | (string & {}) // The & {} trick allows autocomplete for literals while accepting any string

  /** Metadata for legacy license formats. */
  export interface DeprecatedLicense {
    type?: License
    url?: string
  }

  /** Methods of funding for the package. */
  export interface FundingWay {
    url: string
    type?: string
  }

  /** Directories structure for the package. */
  export interface Directories {
    bin?: string
    doc?: string
    example?: string
    lib?: string
    man?: string
    test?: string
  }

  /** Distribution metadata for the registry. */
  export interface Dist {
    shasum?: string
    tarball?: string
  }

  /** Execution environment constraints. */
  export interface ExecutionEnv {
    nodeVersion?: string
  }

  /** Configuration for ESNext compatibility. */
  export interface ESNextConfig {
    main?: string
    browser?: string
    [key: string]: string | undefined
  }

  /** Dependency requirement for development engines. */
  export interface DevEngineDependency {
    name: string
    version?: string
    onFail?: 'ignore' | 'warn' | 'error' | 'download'
  }

  /** Keys for standard npm scripts. */
  export type ScriptsKeys =
    | 'install'
    | 'lint'
    | 'postinstall'
    | 'postpack'
    | 'postpublish'
    | 'postrestart'
    | 'poststart'
    | 'poststop'
    | 'posttest'
    | 'postuninstall'
    | 'postversion'
    | 'preinstall'
    | 'prepack'
    | 'prepare'
    | 'prepublish'
    | 'prepublishOnly'
    | 'prerestart'
    | 'prestart'
    | 'prestop'
    | 'pretest'
    | 'preuninstall'
    | 'preversion'
    | 'publish'
    | 'restart'
    | 'serve'
    | 'start'
    | 'stop'
    | 'test'
    | 'uninstall'
    | 'version'

  /** Detailed repository metadata. */
  export interface RepositoryObject {
    type?: string
    url: string
    directory?: string
  }

  export type Repository = RepositoryObject | string

  /** Issue tracking information. */
  export type Bugs = { url?: string; email?: string } | string

  /** SemVer version patterns. */
  export type VersionDependencies =
    | `${number}.${number}.${number}`
    | `^${number}.${number}.${number}`
    | `~${number}.${number}.${number}`
    | (string & {})

  /** Generic dependency mapping. */
  export interface Dependency {
    [packageName: string]: VersionDependencies
  }

  export type DevDependency = Dependency
  export type OptionalDependency = Dependency
  export type PeerDependency = Dependency

  /** Metadata for peer dependencies. */
  export interface PeerDependencyMeta {
    [packageName: string]: { optional?: boolean }
  }

  /** Rules for peer dependency resolution. */
  export interface PeerDependencyRules {
    ignoreMissing?: Array<string>
    allowedVersions?: { [key: string]: string }
    allowAny?: Array<string>
  }

  /** Update logic configuration. */
  export interface UpdateConfig {
    ignoreDependencies?: Array<string>
  }

  /** Security audit exceptions. */
  export interface AuditConfig {
    ignoreCves?: Array<string>
    ignoreGhsas?: Array<string>
  }

  /** Hardware and OS constraints for pnpm. */
  export interface SupportedArchitectures {
    os?: Array<string>
    cpu?: Array<string>
    libc?: Array<string>
  }

  /** Pnpm specific configuration in package.json. */
  export interface PnpmConfig {
    overrides?: { [key: string]: any }
    packageExtensions?: { [key: string]: any }
    allowedDeprecatedVersions?: { [key: string]: { [key: string]: string } }
    patchedDependencies?: { [key: string]: { [key: string]: string } }
    allowNonAppliedPatches?: boolean
    allowUnusedPatches?: boolean
    configDependencies?: { [key: string]: string }
    neverBuiltDependencies?: Array<string>
    onlyBuiltDependencies?: Array<string>
    onlyBuiltDependenciesFile?: string
    ignoredBuiltDependencies?: Array<string>
    requiredScripts?: Array<string>
    peerDependencyRules?: PeerDependencyRules
    updateConfig?: UpdateConfig
    auditConfig?: AuditConfig
    supportedArchitectures?: SupportedArchitectures
    ignoredOptionalDependencies?: Array<string>
    executionEnv?: ExecutionEnv
  }

  /** Stackblitz environment configuration. */
  export interface StackblitzConfig {
    installDependencies?: boolean
    startCommand?: string | boolean
    compileTrigger?: 'auto' | 'keystroke' | 'save'
    env?: { [key: string]: string }
  }

  /** Version and Name formats using Template Literals. */
  export type Version = `${number}.${number}.${number}`
  export type FormatName = `@${string}/${string}`

  /** Complete representation of a package.json file. */
  export interface PackageJson {
    name?: string | FormatName
    version?: Version
    description?: string
    keywords?: Array<string>
    homepage?: string
    bugs?: Bugs
    license?: License
    licenses?: Array<DeprecatedLicense>
    author?: Person
    contributors?: Array<Person>
    maintainers?: Array<Person>
    files?: Array<string>
    main?: string
    bin?: string | { [key: string]: string }
    type?: 'commonjs' | 'module'
    types?: string
    typings?: string
    typesVersions?: { [key: string]: Array<string> }
    man?: string | Array<string>
    directories?: Directories
    repository?: Repository
    funding?: FundingWay | string | Array<FundingWay | string>
    scripts?: { [key in ScriptsKeys]?: string } & { [key: string]: string | undefined }
    config?: { [key: string]: any }
    dependencies?: Dependency
    devDependencies?: DevDependency
    optionalDependencies?: OptionalDependency
    peerDependencies?: PeerDependency
    peerDependenciesMeta?: PeerDependencyMeta
    bundleDependencies?: Array<string> | boolean
    bundledDependencies?: Array<string> | boolean
    resolutions?: { [key: string]: any }
    overrides?: { [key: string]: any }
    packageManager?: string
    engines?: { [key: string]: string }
    volta?: { [key: string]: string }
    engineStrict?: boolean
    os?: Array<string>
    cpu?: Array<string>
    devEngines?: { [key: string]: DevEngineDependency }
    preferGlobal?: boolean | 'true' | 'false'
    private?: boolean | 'true' | 'false'
    publishConfig?: { [key: string]: any }
    dist?: Dist
    readme?: string
    module?: string
    esnext?: string | ESNextConfig
    workspaces?: Array<string> | { packages?: Array<string>; nohoist?: Array<string> }
    jspm?: PackageJson
    eslintConfig?: any
    prettier?: any
    stylelint?: any
    ava?: any
    release?: any
    jscpd?: any
    pnpm?: PnpmConfig
    stackblitz?: StackblitzConfig
    [key: `_${string}`]: any // Matches the "_key" pattern mentioned
  }

  export namespace UtilityTypes {
    /** Internal helper to build the tuple. Uses a recursive approach to reach the desired length. */
    export type BuildTuple<T, N extends number, Current extends T[] = []> =
      Current['length'] extends N ? Current : BuildTuple<T, N, [...Current, T]>

    /**
     * Creates a collection (tuple) of a specific fixed length. Example: Collection<number, 3> -> [number, number,
     * number]
     */
    export type Collection<T, N extends number> = BuildTuple<T, N>
  }

  export namespace CLI {
    export interface Opts {
      out: string
      dry?: boolean
      template: ''
    }
  }

  export namespace Minecraft {
    export type Category = 'building' | 'misc' | 'equipment' | 'redstone'

    export type PatternRecipe = [string] | [string, string] | [string, string, string] | undefined

    export type Tag = `#${string}` | `#minecraft:${string}`

    export type Group = string

    export type IngredientSlot = Array<string | Tag>

    export type IngredientsSlotTuple = [
      IngredientSlot?,
      IngredientSlot?,
      IngredientSlot?,
      IngredientSlot?,
      IngredientSlot?,
      IngredientSlot?,
      IngredientSlot?,
      IngredientSlot?,
      IngredientSlot?,
    ]

    export type Ingredient = IngredientSlot | IngredientsSlotTuple

    export interface Result {
      id: string
      count: number
      components?: Components
    }

    export interface ResultShaped extends Result {}
    export interface ResultShapeless extends Result {}

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

    export type Recipe = CraftingShaped | CraftingShapeless

    export type RecipeType = 'stairs' | 'slab' | 'trapdoor' | 'stick' | ''

    export type Pattern = (typeof BANNER_PATTERNS_TYPE)[keyof typeof BANNER_PATTERNS_TYPE]

    export type Color = (typeof COLOR_TYPE)[keyof typeof COLOR_TYPE]

    export interface Components {
      additional_trade_cost?: number
      attack_range?: Components.AttackRange
      attribute_modifiers?: Array<Components.AttributeModifier>
      'axolotl/variant'?: Components.AxolotlVariant
      banner_patterns?: Array<Components.BannerPattern>
      base_color?: Color
      bees?: Array<Components.Bees>
      block_entity_data?: Components.BlockEntityData
      block_state?: Components.BlockState
      blocks_attacks?: Components.BlockAttack
      break_sound?: Components.BreakSound
      bucket_entity_data?: Components.BucketEntityData
      bundle_contents?: Array<string> | Components.BundleContent
      can_break?: Components.CanBreak
      can_place_on?: Components.CanPlaceOn
      'cat/collar'?: Color
      'cat/sound_variant'?: string
      'cat/variant'?: Components.CatVariant
      charged_projectiles?: Array<Components.ChargedProjectile>
      'chicken/sound_variant'?: string
      'chicken/variant'?: string
      consumable?: Components.Consumable
      container?: Array<Components.Container>
      container_loot?: Components.ContainerLoot
      'cow/sound_variant'?: string
      'cow/variant'?: string
      creative_slot_lock?: Components.CreativeSlotLock
      custom_data?: Components.CustomData
      custom_model_data?: Components.CustomModelData
      custom_name?: Components.CustomName
      damage?: number
      damage_resistant?: Components.DamageResistant
      damage_type?: Components.DamageType
      death_protection?: Components.DeathProtection
      debug_stick_state?: Components.DebugStickState
      dye?: Color
      dyed_color?: UtilityTypes.Collection<number, 3>
      enchantable?: Components.Enchantable
      enchantment_glint_override?: boolean
      enchantments?: Components.Enchantment
      entity_data?: Components.EntityData
      equippable?: Components.Equippable
      firework_explosion?: Components.FireworkExplosion
      fireworks?: Components.Fireworks
      food?: Components.Food
      'fox/variant'?: Components.FoxVariant
      'frog/variant'?: Components.FrogVariant
      glider?: Components.Glider
      'horse/variant'?: Components.HorseVariant
      instrument?: Components.Instrument
      intangible_projectile?: Components.IntangibleProjectile
      item_model?: string
      item_name?: Components.ItemName
      jukebox_playable?: Components.JukeboxPlayable
      kinetic_weapon?: Components.KineticWeapon
      'llama/variant'?: Components.LlamaVariant
      lock?: Components.Lock
      lodestone_tracker?: Components.LodestoneTracker
      lore?: Array<Components.Lore>
      map_color?: number
      map_decorations?: Components.MapDecoration
      map_id?: number
      map_post_processing?: Components.MapPostProcessing
      max_damage?: number
      max_stack_size?: number
      minimum_attack_charge?: number
      'mooshroom/variant'?: Components.MooshroomVariant
      note_block_sound?: string
      ominous_bottle_amplifier?: number
      'painting/variant'?: Components.PaintingVariant
      'parrot/variant'?: Components.ParrotVariant
      piercing_weapon?: Components.PiercingWeapon
      'pig/sound_variant'?: Components.PigSoundVariant
      'pig/variant'?: Components.PigVariant
      pot_decorations?: Array<Components.PotDecoration>
      potion_contents?: Components.PotionContent
      potion_duration_scale?: number
      profile?: Components.Profile
      provides_banner_patterns?: string
      provides_trim_material?: string
      'rabbit/variant'?: Components.RabbitVariant
      rarity?: string
      recipes?: Array<string>
      repair_cost?: number
      repairable?: Components.Repairable
      'salmon/size'?: string
      'sheep/color'?: string
      'shulker/color'?: string
      stored_enchantments?: Components.StoredEnchantment
      suspicious_stew_effects?: Array<Components.SuspiciousStewEffect>
      swing_animation?: Components.SwingAnimation
      tool?: Components.Tool
      tooltip_display?: Components.TooltipDisplay
      /**
       * The [resource location](https://wiki/w/Resource_location) of the custom sprites for
       * the[tooltip](https://wiki/w/Tooltip) background and frame which references textures
       * /assets/`<namespace>`/textures/gui/sprites/tooltip/`<id>`https://wiki/w/Tooltip_background and
       * /assets/`<namespace>`/textures/gui/sprites/tooltip/`<id>`_frame. Instead of falling back to the default value,
       * invalid specifications will use the [missing texture](https://wiki/w/Missing_texture).
       */
      tooltip_style?: string
      trim?: Components.Trim
      'tropical_fish/base_color'?: Color
      'tropical_fish/pattern'?: Components.TropicalFishPattern
      'tropical_fish/pattern_color'?: Color
      unbreakable?: Components.Unbreakable
      use_cooldown?: Components.UseCooldown
      use_effects?: Components.UseEffect
      use_remainder?: Components.UseRemainder
      'villager/variant'?: Components.VillagerVariant
      weapon?: Components.Weapon
      'wolf/collar'?: Components.WolfCollar
      'wolf/sound_variant'?: Components.WolfSoundVariant
      'wolf/variant'?: Components.WolfVariant
      writable_book_content?: Components.WritableBookContent
      written_book_content?: Components.WrittenBookContent
      'zombie_nautilus/variant'?: string
    }

    export namespace Components {
      export interface AttackRange {
        hitbox_margin: number
        max_creative_reach: number
        max_reach: number
        min_creative_reach: number
        min_reach: number
        mob_factor: number
      }

      export interface Display {
        type: 'default' | 'hidden' | 'override'
      }

      type Slot = (typeof SLOT_TYPE)[keyof typeof SLOT_TYPE]

      type Operation = (typeof OPERATION_TYPE)[keyof typeof OPERATION_TYPE]

      export interface AttributeModifier {
        amount: number
        id: string
        operation: Operation
        type: string
        display: Display
        slot: Slot
      }

      export type AxolotlVariant = (typeof AXOLOTL_VARIANT_TYPE)[keyof typeof AXOLOTL_VARIANT_TYPE]

      export interface BannerPattern {
        type: Pattern
        color: Color
      }

      export interface Bees {
        entity_data: { id: string }
        min_ticks_in_hive: number
        ticks_in_hive: number
      }

      export type BlockEntityData = { id: string }

      export type BlockState = { [key: string]: string | boolean | number }

      export interface DamageReduction {
        base: number
        factor: number
        horizontal_blocking_angle: number
        type: string
      }

      export interface ItemDamage {
        base: number
        factor: number
        threshold: number
      }

      export interface BlockAttack {
        block_delay_seconds: number
        block_sound: string
        bypassed_by: string
        damage_reductions: Array<DamageReduction>
        disable_cooldown_scale: number
        disabled_sound: string
        item_damage: ItemDamage
      }

      export interface BreakSound {
        sound_id: string
        range: number
      }

      export interface BucketEntityData {
        Glowing?: boolean
        Health?: number
        HuntingCooldown?: number
        Invulnerable?: boolean
        NoAI?: boolean
        NoGravity?: boolean
        Silent?: boolean
      }

      export interface BundleContent {
        id: string
        components?: Components
        count?: number
      }

      export interface Predicate {}

      export interface State {}

      export interface CanBreak {
        blocks: Tag | Array<string>
        components: Components
        nbt: NBT.NBT
        predicates: Predicate
        state: State
      }

      export interface CanPlaceOn {
        blocks: Tag | Array<string>
        components: Components
        nbt: NBT.NBT
        predicates: Predicate
        state: State
      }

      type CatVariant = (typeof CAT_VARIANT_TYPE)[keyof typeof CAT_VARIANT_TYPE]

      export interface ChargedProjectile {}

      export interface Consumable {}

      export interface Container {}

      export interface ContainerLoot {}

      export interface CreativeSlotLock {}

      export interface CustomData {}

      export interface CustomModelData {}

      export interface CustomName {}

      export interface DamageResistant {}

      export interface DamageType {}

      export interface DeathProtection {}

      export interface DebugStickState {}

      export interface Enchantable {}

      export interface Enchantment {}

      export interface EntityData {}

      export interface Equippable {}

      export interface FireworkExplosion {}

      export interface Fireworks {}

      export interface Food {}

      export interface FoxVariant {}

      export interface FrogVariant {}

      export interface Glider {}

      export interface HorseVariant {}

      export interface Instrument {}

      export interface IntangibleProjectile {}

      export interface ItemName {}

      export interface JukeboxPlayable {}

      export interface KineticWeapon {}

      export interface LlamaVariant {}

      export interface Lock {}

      export interface LodestoneTracker {}

      export interface Lore {}

      export interface MapDecoration {}

      export interface MapPostProcessing {}

      export interface MooshroomVariant {}

      export interface PaintingVariant {}

      export interface ParrotVariant {}

      export interface PiercingWeapon {}

      export interface PigSoundVariant {}

      export interface PigVariant {}

      export interface PotDecoration {}

      export interface PotionContent {}

      export interface Profile {}

      export interface RabbitVariant {}

      export interface Repairable {}

      export interface StoredEnchantment {}

      export interface SuspiciousStewEffect {}

      export interface SwingAnimation {}

      export interface Tool {}

      export interface TooltipDisplay {}

      export interface Trim {}

      export interface TropicalFishPattern {}

      export interface Unbreakable {}

      export interface UseCooldown {}

      export interface UseEffect {}

      export interface UseRemainder {}

      export interface VillagerVariant {}

      export interface Weapon {}

      export interface WolfCollar {}

      export interface WolfSoundVariant {}

      export interface WolfVariant {}

      export interface WritableBookContent {}

      export interface WrittenBookContent {}
    }

    export namespace NBT {
      type NBT = NBTCollection | NBTPig

      export interface NBTCollection {}

      export interface NBTPig extends NBTCollection {}
    }
  }
}

export {}
