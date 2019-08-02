import { Theme } from '../@types/styling';

export const globalStyles = (theme: Theme) => ({
  '*': {
    boxSizing: 'border-box' as 'border-box',
  },

  body: {
    margin: 0,
    fontFamily: theme.fonts.default,
    backgroundColor: theme.palette.background,
    color: theme.palette.text,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: theme.fonts.significant,
    color: theme.palette.heading,
    margin: 0,
  },

  ul: {
    paddingLeft: 0,
    listStyle: 'none',
  },

  '.ul--pointed': {
    paddingLeft: 4 * theme.spacing.unit,
    listStyle: 'initial',
  },
});
