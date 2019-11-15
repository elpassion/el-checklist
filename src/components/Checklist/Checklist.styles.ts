import { CSSObject } from '@emotion/core';

export const titleStyle = (): CSSObject => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };
};
