import { ColorsList, Theme } from '../../@types/styling';

const colors: ColorsList = {
  emerald: '#28c23e',
  navy: '#1d2738',
  white: '#ffffff',
  dove: '#f5f5f5',
  gray: '#676767',
};

export const defaultTheme: Theme = {
  spacing: { unit: 8 },

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
    default:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    significant: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },

  duration: {
    default: 200,
  },

  shape: {
    radii: {
      default: 8,
    },
  },
};