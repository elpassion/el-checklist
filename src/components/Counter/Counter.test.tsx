import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Counter } from './Counter';

afterEach(cleanup);

it('initializes with count equal 0', () => {
  const { getByTestId } = render(<Counter />);
  const counter = getByTestId('counter-value');

  expect(counter.innerHTML).toBe('0');
});

it('renders "increase" button', () => {
  const { getByText } = render(<Counter />);

  getByText('increase it');
});

it('increases counter on button click', () => {
  const { getByText, getByTestId } = render(<Counter />);
  const counter = getByTestId('counter-value');
  const button = getByText('increase it');

  button.click();

  expect(counter.innerHTML).toBe('1');
});
