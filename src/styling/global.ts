import { CSSObject } from '@emotion/core';

import { Theme } from '../@types/styling';

import { listStyles } from './global/list';
import { headingStyles } from './global/heading';
import { checkboxStyles } from './global/checkbox';
import { linkStyles } from './global/link';

export const globalStyles = (theme: Theme): CSSObject => ({
  '*': {
    boxSizing: 'border-box' as 'border-box',
  },

  body: {
    margin: 0,
    fontFamily: theme.fonts.default,
    backgroundColor: theme.palette.background,
    color: theme.palette.text,
  },

  ...listStyles(theme),
  ...headingStyles(theme),
  ...checkboxStyles(theme),
  ...linkStyles(theme),
});
