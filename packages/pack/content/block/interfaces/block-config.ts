import { ColorValue } from '../../../content/common/types/color-value';
import { ItemMenuCategory } from '../../item/interfaces/item-menu-category';
import { BlockTags } from '../components/tags';

// Interface for block states
export interface BlockStates {
  [key: string]:
    | string[]
    | { values: { min: number; max: number } }
    | number[]
    | boolean[];
}

// Interface for block traits
export interface BlockTraits {
  /**
   * Placement direction trait
   */
  placementDirection?: {
    states?: ('minecraft:cardinal_direction' | 'minecraft:facing_direction')[];
    yRotation?: 90 | 180 | 270 | -90 | -180 | -270;
  };

  /**
   * Placement position trait
   */
  placementPosition?: {
    states?: ('minecraft:block_face' | 'minecraft:vertical_half')[];
  };
}

// Interface for block permutation
export interface BlockPermutationConfig {
  /**
   * Condition describing when this permutation is applied
   */
  condition: BlockPermutationCondition;

  /**
   * Components for this permutation
   */
  components: BlockComponents;
}

export interface BlockPermutationCondition {
  /**
   * A Molang expression that evaluates to true or false
   */
  query?: string;
  /**
   * Block States for this permutation
   */
  states?: {
    [key: string]: string[] | number[] | boolean[];
  };
}

// Block component types
export type Vector3 = [number, number, number];

// Interface for collision box component
export interface CollisionBoxComponent {
  origin?: Vector3;
  size?: Vector3;
}

// Interface for crafting table component
export interface CraftingTableComponent {
  craftingTags?: string[];
  tableName?: string;
}

// Interface for destructible by explosion component
export interface DestructibleByExplosionComponent {
  /**
   * Describes how resistant the block is to explosion. Greater values mean the block is less likely to break when near an explosion (or has higher resistance to explosions). The scale will be different for different explosion power levels. A negative value or 0 means it will easily explode; larger numbers increase level of resistance.
   */
  explosionResistance?: number;
}

// Interface for destructible by mining component
export interface DestructibleByMiningComponent {
  secondsToDestroy?: number;
  itemSpecificSpeeds?: Array<{
    item: string | { tags: string };
    destroySpeed: number;
  }>;
}

// Interface for destruction particles component
export interface DestructionParticlesComponent {
  texture?: string;
  tintMethod?: string;
}

// Interface for flammable component
export interface FlammableComponent {
  catchChanceModifier?: number;
  destroyChanceModifier?: number;
}

// Interface for geometry component
export interface GeometryComponent {
  identifier: string;
  boneVisibility?: Record<string, boolean | string>;
  culling?: string;
  cullingLayer?: string;
}

// Interface for item visual component
export interface ItemVisualComponent {
  geometry: string | GeometryComponent;
  materialInstances: MaterialInstancesComponent;
}

// Interface for liquid detection component
export interface LiquidDetectionComponent {
  detectionRules?: Array<{
    canContainLiquid?: boolean;
    liquidType?: 'water';
    onLiquidTouches?: 'blocking' | 'broken' | 'popped' | 'no_reaction';
    stopsLiquidFlowingFromDirection?: Array<
      'up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all'
    >;
  }>;
}

// Interface for material instances component
export interface MaterialInstancesComponent {
  [face: string]:
    | string
    | {
        ambientOcclusion?: boolean | number;
        faceDimming?: boolean;
        renderMethod?:
          | 'opaque'
          | 'double_sided'
          | 'blend'
          | 'alpha_test'
          | 'alpha_test_single_sided'
          | 'blend_to_opaque'
          | 'alpha_test_to_opaque'
          | 'alpha_test_single_sided_to_opaque';
        texture?: string;
        isotropic?: boolean;
        tintMethod?: string;
      };
}

