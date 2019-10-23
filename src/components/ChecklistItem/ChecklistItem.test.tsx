import { render } from '@testing-library/react';
import React from 'react';

import { TChecklist } from '../../@types/checklist';

import { ChecklistItem } from './ChecklistItem';

const mockedSlug: TChecklist['slug'] = 'doctype';
const mockedItem = {
  name: 'Doctype',
  description: 'The Doctype is HTML5 and is at the top of all your HTML pages.',
  solution: '',
  tags: ['meta tag'],
  severity: 3,
  slug: mockedSlug,
};

test('should render unchecked checkbox by default', () => {
  const { getByLabelText } = render(<ChecklistItem {...mockedItem} />);
  const checkbox = getByLabelText(mockedItem.name, { exact: false }) as HTMLInputElement;

  expect(checkbox.checked).toBe(false);
});

test('should render checked checkbox if isFulfilled prop is true', () => {
  const { getByLabelText } = render(<ChecklistItem {...mockedItem} isFulfilled={true} />);
  const checkbox = getByLabelText(mockedItem.name, { exact: false }) as HTMLInputElement;

  expect(checkbox.checked).toBe(true);
});

test('should call onChange fn when checkbox changes', () => {
  const mockOnChange = jest.fn();
  const { getByLabelText } = render(<ChecklistItem {...mockedItem} isFulfilled={true} onChange={mockOnChange} />);
  const checkbox = getByLabelText(mockedItem.name, { exact: false }) as HTMLInputElement;

  checkbox.click();

  expect(mockOnChange).toHaveBeenCalledWith(mockedSlug, false);
});
