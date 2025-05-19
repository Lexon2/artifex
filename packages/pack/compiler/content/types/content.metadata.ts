import { CONTENT_METADATA } from '../content.metadata';

export type ContentMetadata =
  (typeof CONTENT_METADATA)[keyof typeof CONTENT_METADATA];
