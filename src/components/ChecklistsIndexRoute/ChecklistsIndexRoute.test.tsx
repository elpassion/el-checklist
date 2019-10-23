import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';

import { TChecklistsIndex } from '../../@types/checklist';
import { client } from '../../utils/api/client';

import { ChecklistsIndexRoute } from './ChecklistsIndexRoute';

jest.mock('../../utils/api/client');
const mockedAxios = client as jest.Mocked<typeof client>;

const mockedResponse: TChecklistsIndex = [
  {
    name: 'Best Practices 1',
    slug: 'best-practices-1',
  },
  {
    name: 'Best Practices 2',
    slug: 'best-practices-2',
  },
];

test('should call client to fetch data', () => {
  const dataUrl = `/checklists`;
  const resp = { data: mockedResponse };
  mockedAxios.get.mockResolvedValue(resp);

  render(
    <MemoryRouter>
      <ChecklistsIndexRoute />
    </MemoryRouter>,
  );

  expect(mockedAxios.get).toHaveBeenCalledWith(dataUrl);
});
