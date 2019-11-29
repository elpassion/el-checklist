/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';

import { ContentContextProvider } from '../../contexts/ContentContext';
import { ChecklistsIndexRoute } from '../ChecklistsIndexRoute/ChecklistsIndexRoute';
import { ChecklistRoute } from '../ChecklistRoute/ChecklistRoute';
import { defaultTheme } from '../../styling/themes/default';
import { globalStyles } from '../../styling/global';

import { contentStyle, wrapperStyle } from './App.styles';

export const App: FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <ContentContextProvider>
      <Global styles={globalStyles} />

      <Router>
        <div css={wrapperStyle}>
          <main css={contentStyle}>
            <Switch>
              <Route path="/checklists" component={ChecklistsIndexRoute} />
              <Route path="/checklist/:slug" component={ChecklistRoute} />
              <Redirect to="/checklists" />
            </Switch>
          </main>
        </div>
      </Router>
    </ContentContextProvider>
  </ThemeProvider>
);
