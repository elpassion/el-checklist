import { CSSObject, keyframes } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const checkboxStyles = (theme: Theme): CSSObject => {
  const LINE_HEIGHT = 1.5;
  const SIZE = theme.shape.inputSizes.large.standard;
  const DURATION = `${theme.duration.default}ms`;
  const DONE_FACTOR = theme.shape.inputSizes.large.expanded / SIZE;

  const check = keyframes`
    0% { tranform: scale(1); }
    50% { transform: scale(${DONE_FACTOR * DONE_FACTOR}); }
    100% { transform: scale(${DONE_FACTOR}); }
  `;

  const uncheck = keyframes`
    0% { tranform: scale(${DONE_FACTOR}); }
    50% { transform: scale(${1 / DONE_FACTOR}); }
    100% { transform: scale(1); }
  `;

  return {
    'input[type=checkbox]': {
      width: 0,
      height: 0,
      margin: 0,
      visibility: 'hidden',

      '& + label': {
        position: 'relative',
        display: 'inline-block',
        minHeight: SIZE,
        lineHeight: LINE_HEIGHT,
        paddingLeft: SIZE + theme.spacing.unit * 2,
        paddingTop: `calc((${SIZE}px - ${LINE_HEIGHT}em) / 2)`,
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
        backgroundColor: 'red',
        borderRadius: theme.shape.radii.default,
        animation: `${uncheck} ${DURATION} ease-in 1`,
        content: '""',
      },

      '& + label:after': {
        color: 'navy',
        transform: 'scale(.7)',
        // strokeDasharray: 25,
        // strokeDashoffset: 25,
        // content: `url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}px" height="${SIZE}px"><path d="M9,17 13.5,22.5 24,9" fill="none" stroke="white" stroke-width="5" stroke-linecap="round" /></svg>')`,
      },

      '&:checked + label:before': {
        backgroundColor: 'green',
        transform: `scale(${DONE_FACTOR})`,
        animation: `${check} ${DURATION} ease-out 1`,
      },
      // '&:checked + label:before': {
      //   animationName: bounce2,
      //   backgroundColor: "green",
      //   animationIterationCount: 2,
      //
      // },
    },
  };
};
