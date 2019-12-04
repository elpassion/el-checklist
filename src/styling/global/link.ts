import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const linkStyles = (theme: Theme): CSSObject => ({
  a: {
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: theme.fontWeights.bold,
    color: theme.palette.primary,
    transition: `color ${theme.duration.default}ms`,

    '&:after': {
      position: 'absolute',
      top: `calc(50% + .5em)`,
      left: 0,
      display: 'block',
      content: '""',
      width: '100%',
      height: theme.shape.underline.default,
      backgroundColor: 'currentColor',
      opacity: 0,
      transition: `opacity ${theme.duration.default}ms`,
    },

    '&:hover, &:focus': {
      outline: 'none',
      color: theme.palette.primaryActivated,
    },

    '&:focus': {
      '&:after': {
        opacity: 1,
      },
    },
  },
});
