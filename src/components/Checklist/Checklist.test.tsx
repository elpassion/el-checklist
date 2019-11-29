import { cleanup } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import { FulfillmentContext } from '../../contexts/FulfillmentContext';
import { TChecklistTask } from '../../@types/checklist';
import { renderWithTheme } from '../../utils/tests/renderWithTheme';

import { Checklist } from './Checklist';

afterEach(() => {
  cleanup();
});

const mockedChecklist = {
  id: '7',
  name: 'Best Practices 7',
  description: 'description goes here',
  slug: 'best-practices-7',
  sections: [
    {
      name: 'HEAD',
      tasks: [
        {
          name: 'Doctype',
          description: 'The Doctype is HTML5 and is at the top of all your HTML pages.',
          solution: '',
          tags: ['meta tag'],
          severity: 3,
          slug: 'doctype',
        },
        {
          name: 'Favicons',
          description: 'Each favicon has been created and displays correctly.',
          solution: '[Favicon Cheat Sheet](https://github.com/audreyr/favicon-cheat-sheet)',
          tags: ['meta tag'],
          severity: 2,
          slug: 'favicons',
        },
      ],
    },
    {
      name: 'HTML',
      tasks: [
        {
          name: 'Adblockers test:',
          description: 'Your website shows your content correctly with adblockers enabled',
          solution: '',
          tags: ['html', 'testing'],
          severity: 2,
          slug: 'adblockers-test',
        },
      ],
    },
  ],
};

const allItems = mockedChecklist.sections.reduce(
  (acc, section) => {
    section.tasks.forEach((item: TChecklistTask) => acc.push(item));
    return acc;
  },
  [] as TChecklistTask[],
);
const mockedFulfillmentContextValue = {
  fulfillments: [],
  isFulfilled: jest.fn(),
  setFulfillment: jest.fn(),
  clearFulfillments: jest.fn(),
};
const renderWrapped = (fulfillmentContext = mockedFulfillmentContextValue) =>
  renderWithTheme(
    <MemoryRouter>
      <FulfillmentContext.Provider value={fulfillmentContext}>
        <Checklist checklist={mockedChecklist} />
      </FulfillmentContext.Provider>
    </MemoryRouter>,
  );

test('renders name', () => {
  const { getByText } = renderWrapped();

  getByText(mockedChecklist.name, { exact: false });
});

test('renders description', () => {
  const { getByText } = renderWrapped();

  getByText(mockedChecklist.description, { exact: false });
});

test('renders "clear" button', () => {
  const { getByText } = renderWrapped();

  getByText('clear');
});

test('renders all checkboxes', () => {
  const { getByLabelText } = renderWrapped();

  allItems.forEach(item => {
    getByLabelText(item.name, { exact: false });
  });
});

test('checks if items are fulfilled when rendering', () => {
  const mockIsFulfilled = jest.fn().mockReturnValue(true);
  const contextValue = {
    ...mockedFulfillmentContextValue,
    isFulfilled: mockIsFulfilled,
  };

  const { getByLabelText } = renderWrapped(contextValue);

  allItems.forEach(item => {
    const checkbox = getByLabelText(item.name, { exact: false }) as HTMLInputElement;
    expect(mockIsFulfilled).toHaveBeenCalledWith(item.slug);
    expect(checkbox.checked).toBe(true);
  });
});

test('calls setFulfillment when fulfillment value changes', () => {
  const mockSetFulfillment = jest.fn();
  const contextValue = {
    ...mockedFulfillmentContextValue,
    setFulfillment: mockSetFulfillment,
  };

  const { getByLabelText } = renderWrapped(contextValue);
  const item = allItems[0];
  const checkbox = getByLabelText(item.name, { exact: false }) as HTMLInputElement;

  checkbox.click();

  expect(mockSetFulfillment).toHaveBeenCalledWith({ name: item.slug, isDone: true });
});
