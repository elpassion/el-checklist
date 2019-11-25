import { CSSObject } from '@emotion/core';
import { lighten } from 'polished';

import { Theme } from '../../@types/styling';

type TGetHeaderStyleArgs = {
  isOpen?: boolean;
  transitionDuration?: number;
};

const TRANSITION_TIMING = 'ease-in-out';

export const wrapperStyle = (): CSSObject => {
  return {
    position: 'relative',
  };
};

export const getHeaderStyle = ({ isOpen = false, transitionDuration = 200 }: TGetHeaderStyleArgs) => (
  theme: Theme,
): CSSObject => {
  const ARROW_SIZE = 0.7;
  const ARROW_SPACING = theme.spacing.unit;
  const LINE_HEIGHT = 2;
  const FONT_SIZE = theme.fontSizes.default;

  return {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: `0 0 0 calc(${ARROW_SIZE}em + ${ARROW_SPACING}px)`,
    fontSize: FONT_SIZE,
    lineHeight: LINE_HEIGHT,
    textAlign: 'left',
    border: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: `color ${theme.duration.default}ms`,

    '&:before': {
      position: 'absolute',
      top: `${LINE_HEIGHT / 2}em`,
      width: 0,
      height: 0,
      fontSize: 'inherit',
      borderTop: `${ARROW_SIZE / 2}em solid transparent`,
      borderLeft: `${0.867 * ARROW_SIZE}em solid currentColor`,
      borderBottom: `${ARROW_SIZE / 2}em solid transparent`,
      content: '""',
      transform: `translate(calc(-100% - ${ARROW_SPACING}px), -50%) rotate(${isOpen ? 90 : 0}deg)`,
      transition: `transform ${transitionDuration}ms ${TRANSITION_TIMING}`,
    },

    '&:active, &:focus': {
      backgroundColor: 'transparent',
      outline: 'none',
    },

    '&:focus': {
      color: lighten(0.3, theme.palette.heading),
    },
  };
};

export const innerHeaderStyle = (): CSSObject => {
  return {
    margin: 0,
    color: 'inherit',
  };
};
