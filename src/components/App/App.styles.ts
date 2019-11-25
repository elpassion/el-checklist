import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const wrapperStyle = (): CSSObject => {
  return {
    height: '100vh',
    flexDirection: 'column',
    display: 'flex',
  };
};

export const contentStyle = (theme: Theme): CSSObject => {
  return {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '100%',
    padding: `${2 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      padding: `${8 * theme.spacing.unit}px ${4 * theme.spacing.unit}px`,
    },
  };
};
