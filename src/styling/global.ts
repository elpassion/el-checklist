import { CSSObject } from '@emotion/core';

import { Theme } from '../@types/styling';

import { listStyles } from './global/list';
import { headingStyles } from './global/heading';
import { linkStyles } from './global/link';

export const globalStyles = (theme: Theme): CSSObject => ({
  '*': {
    boxSizing: 'border-box' as 'border-box',
  },

  body: {
    margin: 0,
    fontFamily: theme.fonts.default,
    color: theme.palette.text,
  },

  ...listStyles(theme),
  ...headingStyles(theme),
  ...linkStyles(theme),
});
