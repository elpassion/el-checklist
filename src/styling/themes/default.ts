import { lighten } from 'polished';

import { ColorsList, Theme } from '../../@types/styling';

const COLORS: ColorsList = {
  emerald: '#28c23e',
  navy: '#1d2738',
  white: '#ffffff',
  dove: '#F5F5F5',
  gray: '#676767',
  silver: '#a7a7a7',
  lime: '#A6DB68',
  amber: '#ffcb86',
  coral: '#FF8787',
};

export const defaultTheme: Theme = {
  spacing: { unit: 8 },

  breakpoints: {
    sm: 600,
  },

  colors: COLORS,

  palette: {
    primary: COLORS.emerald,
    primaryActivated: lighten(0.1, COLORS.emerald),
    secondary: COLORS.navy,
    disabled: COLORS.silver,
    background: COLORS.dove,
    backgroundHoisted: COLORS.white,
    text: COLORS.gray,
    heading: COLORS.navy,
    headingActivated: lighten(0.25, COLORS.navy),
    success: COLORS.lime,
    warning: COLORS.amber,
    error: COLORS.coral,
  },

  fonts: {
    default: 'Montserrat, sans-serif',
    significant: 'Montserrat, sans-serif',
  },

  fontSizes: {
    default: 16,
    significant: 24,
    small: 14,
  },

  duration: {
    default: 200,
  },

  shape: {
    radii: {
      default: 8,
    },
    underline: {
      default: 2,
      thick: 8,
    },
    inputSizes: {
      default: {
        standard: 16,
        expanded: 18,
      },
      large: {
        standard: 32,
        expanded: 36,
      },
    },
  },
};
