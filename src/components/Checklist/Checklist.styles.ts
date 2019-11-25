import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const titleStyle = (theme: Theme): CSSObject => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.unit,
  };
};

export const itemStyle = (theme: Theme): CSSObject => {
  return {
    '&+&': {
      marginTop: theme.spacing.unit,
    },
  };
};
