import { isEmpty } from 'lodash';

import { Theme } from '../../@types/styling';
import { defaultTheme } from '../../styling/themes/default';

export const assureTheme = (theme: Theme): Theme => {
  return isEmpty(theme) ? defaultTheme : theme;
};