// Interface for placement filter component
export interface PlacementFilterComponent {
  conditions?: Array<{
    allowedFaces?: Array<
      'up' | 'down' | 'north' | 'south' | 'east' | 'west' | 'side' | 'all'
    >;
    blockFilter?: Array<string | { tags: string }>;
  }>;
}

// Interface for redstone conductivity component
export interface RedstoneConductivityComponent {
  allowsWireToStepDown?: boolean;
  redstoneConductor?: boolean;
}

// Interface for selection box component
export interface SelectionBoxComponent {
  origin?: Vector3;
  size?: Vector3;
}

// Interface for transformation component
export interface TransformationComponent {
  rotation?: Vector3;
  scale?: Vector3;
  translation?: Vector3;
  scalePivot?: Vector3;
  rotationPivot?: Vector3;
}

// Interface for tick component
export interface TickComponent {
  looping?: boolean;
  intervalRange?: [number, number];
}

// Interface for entity fall on component
export interface EntityFallOnComponent {
  minFallDistance?: number;
}

export type MapColorComponent =
  | ColorValue
  | { color: ColorValue; tintMethod?: string };

// Main block components interface
export interface BlockComponents {
  /**
   * Collision box for the block
   */
  collisionBox?: boolean | CollisionBoxComponent;

  /**
   * Makes block into a custom crafting table
   */
  craftingTable?: CraftingTableComponent;

  /**
   * Custom component definitions
   */
  customComponents?: string[];

  /**
   * Destructible by explosion properties
   */
  destructibleByExplosion?: boolean | DestructibleByExplosionComponent;

  /**
   * Destructible by mining properties
   */
  destructibleByMining?: boolean | DestructibleByMiningComponent;

  /**
   * Particles shown when the block is destroyed
   */
  destructionParticles?: DestructionParticlesComponent;

  /**
   * Display name of the block
   */
  displayName?: string;

  /**
   * Entity fall on behavior
   */
  entityFallOn?: EntityFallOnComponent;

  /**
   * Flammable properties
   */
  flammable?: boolean | FlammableComponent;

  /**
   * Friction value for the block (0.0-0.9)
   */
  friction?: number;

  /**
   * Geometry for the block
   */
  geometry?: string | GeometryComponent;

  /**
   * Item visual properties
   */
  itemVisual?: ItemVisualComponent;

  /**
   * Light dampening value (0-15)
   */
  lightDampening?: number;

  /**
   * Light emission value (0-15)
   */
  lightEmission?: number;

  /**
   * Liquid detection properties
   */
  liquidDetection?: LiquidDetectionComponent;

  /**
   * Path to the loot table
   */
  loot?: string;

  /**
   * Color on maps
   */
  mapColor?: MapColorComponent;

  /**
   * Material instances for faces
   */
  materialInstances?: MaterialInstancesComponent;

  /**
   * Placement filter conditions
   */
  placementFilter?: PlacementFilterComponent;

  /**
   * Redstone conductivity properties
   */
  redstoneConductivity?: RedstoneConductivityComponent;

  /**
   * Selection box for the block
   */
  selectionBox?: boolean | SelectionBoxComponent;

  /**
   * Tick component properties
   */
  tick?: TickComponent;

  /**
   * Transformation properties
   */
  transformation?: TransformationComponent;

  /**
   * Block tags
   */
  tags?: BlockTags[];
}

/**
 * Main interface for block configuration
 */
export interface BlockConfig {
  /**
   * Block version
   */
  version?: '1.21.70' | '1.21.80';
  /**
   * Block identifier
   * @example "minecraft:stone" or "example:my_block"
   */
  identifier: string;

  /**
   * Menu category for the block
   */
  menuCategory?: ItemMenuCategory;

  /**
   * Block states
   */
  states?: BlockStates;

  /**
   * Block traits
   */
  traits?: BlockTraits;

  /**
   * Block components
   */
  components?: BlockComponents;

  /**
   * Block permutations based on states
   */
  permutations?: BlockPermutationConfig[];
}
