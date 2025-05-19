import { ClientEntityConfig } from './interfaces/client-entity-config';
import { ContentBuilder } from '../../common/interfaces/content.builder';
import { CONTENT_METADATA } from '../../compiler/content/content.metadata';

export class ClientEntityBuilder implements ContentBuilder {
  readonly metadata = CONTENT_METADATA.CLIENT_ENTITY;

  private config: ClientEntityConfig;

  constructor(config: ClientEntityConfig) {
    this.config = config;
  }

  public cloneConfig(): ClientEntityConfig {
    return structuredClone(this.config);
  }

  public build(): any {
    const { config } = this;

    const entity: any = {
      format_version: config.version || '1.10.0',
      'minecraft:client_entity': {
        description: {
          identifier: config.identifier,
        },
      },
    };

    this.formatDescription(entity);

    return entity;
  }

  private formatDescription(entity: any) {
    const {
      geometry,
      textures,
      materials,
      minEngineVersion,
      animations,
      scripts,
      soundEffects,
      particleEffects,
      particleEmitters,
      renderControllers,
      hideArmor,
      enableAttachables,
      heldItemIgnoresLighting,
      queryableGeometry,
      spawnEgg,
    } = this.config;

    const description = entity['minecraft:client_entity'].description;

    if (geometry !== undefined) {
      if (typeof geometry === 'string') {
        description.geometry = {
          default: geometry,
        };
      } else {
        description.geometry = geometry;
      }
    }

    if (textures !== undefined) {
      if (typeof textures === 'string') {
        description.textures = {
          default: textures,
        };
      } else {
        description.textures = textures;
      }
    }

    if (materials !== undefined) {
      if (typeof materials === 'string') {
        description.materials = {
          default: materials,
        };
      } else {
        description.materials = materials;
      }
    }

    if (minEngineVersion !== undefined) {
      description.min_engine_version = minEngineVersion;
    }

    if (animations !== undefined) {
      description.animations = animations;
    }

    if (scripts !== undefined) {
      description.scripts = scripts;
    }

    if (soundEffects !== undefined) {
      description.sound_effects = soundEffects;
    }

    if (particleEffects !== undefined) {
      description.particle_effects = particleEffects;
    }

    if (particleEmitters !== undefined) {
      description.particle_emitters = particleEmitters;
    }

    if (renderControllers !== undefined) {
      description.render_controllers = renderControllers;
    }

    if (hideArmor !== undefined) {
      description.hide_armor = hideArmor;
    }

    if (enableAttachables !== undefined) {
      description.enable_attachables = enableAttachables;
    }

    if (heldItemIgnoresLighting !== undefined) {
      description.held_item_ignores_lighting = heldItemIgnoresLighting;
    }

    if (queryableGeometry !== undefined) {
      description.queryable_geometry = queryableGeometry;
    }

    if (spawnEgg !== undefined) {
      description.spawn_egg = spawnEgg;
    }
  }
}
