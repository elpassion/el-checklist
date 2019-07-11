import React from 'react';

import {
  render,
} from '@testing-library/react'

import { App } from './App';

it('renders "Learn React" text', () => {
  const { getByText } = render(<App />);
  getByText('Learn React');
});
