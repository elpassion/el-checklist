import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const labelStyle = (color: string): CSSObject => {
  return color ? { color } : {};
};

export const labelTextStyle = (theme: Theme): CSSObject => ({
  color: theme.palette.text,
});
