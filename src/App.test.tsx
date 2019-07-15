import React from 'react';
import { render } from '@testing-library/react';

import { App } from './App';

it('renders nav links', () => {
  const { getByText } = render(<App />);

  getByText('Home');
  getByText('Counter');
});
