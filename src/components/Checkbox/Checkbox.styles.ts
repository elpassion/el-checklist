import { CSSObject, keyframes } from '@emotion/core';

import { Theme } from '../../@types/styling';

const getConstantsFromTheme = (theme: Theme) => {
  const SIZE = theme.shape.inputSizes.large.standard;
  const DONE_FACTOR = theme.shape.inputSizes.large.expanded / SIZE;
  return {
    LINE_HEIGHT: 1.15,
    SIZE,
    DURATION: `${theme.duration.default}ms`,
    DONE_FACTOR,
    KEYFRAMES: {
      check: keyframes`
        0% { tranform: scale(1); }
        50% { transform: scale(${DONE_FACTOR * DONE_FACTOR}); }
        100% { transform: scale(${DONE_FACTOR}); }
       `,
      uncheck: keyframes`
        0% { tranform: scale(${DONE_FACTOR}); }
        50% { transform: scale(${1 / DONE_FACTOR}); }
        100% { transform: scale(1); }
      `,
    },
  };
};

export const checkboxStyles = (theme: Theme): CSSObject => {
  const { LINE_HEIGHT, SIZE, DURATION, DONE_FACTOR, KEYFRAMES } = getConstantsFromTheme(theme);

  return {
    width: 0,
    height: 0,
    margin: 0,
    visibility: 'hidden',

    '& + label': {
      position: 'relative',
      display: 'inline-block',
      minHeight: SIZE,
      lineHeight: LINE_HEIGHT,
      paddingLeft: SIZE + theme.spacing.unit * 3,
      paddingTop: `calc((${SIZE}px - ${LINE_HEIGHT}em) / 4)`,
      userSelect: 'none',
    },

    '& + label:before, & + label:after': {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      width: SIZE,
      height: SIZE,
    },

    '& + label:before': {
      position: 'absolute',
      display: 'block',
      width: SIZE,
      height: SIZE,
      backgroundColor: 'white',
      border: `${theme.shape.underline.default}px solid currentColor`,
      borderRadius: theme.shape.radii.default,
      animation: `${KEYFRAMES.uncheck} ${DURATION} ease-in 1`,
      content: '""',
      transition: `background-color ${theme.duration.default}ms`,
    },

    '& + label:after': {
      color: 'navy',
      transform: 'scale(.7)',
    },

    '&:checked + label:before': {
      backgroundColor: 'currentcolor',
      transform: `scale(${DONE_FACTOR})`,
      animation: `${KEYFRAMES.check} ${DURATION} ease-out 1`,
    },
  };
};

export const labelStyle = (color: string): CSSObject => {
  return color ? { color } : {};
};

export const labelTextStyle = (theme: Theme): CSSObject => ({
  color: theme.palette.heading,
});

export const getCheckMarkStyle = (checked: boolean) => (theme: Theme): CSSObject => {
  const { SIZE, DURATION, KEYFRAMES } = getConstantsFromTheme(theme);

  const visibleSize = theme.shape.inputSizes.large[checked ? 'expanded' : 'standard'];
  const scale = visibleSize / SIZE;
  return {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    left: theme.shape.underline.default,
    top: theme.shape.underline.default,
    transform: `scale(${scale})`,
    opacity: checked ? 1 : 0,
    transition: `opacity ${DURATION} ease-out`,
    animation: `${checked ? KEYFRAMES.check : KEYFRAMES.uncheck} ${DURATION} ease-out 1`,
  };
};

export const checkMarkLineStyle = (theme: Theme): CSSObject => {
  return {
    fill: 'none',
    stroke: theme.palette.heading,
    strokeWidth: 4,
  };
};
