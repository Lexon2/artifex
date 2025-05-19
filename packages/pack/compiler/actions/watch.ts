import { copyFile, unlink } from 'fs/promises';

import chokidar from 'chokidar';

import { BUILD_CONTEXT } from '../build-context';
import { build } from './build';
import { loadConfig } from '../config/load-config';
import { rebuildFile, unlinkContentFile } from '../core/builder';
import { DependencyGraphActions } from '../core/graph';
import { createPacksOutputPathFromInputPath } from './utils/create-output-path';

const processEdit = async (filePath: string) => {
  try {
    if (!filePath.endsWith('.ts')) {
      const outputPath = createPacksOutputPathFromInputPath(filePath);
      if (outputPath) {
        await copyFile(filePath, outputPath);
      }
      return;
    }

    await rebuildFile(filePath);
    // if (isArtifexContentFile(filePath)) {
    // }
  } catch {}
};

const processUnlink = async (filePath: string) => {
  try {
    if (!filePath.endsWith('.ts')) {
      const outputPath = createPacksOutputPathFromInputPath(filePath);
      if (outputPath) {
        await unlink(outputPath);
      }
      return;
    }

    await unlinkContentFile(filePath);
    // if (isArtifexContentFile(filePath)) {
    // }
  } catch {}
};

/**
 * Watches the input directory for changes and rebuilds the content.
 */
export const watch = async () => {
  await loadConfig();
  console.log('🔍 Building dependency graph...');
  await DependencyGraphActions.create();
  console.log('🚀 Watcher is running');

  await build(false);

  const process = chokidar.watch(BUILD_CONTEXT.PACKS.INPUT_BASE_PATH, {
    awaitWriteFinish: {
      stabilityThreshold: 500,
    },
    atomic: true,
    ignoreInitial: true,
    persistent: true,
  });

  process
    .on('add', processEdit)
    .on('change', processEdit)
    .on('unlink', processUnlink);
};
