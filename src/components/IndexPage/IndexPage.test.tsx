import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { IndexPage } from './IndexPage';

afterEach(cleanup);

it('renders "Hello"', () => {
  const { getByText } = render(<IndexPage/>);

  getByText('Hello');
});
