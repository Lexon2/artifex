import { MolangMath, MolangQuery } from '../../molang/types';

export type EntityRenderContollerName =
  | `controller.render.`
  | `controller.render.default`;

export type EntityRenderContollersCollection = (
  | EntityRenderContollerName
  | Partial<Record<EntityRenderContollerName, MolangQuery | MolangMath>>
)[];
