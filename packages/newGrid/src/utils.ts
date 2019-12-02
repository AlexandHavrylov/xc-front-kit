import { getThemedState, IThemeNamespace } from '@xcritical/theme';

import { gridThemeNamespace, defaultTheme } from './theme';
import { IGridTheme, IMappedItem } from './interfaces';


export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}${s4()
    + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const addOrDeleteItemFromArray = (array: string[], item: string) => {
  if (array.some((el: string) => el === item)) return array.filter((el: string) => el !== item);
  return [...array, item];
};

export function gridTheme<T>(
  theme: IThemeNamespace,
  propertyPath?: string | undefined,
): IGridTheme {
  const func = getThemedState(gridThemeNamespace, defaultTheme);
  return func(theme, propertyPath) as IGridTheme;
}


export const deletePropsFromObjects = (arr: any, ...rest: any) => arr.map((el: IMappedItem) => {
  const newElem = { ...el };
  rest.forEach((prop: string) => {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete newElem[prop];
  });
  return newElem;
});
