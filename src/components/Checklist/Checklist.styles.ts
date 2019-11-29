import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

export const headerStyle = (theme: Theme): CSSObject => {
  return {
    display: 'grid',
    gridGap: 2 * theme.spacing.unit,
    gridTemplateAreas: `"back clear" "heading heading"`,
    gridTemplateColumns: 'auto min-content',
    gridTemplateRows: 'auto auto',
    alignItems: 'start',
    marginBottom: theme.spacing.unit,
    fontSize: theme.fontSizes.significant,
  };
};

export const backLinkStyle = (theme: Theme): CSSObject => {
  return {
    gridArea: 'back',
    justifySelf: 'start',
    display: 'inline-block',
    fontSize: theme.fontSizes.small,
  };
};

export const clearButtonStyle = (): CSSObject => {
  return {
    gridArea: 'clear',
    justifySelf: 'end',
  };
};

export const headingStyle = (theme: Theme): CSSObject => {
  return {
    gridArea: 'heading',
    fontSize: theme.fontSizes.significant,
  };
};

export const itemStyle = (theme: Theme): CSSObject => {
  return {
    '&+&': {
      marginTop: theme.spacing.unit,
    },
  };
};

export const itemHeaderStyle = (): CSSObject => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    'h1, h2, h3, h4, h5, h6': {
      color: 'inherit',
    },
  };
};

export const itemTitleStyle = (theme: Theme): CSSObject => {
  return {
    lineHeight: 'normal',

    '&:after': {
      bottom: -theme.shape.underline.default,
      left: 0,
      display: 'block',
      content: '""',
      width: '100%',
      height: theme.shape.underline.default,
      backgroundColor: 'currentColor',
      opacity: 0,
      transition: `opacity ${theme.duration.default}ms`,
    },

    'button:focus &:after': {
      opacity: 1,
    },
  };
};
