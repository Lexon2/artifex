import { basename } from 'path';

import { buildBlockJson } from './block/build';
import { buildClientEntityJson } from './client-entity/build';
import { CONTENT_METADATA } from './content.metadata';
import { buildItemJson } from './items/build';
import { buildServerEntityJson } from './server-entity/build';
import { ContentBuilder } from '../../common/interfaces/content.builder';

const contentFactory = {
  [CONTENT_METADATA.ITEM]: buildItemJson,
  [CONTENT_METADATA.SERVER_ENTITY]: buildServerEntityJson,
  [CONTENT_METADATA.CLIENT_ENTITY]: buildClientEntityJson,
  [CONTENT_METADATA.BLOCK]: buildBlockJson,
};

export const importContent = async (
  filePath: string,
): Promise<ContentBuilder | undefined> => {
  try {
    const content = await import(filePath);
    const { default: contentModule } = content;
    if (contentModule === undefined) {
      return;
    }
    return contentModule as ContentBuilder;
  } catch {}
};

export interface BuildContentJsonResult {
  source: string;
  outFile: string;
}

export const buildContentJson = async (
  filePath: string,
  bundledFileUrl: string,
  debug: boolean = true,
): Promise<BuildContentJsonResult | Error | undefined> => {
  const filename = basename(filePath);

  const contentBuilder = await importContent(bundledFileUrl);
  if (contentBuilder === undefined) {
    if (debug) {
      return new Error(`\n🛑 Failed to import content: ${filename}\n`);
    }
    return;
  }

  const metadata = contentBuilder.metadata ?? CONTENT_METADATA.UNKNOWN;
  if (metadata === CONTENT_METADATA.UNKNOWN) {
    if (debug) {
      return new Error(`\n🛑 Unknown content type for file: ${filename}\n`);
    }
    return;
  }
  const buildFunction = contentFactory[metadata];
  if (!buildFunction) {
    if (debug) {
      return new Error(
        `\n🛑 No build function found for metadata: ${metadata}\n`,
      );
    }
    return;
  }

  const outFile = await buildFunction(filePath, contentBuilder as any);
  if (outFile === undefined) {
    if (debug) {
      return new Error(`\n🛑 Failed to build: ${filename}\n`);
    }
    return;
  }

  return {
    source: filePath,
    outFile,
  };
};
