import { defaultTheme } from '../../styling/themes/default';
import { Theme } from '../../@types/styling';

import { assureTheme } from './themedStyles';

it('returns default theme if providedTheme is empty', () => {
  const providedTheme = {} as Theme; //eslint-disable-line @typescript-eslint/no-object-literal-type-assertion
  const result = assureTheme(providedTheme);

  expect(result).toEqual(defaultTheme);
});
