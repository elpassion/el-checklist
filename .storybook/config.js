/** @jsx jsx */

import { Global, jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MemoryRouter } from "react-router";
import { globalStyles } from "../src/styling/global";

import { FulfillmentContext } from "../src/contexts/FulfillmentContext";
import { defaultTheme } from "../src/styling/themes/default";

const fulfillmentContext = {
  fulfillments: [],
  isFulfilled: () => {},
  setFulfillment: () => {},
  clearFulfillments: () => {},
};

addDecorator(storyFn => (
  <ThemeProvider theme={defaultTheme}>

  <MemoryRouter>
    <Global styles={globalStyles} />

    <FulfillmentContext.Provider value={fulfillmentContext}>
        {storyFn()}
    </FulfillmentContext.Provider>
  </MemoryRouter>
  </ThemeProvider>
));

configure(require.context('../src/components', true, /\.stories\.js$/), module);
