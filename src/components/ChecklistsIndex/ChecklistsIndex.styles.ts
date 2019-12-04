import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const headingStyle = (theme: Theme): CSSObject => {
  return {
    marginBottom: 2 * theme.spacing.unit,
    fontSize: theme.fontSizes.significant,
  };
};

export const itemStyle = (theme: Theme): CSSObject => {
  return {
    lineHeight: `2em`,

    '&+&': {
      marginTop: theme.spacing.unit,
    },
  };
};
