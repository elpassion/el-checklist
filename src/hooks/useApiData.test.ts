import { renderHook } from '@testing-library/react-hooks';

import { client } from '../utils/api/client';

import { useApiData } from './useApiData';

jest.mock('../utils/api/client');
const mockedAxios = client as jest.Mocked<typeof client>;

test('initializes as loading', () => {
  const { result } = renderHook(() => useApiData('testUrl'));

  expect(result.current.data).toBe(null);
  expect(result.current.isLoading).toBe(true);
  expect(result.current.hasError).toBe(false);
});

test('handles data reception correctly', async () => {
  const resp = { data: 'hello' };
  mockedAxios.get.mockResolvedValue(resp);

  const { result, waitForNextUpdate } = renderHook(() => useApiData('testUrl'));
  await waitForNextUpdate();

  expect(result.current.data).toBe(resp.data);
  expect(result.current.isLoading).toBe(false);
  expect(result.current.hasError).toBe(false);
});

test('handles data error correctly', async () => {
  mockedAxios.get.mockRejectedValue('Something is wrong');

  const { result, waitForNextUpdate } = renderHook(() => useApiData('testUrl'));
  await waitForNextUpdate();

  expect(result.current.data).toBe(null);
  expect(result.current.isLoading).toBe(false);
  expect(result.current.hasError).toBe(true);
});
