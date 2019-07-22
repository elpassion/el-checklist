import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import { TChecklist } from '../../@types/checklist';
import { client } from '../../utils/api/client';

import { ChecklistRoute } from './ChecklistRoute';

jest.mock('../../utils/api/client');
const mockedAxios = client as jest.Mocked<typeof client>;

const mockedId: TChecklist['id'] = '7';
const mockedResponse: TChecklist = {
  id: mockedId,
  name: 'Best Practices',
  slug: 'best-practices',
  sections: [
    {
      name: 'HEAD',
      items: [
        {
          id: '7',
          title: 'Doctype',
          description:
            'The Doctype is HTML5 and is at the top of all your HTML pages.',
          solutions: [],
          categories: ['meta tag'],
          severity: 3,
          slug: 'doctype',
          isDone: false,
        },
        {
          id: '7',
          title: 'Favicons',
          description: 'Each favicon has been created and displays correctly.',
          solutions: [
            '[Favicon Cheat Sheet](https://github.com/audreyr/favicon-cheat-sheet)',
          ],
          categories: ['meta tag'],
          severity: 2,
          slug: 'favicons',
          isDone: false,
        },
      ],
    },
    {
      name: 'HTML',
      items: [
        {
          id: '7',
          title: 'Adblockers test:',
          description:
            'Your website shows your content correctly with adblockers enabled',
          solutions: [],
          categories: ['html', 'testing'],
          severity: 2,
          slug: 'adblockers-test',
          isDone: false,
        },
      ],
    },
  ],
};

//eslint-disable-next-line  @typescript-eslint/no-explicit-any
const mockedAny: any = jest.fn();
const mockedRouteProps = {
  history: mockedAny,
  location: mockedAny,
  match: {
    params: { id: mockedId },
    isExact: mockedAny,
    path: mockedAny,
    url: mockedAny,
  },
};

test('should call client to fetch data', () => {
  const dataUrl = `/checklist/${mockedId}`;
  const resp = { data: mockedResponse };
  mockedAxios.get.mockResolvedValue(resp);

  render(
    <MemoryRouter>
      <ChecklistRoute {...mockedRouteProps} />
    </MemoryRouter>,
  );

  expect(mockedAxios.get).toHaveBeenCalledWith(dataUrl);
});
