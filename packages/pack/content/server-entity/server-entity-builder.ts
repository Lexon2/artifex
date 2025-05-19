import { entityBevaviorConvertorsFactory } from './convertors/behavior-convertors.factory';
import { entityComponentConvertorsFactory } from './convertors/component-convertors-factory';
import { convertEntityEvents } from './convertors/entity-events.convertor';
import { convertEntityProperties } from './convertors/entity-properties.convertor';
import { EntityBehaviors } from './interfaces/entity-behaviors';
import { EntityComponents } from './interfaces/entity-components';
import { MinecraftServerEntity } from './interfaces/minecraft-server-entity';
import { ServerEntityConfig } from './interfaces/server-entity-config';
import { ContentBuilder } from '../../common/interfaces/content.builder';
import { CONTENT_METADATA } from '../../compiler/content/content.metadata';

export class ServerEntityBuilder implements ContentBuilder {
  readonly metadata = CONTENT_METADATA.SERVER_ENTITY;

  private config: ServerEntityConfig;

  constructor(config: ServerEntityConfig) {
    this.config = config;
  }

  public cloneConfig(): ServerEntityConfig {
    return structuredClone(this.config);
  }

  public build(): MinecraftServerEntity {
    const { config } = this;

    const entity: MinecraftServerEntity = {
      format_version: config.version || '1.21.70',
      'minecraft:entity': {
        description: {
          identifier: config.identifier,
        },
      },
    };

    this.formatDescription(entity);
    this.formatComponents(entity);
    this.formatComponentGroups(entity);
    this.formatEvents(entity);

    return entity;
  }

  // @TODO: Add MinecraftEntity interface
  private formatDescription(entity: any) {
    const {
      isExperimental,
      isSpawnable,
      isSummonable,
      spawnCategory,
      runtimeIdentifier,
      animations,
      scripts,
      properties,
    } = this.config;
    const { description } = entity['minecraft:entity'];

    description.is_spawnable = isSpawnable ?? true;
    description.is_summonable = isSummonable ?? true;
    description.is_experimental = isExperimental ?? false;

    if (spawnCategory !== undefined) {
      description.spawn_category = spawnCategory;
    }

    if (
      runtimeIdentifier !== undefined &&
      typeof runtimeIdentifier === 'string' &&
      runtimeIdentifier !== ''
    ) {
      description.runtime_identifier = runtimeIdentifier;
    }

    if (animations !== undefined) {
      description.animations = animations;
    }

    if (scripts !== undefined) {
      description.scripts = scripts;
    }

    if (properties !== undefined) {
      const convertedProperties = convertEntityProperties(properties);
      if (convertedProperties === undefined) {
        console.warn(`Entity properties are invalid. Skipping...`);

        return;
      }
      description.properties = convertedProperties;
    }
  }

  /**
   * Convert the components to the MinecraftEntity format
   * @param components - The components to convert
   * @returns The converted components
   */
  private convertComponents(components: EntityComponents | undefined) {
    if (components === undefined || Object.keys(components).length === 0) {
      return;
    }

    let entityComponents: any = {};

    for (const component in components) {
      if (component === 'behaviors') {
        const convertedBehaviors = this.convertBehaviors(components.behaviors);
        if (convertedBehaviors === undefined) {
          console.warn(`Entity behaviors are invalid. Skipping...`);
          continue;
        }
        entityComponents = { ...entityComponents, ...convertedBehaviors };
        continue;
      }

      const factory =
        entityComponentConvertorsFactory[component as keyof EntityComponents];
      if (factory === undefined) {
        console.warn(
          `Entity component "${component}" is not supported. Skipping...`,
        );
        continue;
      }
      const componentData = components[component as keyof typeof components];
      const minecraftComponent = factory(componentData);
      if (minecraftComponent === undefined) {
        console.warn(`Entity component "${component}" is invalid. Skipping...`);
        continue;
      }
      entityComponents = { ...entityComponents, ...minecraftComponent };
    }

    return entityComponents;
  }

  private convertBehaviors(behaviors: Partial<EntityBehaviors> | undefined) {
    if (behaviors === undefined || Object.keys(behaviors).length === 0) {
      return;
    }

    let entityBehaviors: any = {};

    for (const behavior in behaviors) {
      const factory =
        entityBevaviorConvertorsFactory[behavior as keyof EntityBehaviors];
      if (factory === undefined) {
        console.warn(
          `Entity behavior "${behavior}" is not supported. Skipping...`,
        );
        continue;
      }

      const behaviorData = behaviors[behavior as keyof typeof behaviors];
      const minecraftBehavior = factory(behaviorData);
      if (minecraftBehavior === undefined) {
        console.warn(`Entity behavior "${behavior}" is invalid. Skipping...`);
        continue;
      }
      entityBehaviors = { ...entityBehaviors, ...minecraftBehavior };
    }

    return entityBehaviors;
  }

  /**
   * Format the components to the MinecraftEntity format
   * @param entity - The entity to format
   */
  // @TODO: Add MinecraftEntity interface
  private formatComponents(entity: any) {
    const { components } = this.config;

    const entityComponents = this.convertComponents(components);
    entity['minecraft:entity'].components = entityComponents;
  }

  private formatComponentGroups(entity: any) {
    const { componentGroups } = this.config;

    if (
      componentGroups === undefined ||
      Object.keys(componentGroups).length === 0
    ) {
      return;
    }

    entity['minecraft:entity'].component_groups = {};

    for (const { components, name } of componentGroups) {
      const entityComponents = this.convertComponents(components);
      entity['minecraft:entity'].component_groups[name] = entityComponents;
    }
  }

  private formatEvents(entity: any) {
    const { events } = this.config;

    if (events === undefined || Object.keys(events).length === 0) {
      return;
    }

    const convertedEvents = convertEntityEvents(events);
    if (convertedEvents === undefined) {
      return;
    }

    entity['minecraft:entity'].events = convertedEvents;
  }
}
