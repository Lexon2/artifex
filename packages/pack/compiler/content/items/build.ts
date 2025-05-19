import { ItemBuilder } from '../../../content/item/item-builder';
import { createContentPath } from '../utils/create-content-path';
import { writeFileByPath } from '../utils/write-file-by-path';

export const buildItemJson = async (filePath: string, builder: ItemBuilder): Promise<string | undefined> => {
  // const source = builder.cloneConfig();

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
