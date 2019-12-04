import { CSSObject } from '@emotion/core';
import { darken } from 'polished';

import { Theme } from '../../@types/styling';
import { clearExtremeMargins } from '../../utils/styling/clearExtremeMargins';

export const wrapperStyle = (theme: Theme): CSSObject => ({
  padding: `${2 * theme.spacing.unit}px ${3 * theme.spacing.unit}px`,
  backgroundColor: theme.palette.background,
  border: `1px solid ${darken(0.1, theme.palette.background)}`,
  borderRadius: theme.shape.radii.default,
  transition: `opacity ${theme.duration.default}ms`,

  '&:nth-of-type(n+2)': {
    marginTop: 2 * theme.spacing.unit,
  },
});

export const sectionStyle = (theme: Theme): CSSObject => {
  return {
    margin: `${theme.spacing.unit}px 0`,
    ...clearExtremeMargins({ verticalOnly: true }),
  };
};

export const tagListStyle = (theme: Theme): CSSObject => {
  return {
    margin: `${1.5 * theme.spacing.unit}px 0 ${2 * theme.spacing.unit}px`,
    paddingLeft: theme.shape.inputSizes.large.standard + 3 * theme.spacing.unit,
    ...clearExtremeMargins({ verticalOnly: true }),
  };
};

export const titleStyle = (theme: Theme): CSSObject => {
  return {
    ...sectionStyle(theme),
    marginBottom: 1.5 * theme.spacing.unit,
  };
};

export const subtitleStyle = (theme: Theme): CSSObject => {
  return {
    position: 'relative',
    display: 'inline-block',
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

export const getFulfillmentStyle = (isFulfilled: boolean) => (): CSSObject => ({ opacity: isFulfilled ? 0.5 : 1 });

export const severityTextStyle = (theme: Theme): CSSObject => {
  return {
    display: 'block',
    fontWeight: 'normal',
    fontSize: theme.fontSizes.small,
  };
};
