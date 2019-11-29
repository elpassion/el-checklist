import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const wrapperStyles = (theme: Theme): CSSObject => {
  const WIDTH = 120;
  const THICKNESS = theme.shape.underline.thick;

  return {
    position: 'relative',
    display: 'inline-block',
    width: WIDTH,
    margin: 0,
    paddingTop: THICKNESS,
    color: 'inherit',
    textAlign: 'center',
    lineHeight: 1,

    '&:before, &:after': {
      position: 'absolute',
      top: 0,
      left: 0,
      height: THICKNESS,
      width: '100%',
      content: '""',
      transition: `transform ${theme.duration.default}ms`,
    },

    '&:before': {
      backgroundColor: theme.palette.disabled,
    },

    '&:after': {
      backgroundColor: theme.palette.primary,
      transformOrigin: '0 center',
      transform: 'scaleX(0.5)',
    },
  };
};

export const textStyles = (theme: Theme): CSSObject => ({
  position: 'relative',
  fontSize: theme.fontSizes.small,
  zIndex: 1,
});

export const getCheckMarkStyle = (checked: boolean) => (theme: Theme): CSSObject => {
  const size = '1em';
  const duration = theme.duration.default;

  return {
    position: 'absolute',
    width: size,
    height: size,
    right: 0,
    bottom: '0',
    opacity: checked ? 1 : 0,
    transform: `scale(${checked ? 1 : 0})`,
    visibility: checked ? 'visible' : 'hidden',
    transition: `opacity ${duration}ms ease-out ${checked ? duration : 0}ms,  transform ${duration}ms ease-out ${
      checked ? duration : 0
    }ms`,
  };
};

export const checkMarkLineStyle = (theme: Theme): CSSObject => {
  return {
    fill: 'none',
    stroke: theme.palette.primary,
    strokeWidth: 4,
  };
};
