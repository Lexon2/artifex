import { ClientEntityBuilder } from '../../../content/client-entity/client-entity-builder';
import { createContentPath } from '../utils/create-content-path';
import { writeFileByPath } from '../utils/write-file-by-path';

export const buildClientEntityJson = async (
  filePath: string,
  builder: ClientEntityBuilder,
): Promise<string | undefined>   => {
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
