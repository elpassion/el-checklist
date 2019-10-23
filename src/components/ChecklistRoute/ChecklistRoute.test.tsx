import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import { TChecklist } from '../../@types/checklist';
import { client } from '../../utils/api/client';

import { ChecklistRoute } from './ChecklistRoute';

jest.mock('../../utils/api/client');
const mockedAxios = client as jest.Mocked<typeof client>;

const mockedSlug: TChecklist['slug'] = 'best-practices';
const mockedResponse: TChecklist = {
  name: 'Best Practices',
  slug: 'best-practices',
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

//eslint-disable-next-line  @typescript-eslint/no-explicit-any
const mockedAny: any = jest.fn();
const mockedRouteProps = {
  history: mockedAny,
  location: mockedAny,
  match: {
    params: { slug: mockedSlug },
    isExact: mockedAny,
    path: mockedAny,
    url: mockedAny,
  },
};

test('should call client to fetch data', () => {
  const dataUrl = `/checklist/${mockedSlug}`;
  const resp = { data: mockedResponse };
  mockedAxios.get.mockResolvedValue(resp);

  render(
    <MemoryRouter>
      <ChecklistRoute {...mockedRouteProps} />
    </MemoryRouter>,
  );

  expect(mockedAxios.get).toHaveBeenCalledWith(dataUrl);
});
