import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const listStyles = (theme: Theme): CSSObject => ({
  ul: {
    paddingLeft: 0,
    listStyle: 'none',
  },

  '.ul--pointed': {
    paddingLeft: 4 * theme.spacing.unit,
    listStyle: 'initial',
  },
});
