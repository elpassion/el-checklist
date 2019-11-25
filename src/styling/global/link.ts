import { CSSObject } from '@emotion/core';
import { lighten } from 'polished';

import { Theme } from '../../@types/styling';

export const linkStyles = (theme: Theme): CSSObject => ({
  a: {
    textDecoration: 'none',
    fontWeight: 700,
    color: theme.palette.primary,
    transition: `color ${theme.duration.default}ms`,

    '&:hover, &:focus': {
      color: lighten(0.1, theme.palette.primary),
    },
  },
});
