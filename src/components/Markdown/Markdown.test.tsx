import { render } from '@testing-library/react';
import React from 'react';

import { Markdown } from './Markdown';

it('renders links with target="_blank" and rel="noopener noreferrer"', () => {
  const { getByText } = render(<Markdown>([TheLink](https://test.com))</Markdown>);
  const link = getByText('TheLink');
  expect(link).toHaveProperty('target', '_blank');
  expect(link).toHaveProperty('rel', 'noopener noreferrer');
});
