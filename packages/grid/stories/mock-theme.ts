import { IThemeNamespace } from '@xcritical/theme';
import { gridThemeNamespace } from '../src/theme';
import { ITableTheme } from '../src/interfaces';


export const mockTheme: IThemeNamespace<ITableTheme> = {
  [gridThemeNamespace]: {
    evenRowColor: 'red',
    width: '50%',
  },
};

export const withoutColorLines: IThemeNamespace<ITableTheme> = {
  [gridThemeNamespace]: {
    evenRowColor: '',
  },
};
