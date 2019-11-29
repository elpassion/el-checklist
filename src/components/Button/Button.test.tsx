import React from 'react';
import { MemoryRouter } from 'react-router';

import { renderWithTheme } from '../../utils/tests/renderWithTheme';

import { Button } from './Button';

test('renders "a" element if "to" prop provided', () => {
  const { getByText } = renderWithTheme(
    <MemoryRouter>
      <Button to={'/test'}>Test item</Button>
    </MemoryRouter>,
  );
  const el = getByText('Test item');
  expect(el.tagName.toLowerCase()).toEqual('a');
});

test('renders "button" element if "onClick" prop provided', () => {
  const { getByText } = renderWithTheme(<Button onClick={() => {}}>Test item</Button>);
  const el = getByText('Test item');
  expect(el.tagName.toLowerCase()).toEqual('button');
});
