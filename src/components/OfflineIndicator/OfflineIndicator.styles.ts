import { CSSObject } from '@emotion/core';
import { darken } from 'polished';

import { Color, Theme } from '../../@types/styling';

const getBorderColor = (color: Color): Color => darken(0.05, color);

export const offlineIndicatorStyles = (theme: Theme): CSSObject => {
  const backgroundColor = theme.palette.warning;
  return {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: '0.5em 1em',
    width: '100%',
    textAlign: 'center',
    boxShadow: `0 0 ${theme.spacing.unit}px 0 rgba(0,0,0, .15)`,
    fontSize: theme.fontSizes.small,
    backgroundColor,
    borderColor: getBorderColor(backgroundColor),
    whiteSpace: 'nowrap',
    color: theme.palette.heading,
  };
};
