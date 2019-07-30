import { render } from '@testing-library/react';
import React from 'react';

import { TChecklist } from '../../@types/checklist';

import { ChecklistItem } from './ChecklistItem';

const mockedId: TChecklist['id'] = '7';
const mockedItem = {
  id: mockedId,
  title: 'Doctype',
  description: 'The Doctype is HTML5 and is at the top of all your HTML pages.',
  solutions: [],
  categories: ['meta tag'],
  severity: 3,
  slug: 'doctype',
};

test('should render unchecked checkbox by default', () => {
  const { getByLabelText } = render(<ChecklistItem {...mockedItem} />);
  const checkbox = getByLabelText(mockedItem.title, { exact: false }) as HTMLInputElement;

  expect(checkbox.checked).toBe(false);
});

test('should render checked checkbox if isChecked prop is true', () => {
  const { getByLabelText } = render(<ChecklistItem {...mockedItem} isChecked={true} />);
  const checkbox = getByLabelText(mockedItem.title, { exact: false }) as HTMLInputElement;

  expect(checkbox.checked).toBe(true);
});

test('should call onChange fn when checkbox changes', () => {
  const mockOnChange = jest.fn();
  const { getByLabelText } = render(<ChecklistItem {...mockedItem} isChecked={true} onChange={mockOnChange} />);
  const checkbox = getByLabelText(mockedItem.title, { exact: false }) as HTMLInputElement;

  checkbox.click();

  expect(mockOnChange).toHaveBeenCalledWith(mockedId, false);
});
