import { join } from 'path';

import { BUILD_CONTEXT } from '../build-context';
import { applyConfig } from './apply-config';
import { importArtifexConfig } from './utils/import-config';

export const loadConfig = async () => {
  if (BUILD_CONTEXT.IS_LOADED) {
    return;
  }
  const configPath = join(process.cwd(), 'artifex.config.mts');
  const config = await importArtifexConfig(configPath);
  if (!config) {
    throw new Error('Artifex config not found');
  }

  await applyConfig(config);

  BUILD_CONTEXT.IS_LOADED = true;
};
