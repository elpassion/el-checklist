import { CSSObject } from '@emotion/core';

import { Theme } from '../../@types/styling';

const SPACE_RATIO = 1;

export const wrapperStyle = (theme: Theme): CSSObject => {
  const space = SPACE_RATIO * theme.spacing.unit;

  return {
    padding: 0,
    margin: `${-space}px 0 0 ${-space}px`,
    display: 'flex',
    flexWrap: 'wrap',
  };
};

export const itemStyle = (theme: Theme): CSSObject => {
  const space = SPACE_RATIO * theme.spacing.unit;

  return {
    margin: `${space}px 0 0 ${space}px`,
  };
};
