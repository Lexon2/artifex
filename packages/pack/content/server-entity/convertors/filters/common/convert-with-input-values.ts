
import { convertFilterBase } from './convert-filter-base';
import { FilterOperator } from '../../../constants/filter-operators';
import { FilterSubject } from '../../../constants/filter-subjects';
import { MinecraftJsonFilter } from '../../../interfaces/filters/minecraft-json-filter';


export const convertWithInputValues = <T extends readonly any[]>(filter: {
  test: string;
  operator?: FilterOperator;
  subject?: FilterSubject;
  value?: T[number];
}, inputValues: T): MinecraftJsonFilter | undefined => {
  if (!filter) {
    return undefined;
  }

  const result: any = convertFilterBase(filter);

  if (!result) {
    return undefined;
  }

  if (filter.value === undefined || !inputValues.includes(filter.value)) {
    return undefined;
  }

  result.value = filter.value;

  return result;
};
