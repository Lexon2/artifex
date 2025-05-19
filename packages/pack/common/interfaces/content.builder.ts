import { ContentMetadata } from '@artifex/pack/compiler/content/types/content.metadata';

export interface ContentBuilder {
  readonly metadata: ContentMetadata;

  cloneConfig(): unknown;
  build(): unknown;
}
