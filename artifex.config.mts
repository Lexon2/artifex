import { defineArtifexConfig } from '@artifex/pack/compiler/config/define-config';

export default defineArtifexConfig({
  packs: {
    alias: 'test',
    namespace: 'arfex_test',
    output: 'build',
  },
});
