import { CSSObject } from '@emotion/core';
import { darken, lighten } from 'polished';

import { Color, Theme } from '../../@types/styling';

const getBorderColor = (color: Color): Color => darken(0.05, color);

export const getButtonStyles = (colorName: keyof Theme['palette'] = 'primary') => (theme: Theme): CSSObject => {
  const backgroundColor = theme.palette[colorName];
  const backgroundColorActivated = lighten(0.1, backgroundColor);

  const lineHeight = '2em';
  const duration = theme.duration.default;

  return {
    display: 'inline-block',
    padding: '0 1em',
    lineHeight: lineHeight,
    fontFamily: theme.fonts.default,
    fontSize: theme.fontSizes.small,
    fontWeight: theme.fontWeights.default,
    color: theme.palette.heading,
    backgroundColor,
    border: `1px solid black`,
    borderColor: getBorderColor(backgroundColor),
    borderRadius: lineHeight,
    whiteSpace: 'nowrap',
    transition: `border-color ${duration}ms, background-color ${duration}ms, transform ${duration}ms`,
    cursor: 'pointer',

    '&:after': {
      display: 'none',
    },

    '&:hover, &:focus': {
      color: theme.palette.heading,
      backgroundColor: backgroundColorActivated,
      borderColor: getBorderColor(backgroundColorActivated),
      outline: 'none',
    },
  };
};
