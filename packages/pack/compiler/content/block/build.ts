
import { BlockBuilder } from '../../../content/block/block-builder';
import { createContentPath } from '../utils/create-content-path';
import { writeFileByPath } from '../utils/write-file-by-path';

export const buildBlockJson = async (
  filePath: string,
  builder: BlockBuilder,
): Promise<string | undefined> => {
  const json = builder.build();
  const jsonString = JSON.stringify(json, null, 2);

  const outFile = createContentPath(filePath, builder.metadata);
  if (outFile === undefined) {
    console.error(`Error creating content path for ${filePath}`);

    return;
  }

  await writeFileByPath(outFile, jsonString, 'utf-8');

  return outFile;
};
