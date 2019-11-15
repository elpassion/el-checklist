import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';
import { assureTheme } from '../../utils/misc/themedStyles';
import { clearExtremeMargins } from '../../utils/styling/clearExtremeMargins';

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

export const sectionStyle = (providedTheme: Theme): CSSObject => {
  const theme = assureTheme(providedTheme);
  return {
    margin: `${theme.spacing.unit}px 0`,
    ...clearExtremeMargins({ verticalOnly: true }),
  };
};

export const tagListStyle = (providedTheme: Theme): CSSObject => {
  const theme = assureTheme(providedTheme);
  return {
    margin: `${1.5 * theme.spacing.unit}px 0 ${2 * theme.spacing.unit}px`,
    paddingLeft: theme.shape.inputSizes.large.standard + 2 * theme.spacing.unit,
    ...clearExtremeMargins({ verticalOnly: true }),
  };
};

export const titleStyle = (providedTheme: Theme): CSSObject => {
  const theme = assureTheme(providedTheme);
  return {
    ...sectionStyle(theme),
    marginBottom: 1.5 * theme.spacing.unit,
  };
};
