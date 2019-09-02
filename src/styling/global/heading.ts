import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const headingStyles = (theme: Theme): CSSObject => ({
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: theme.fonts.significant,
    color: theme.palette.heading,
    margin: 0,
  },
});
