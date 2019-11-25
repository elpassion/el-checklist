import { CSSObject } from '@emotion/core';
import { darken } from 'polished';

import { Color, Theme } from '../../@types/styling';

type TGetWrapperStyleArgs = {
  colorName?: Color;
};

export const getWrapperStyle = ({ colorName = 'white' }: TGetWrapperStyleArgs) => (theme: Theme): CSSObject => {
  const backgroundColor = colorName;
  const borderColor = darken(0.1, backgroundColor);
  const lineHeight = '2em';

  return {
    display: 'inline-block',
    padding: '0 1em',
    lineHeight: lineHeight,
    fontSize: theme.fontSizes.small,
    backgroundColor,
    border: `1px solid black`,
    borderColor,
    borderRadius: lineHeight,
    whiteSpace: 'nowrap',
  };
};
