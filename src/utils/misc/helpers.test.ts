import { STORAGE_PREFIX } from '../../config/variables';

import { composeKey, decomposeKey, isInScope } from './helpers';

it('composes keys properly', () => {
  const result = composeKey('testPrefix', 'testName');
  expect(result).toEqual(`${STORAGE_PREFIX}-testPrefix_testName`);
});

it('decomposes keys properly', () => {
  const result = decomposeKey('testPrefix', `${STORAGE_PREFIX}-testPrefix_testName`);
  expect(result).toEqual('testName');

  const resultInvalid = decomposeKey('invalid', `${STORAGE_PREFIX}-testPrefix_testName`);
  expect(resultInvalid).toEqual('');
});

it('checks if in scope properly', () => {
  const result = isInScope('testPrefix', `${STORAGE_PREFIX}-testPrefix_testName`);
  expect(result).toEqual(true);

  const resultInvalid = isInScope('invalid', `${STORAGE_PREFIX}-testPrefix_testName`);
  expect(resultInvalid).toEqual(false);
});
