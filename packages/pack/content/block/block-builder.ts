import { convertBlockComponents } from './convert-components';
import { BlockConfig } from './interfaces/block-config';
import { createBlockPermutations } from './permutations/create-permuation';
import { createBlockStates } from './states/create-states';
import { ContentBuilder } from '../../common/interfaces/content.builder';
import { CONTENT_METADATA } from '../../compiler/content/content.metadata';
import { convertMenuCategory } from '../item/convertors/components/menu-category/convert-category';

export class BlockBuilder implements ContentBuilder {
  readonly metadata = CONTENT_METADATA.BLOCK;

  private config: BlockConfig;
  constructor(config: BlockConfig) {
    this.config = config;
  }

  public cloneConfig(): any {
    return structuredClone(this.config);
  }

  public fileName(): string {
    const { identifier } = this.config;
    const parts = identifier.split(':');
    const fileName = parts[parts.length - 1];

    return `${fileName}.block.json`;
  }

  public build(): any {
    const { config } = this;

    const minecraftBlock = {
      // @TODO: Add support for artifex config
      format_version: config.version || '1.21.70',
      'minecraft:block': {
        description: {
          identifier: config.identifier,
        },
      },
    };

    this.formatDescription(minecraftBlock);
    this.formatComponents(minecraftBlock);
    this.formatPermutations(minecraftBlock);
    this.formatStates(minecraftBlock);

    return minecraftBlock;
  }

  private formatDescription(file: any) {
    const { menuCategory } = this.config;
    const { description } = file['minecraft:block'];

    const validatedMenuCategory = menuCategory
      ? convertMenuCategory(menuCategory)
      : undefined;
    if (validatedMenuCategory !== undefined) {
      description.menu_category = validatedMenuCategory;
    }
  }

  private formatComponents(file: any) {
    const { components } = this.config;
    if (components === undefined) {
      return;
    }

    const minecraftComponents = convertBlockComponents(components);
    if (minecraftComponents === undefined) {
      return;
    }

    file['minecraft:block'].components = { ...minecraftComponents };
  }

  private formatPermutations(file: any) {
    const { permutations } = this.config;
    if (permutations === undefined) {
      return;
    }

    const minecraftPermutations = createBlockPermutations(permutations);
    if (minecraftPermutations === undefined) {
      return;
    }

    file['minecraft:block'].permutations = [...minecraftPermutations];
  }

  private formatStates(file: any) {
    const { states } = this.config;
    if (states === undefined) {
      return;
    }

    const minecraftStates = createBlockStates(states);
    if (minecraftStates === undefined) {
      return;
    }

    file['minecraft:block'].states = { ...minecraftStates };
  }
}
