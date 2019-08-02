import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';
import { assureTheme } from '../../utils/misc/themedStyles';

export const wrapperStyle = (providedTheme: Theme): CSSObject => {
  const theme = assureTheme(providedTheme);
  return {
    padding: 2 * theme.spacing.unit,
    backgroundColor: theme.palette.backgroundHoisted,
    borderRadius: theme.shape.radii.default,
    '&+&': {
      marginTop: theme.spacing.unit,
    },
  };
};

export const titleStyle = (providedTheme: Theme): CSSObject => {
  const theme = assureTheme(providedTheme);
  return {
    margin: `0 0 ${2 * theme.spacing.unit}px`,
  };
};
