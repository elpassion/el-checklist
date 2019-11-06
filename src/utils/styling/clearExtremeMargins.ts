import { CSSObject } from '@emotion/core';

type TArgs = {
  verticalOnly?: boolean;
  horizontalOnly?: boolean;
};

const defaultArgs: TArgs = { verticalOnly: false, horizontalOnly: false };
export const clearExtremeMargins: (args?: TArgs) => CSSObject = (args = {}) => {
  const { verticalOnly, horizontalOnly } = { ...defaultArgs, ...args };

  return {
    '&:first-child': {
      ...(horizontalOnly ? {} : { marginTop: 0 }),
      ...(verticalOnly ? {} : { marginLeft: 0 }),
    },
    '&:last-child': {
      ...(horizontalOnly ? {} : { marginBottom: 0 }),
      ...(verticalOnly ? {} : { marginRight: 0 }),
    },
  };
};
