import { Float } from '../../../common/tools/float';
import { ServerEntityBuilder } from '../../../content/server-entity/server-entity-builder';
import { createContentPath } from '../utils/create-content-path';
import { writeFileByPath } from '../utils/write-file-by-path';

// TODO: Remove this once we have a better way to handle floats
const replaceArtifexFloatsInJsonString = (json: string): string => {
  return json.replace(
    /"\$artifex_float\[(\-?\d+(?:\.\d+)?)\]"/g,
    (_, num) => num,
  );
};

const replaceTrailingZeroFloats = (obj: any): void => {
  const floatify = (val: number): Float | number => {
    const str = `${val}`;
    const match = str.match(/^(-?\d+\.\d+)$/);
    if (match) {
      return new Float(val, 1);
    }

    return val;
  };

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const val = obj[i];
      if (typeof val === 'number') {
        obj[i] = floatify(val);
      } else {
        replaceTrailingZeroFloats(val);
      }
    }
  } else if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      const val = obj[key];
      if (typeof val === 'number') {
        obj[key] = floatify(val);
      } else {
        replaceTrailingZeroFloats(val);
      }
    }
  }
};

export const buildServerEntityJson = async (
  filePath: string,
  builder: ServerEntityBuilder,
): Promise<string | undefined> => {
  const json = builder.build();
  replaceTrailingZeroFloats(json);

  const jsonString = JSON.stringify(json, null, 2);

  const outFile = createContentPath(filePath, builder.metadata);
  if (outFile === undefined) {
    console.error(`Error creating content path for ${filePath}`);

    return;
  }

  const replacedJsonString = replaceArtifexFloatsInJsonString(jsonString);

  await writeFileByPath(outFile, replacedJsonString, 'utf-8');

  return outFile;
};
