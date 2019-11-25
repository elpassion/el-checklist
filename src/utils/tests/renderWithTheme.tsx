/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import { defaultTheme } from '../../styling/themes/default';

export const renderWithTheme = (content: ReactNode) =>
  render(<ThemeProvider theme={defaultTheme}>{content}</ThemeProvider>);
