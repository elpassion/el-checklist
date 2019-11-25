import { ColorsList, Theme } from '../../@types/styling';

const colors: ColorsList = {
  emerald: '#28c23e',
  navy: '#1d2738',
  white: '#ffffff',
  dove: '#F5F5F5',
  gray: '#676767',
};

export const defaultTheme: Theme = {
  spacing: { unit: 8 },

  breakpoints: {
    'sm': 600,
  },

  colors: colors,

  palette: {
    primary: colors.emerald,
    secondary: colors.navy,
    background: colors.dove,
    backgroundHoisted: colors.white,
    text: colors.gray,
    heading: colors.navy,
  },

  fonts: {
    default: 'Montserrat, sans-serif',
    significant: 'Montserrat, sans-serif',
  },

  fontSizes: {
    default: 16,
    significant: 20,
    small: 14,
  },

  duration: {
    default: 200,
  },

  shape: {
    radii: {
      default: 8,
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
