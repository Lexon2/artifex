export const deepMerge = (target: any, source: any): any => {
  if (typeof target !== 'object' || target === null) {
    return source;
  }
  if (typeof source !== 'object' || source === null) {
    return source;
  }

  const result: any = Array.isArray(target) ? [...target] : { ...target };

  for (const key of Object.keys(source)) {
    if (key in target) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }

  return result;
};
