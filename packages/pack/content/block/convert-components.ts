import { blockComponentCreatorsFactory } from './components';
import { BlockComponents } from './interfaces/block-config';

export interface MinecraftBlockComponents {
  [key: string]: any;
}

export const convertBlockComponents = (
  components: BlockComponents,
): MinecraftBlockComponents | undefined => {
  let result: MinecraftBlockComponents = {};

  if (components === undefined || Object.keys(components).length === 0) {
    return;
  }

  for (const component in components) {
    const factory =
      blockComponentCreatorsFactory[
        component as keyof typeof blockComponentCreatorsFactory
      ];
    if (factory === undefined) {
      console.warn(
        `Item component "${component}" is not supported. Skipping...`,
      );
      continue;
    }

    const componentData = components[component as keyof typeof components];
    const minecraftComponent = factory(componentData);

    if (minecraftComponent === undefined) {
      console.warn(`Item component "${component}" is invalid. Skipping...`);
      continue;
    }
    result = { ...result, ...minecraftComponent };
  }

  return result;
};
