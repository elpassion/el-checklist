import React from 'react';
import { render } from '@testing-library/react';

import { IndexPage } from './IndexPage';

it('renders "Hello"', () => {
  const { getByText } = render(<IndexPage />);

  getByText('Hello');
});
