import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';
import { clearExtremeMargins } from '../../utils/styling/clearExtremeMargins';

export const wrapperStyle = (theme: Theme): CSSObject => {
  return {
    padding: 2 * theme.spacing.unit,
    backgroundColor: theme.palette.backgroundHoisted,
    borderRadius: theme.shape.radii.default,
    '&+&': {
      marginTop: 2 * theme.spacing.unit,
    },
  };
};

export const sectionStyle = (theme: Theme): CSSObject => {
  return {
    margin: `${theme.spacing.unit}px 0`,
    ...clearExtremeMargins({ verticalOnly: true }),
  };
};

export const tagListStyle = (theme: Theme): CSSObject => {
  return {
    margin: `${1.5 * theme.spacing.unit}px 0 ${2 * theme.spacing.unit}px`,
    paddingLeft: theme.shape.inputSizes.large.standard + 2 * theme.spacing.unit,
    ...clearExtremeMargins({ verticalOnly: true }),
  };
};

export const titleStyle = (theme: Theme): CSSObject => {
  return {
    ...sectionStyle(theme),
    marginBottom: 1.5 * theme.spacing.unit,
  };
};
