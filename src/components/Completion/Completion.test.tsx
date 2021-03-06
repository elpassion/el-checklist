import React from 'react';

import { renderWithTheme } from '../../utils/tests/renderWithTheme';

import { Completion } from './Completion';

it('does not render if total equals 0', () => {
  const { getByText } = renderWithTheme(<Completion totalUnits={0} doneUnits={0} />);
  getByText('Invalid props.');
});

it('does not render if total is less than 0', () => {
  const { getByText } = renderWithTheme(<Completion totalUnits={-1} doneUnits={0} />);
  getByText('Invalid props.');
});

it('shows correct number when props are correct', () => {
  const { getByText } = renderWithTheme(<Completion totalUnits={20} doneUnits={10} />);
  getByText('Done: 50%');
});
