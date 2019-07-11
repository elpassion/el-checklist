import React from 'react';
import { render } from '@testing-library/react';

import { App } from './App';

it('renders counter', () => {
  const { getByText } = render(<App />);

  getByText('current count is:');
});
