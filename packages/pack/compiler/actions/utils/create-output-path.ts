import { basename, dirname, join, relative } from 'path';

import { BUILD_CONTEXT } from '../../build-context';

export const createPacksOutputPathFromInputPath = (filePath: string) => {
  const {
    OUTPUT_BEHAVIOR_PACK_PATH,
    OUTPUT_RESOURCE_PACK_PATH,
    OUTPUT_NAMESPACE_PATH,
    INPUT_BASE_PATH,
  } = BUILD_CONTEXT.PACKS;

  const relativePath = relative(INPUT_BASE_PATH, filePath);
  const fileName = basename(filePath);
  let prePath: string = '';

  if (relativePath.startsWith('BP')) {
    const dir = dirname(relative('BP', relativePath));

    if (fileName === 'manifest.json' || dir.includes(OUTPUT_NAMESPACE_PATH)) {
      prePath = join(OUTPUT_BEHAVIOR_PACK_PATH, dir);
    } else {
      prePath = join(OUTPUT_BEHAVIOR_PACK_PATH, dir, OUTPUT_NAMESPACE_PATH);
    }
  } else if (relativePath.startsWith('RP')) {
    const dir = dirname(relative('RP', relativePath));

    if (fileName === 'manifest.json' || dir.includes(OUTPUT_NAMESPACE_PATH)) {
      prePath = join(OUTPUT_RESOURCE_PACK_PATH, dir);
    } else {
      prePath = join(OUTPUT_RESOURCE_PACK_PATH, dir, OUTPUT_NAMESPACE_PATH);
    }
  }

  prePath = join(prePath, fileName);

  return prePath;
};
