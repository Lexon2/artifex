/**
 * @description https://bedrock.dev/docs/stable/Molang#Math%20Functions
 */
export type MolangMath = `math.${MolangMathNames}` | (string & {});

/**
 * Absolute value of value
 */
export type MolangMathNames =
  | 'abs'
  | 'acos'
  | 'asin'
  | 'atan'
  | 'atan2'
  | 'ceil'
  | 'clamp'
  | 'cos'
  | 'die_roll'
  | 'die_roll_integer'
  | 'exp'
  | 'floor'
  | 'hermite_blend'
  | 'lerp'
  | 'lerprotate'
  | 'ln'
  | 'max'
  | 'min'
  | 'min_angle'
  | 'mod'
  | 'pi'
  | 'pow'
  | 'random'
  | `random_integer`
  | 'round'
  | 'sin'
  | 'sqrt'
  | 'trunc';