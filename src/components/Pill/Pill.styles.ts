import { CSSObject } from '@emotion/core';
import { darken } from 'polished';

import { Color, Theme } from '../../@types/styling';
import { assureTheme } from '../../utils/misc/themedStyles';

type TGetWrapperStyleArgs = {
  colorName?: Color;
};

export const getWrapperStyle = ({ colorName = 'white' }: TGetWrapperStyleArgs) => (providedTheme: Theme): CSSObject => {
  const theme = assureTheme(providedTheme);
  const backgroundColor = colorName;
  const borderColor = darken(0.1, backgroundColor);

  return {
    display: 'inline-block',
    padding: '.2em .5em .25em',
    fontSize: theme.fontSizes.small,
    backgroundColor,
    border: `1px solid black`,
    borderColor,
    borderRadius: theme.shape.radii.default,
    whiteSpace: 'nowrap',
  };
};
