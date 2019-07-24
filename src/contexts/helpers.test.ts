import { composeKey, decomposeKey } from './helpers';

it('composes keys properly', () => {
  const result = composeKey('testPrefix', 'testName');
  expect(result).toEqual('testPrefix_testName');
});

it('decomposes keys properly', () => {
  const result = decomposeKey('testPrefix', 'testPrefix_testName');
  expect(result).toEqual('testName');
});
