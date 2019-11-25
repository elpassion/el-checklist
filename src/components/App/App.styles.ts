import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const wrapperStyle = (theme: Theme): CSSObject => {
  return {
    height: '100vh',
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: theme.palette.background,
    overflow: 'auto',
  };
};

export const contentStyle = (theme: Theme): CSSObject => {
  return {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    padding: `${2 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      padding: `${8 * theme.spacing.unit}px ${4 * theme.spacing.unit}px`,
    },
  };
};
