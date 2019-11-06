import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';
import { assureTheme } from '../../utils/misc/themedStyles';

type TGetHeaderStyleArgs = {
  isOpen?: boolean;
  transitionDuration?: number;
};

type TGetContentOuterStyleArgs = {
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
  providedTheme: Theme,
): CSSObject => {
  const theme = assureTheme(providedTheme);

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

    '&:before': {
      position: 'absolute',
      top: 0.45 * LINE_HEIGHT * FONT_SIZE,
      width: 0,
      height: 0,
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
  };
};

export const innerHeaderStyle = (): CSSObject => {
  return {
    margin: 0,
  };
};

export const contentInnerStyle = (): CSSObject => {
  return {
    padding: `1px 0`,
    margin: `-1px 0`,
  };
};

export const getContentOuterStyle = ({
  isOpen = false,
  transitionDuration = 200,
}: TGetContentOuterStyleArgs) => (): CSSObject => {
  const openStyles = {
    opacity: 1,
    visibility: 'visible' as 'visible',
    transition: `
      height ${transitionDuration}ms ${TRANSITION_TIMING},
      opacity ${transitionDuration}ms ${TRANSITION_TIMING},
      visibility ${transitionDuration}ms ${0}ms
    `,
  };

  const closedStyles = {
    opacity: 0,
    visibility: 'hidden' as 'hidden',
    transition: `
      height ${transitionDuration}ms ${TRANSITION_TIMING},
      opacity ${transitionDuration}ms ${TRANSITION_TIMING},
      visibility ${transitionDuration}ms ${transitionDuration}ms
    `,
  };

  return {
    overflow: 'hidden',
    opacity: 0,
    transition: `height ${transitionDuration}ms ${TRANSITION_TIMING}, opacity ${transitionDuration}ms ${TRANSITION_TIMING}`,
    willChange: 'height',
    ...(isOpen ? openStyles : closedStyles),
  };
};
