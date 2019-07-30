import React, { FC, useContext } from 'react';
import { render, waitForDomChange } from '@testing-library/react';

import { store } from '../utils/storage/store';
import { STORAGE_PREFIX, STORAGE_TRUE } from '../config/variables';

import { FulfillmentContext, FulfillmentContextProvider } from './FulfillmentContext';

jest.mock('../utils/storage/store');
store.iterate = jest.fn().mockResolvedValue(null);
store.setItem = jest.fn().mockResolvedValue(null);
store.removeItem = jest.fn().mockResolvedValue(null);

test('iterates over existing items when initializing and renders them', async () => {
  const TestList: FC = () => {
    const { fulfillments } = useContext(FulfillmentContext);

    return (
      <ul>
        {fulfillments.map(ff => (
          <li key={ff.name}>item: {ff.name}</li>
        ))}
      </ul>
    );
  };

  const initialItems = [
    { key: `${STORAGE_PREFIX}-xxx_existing1`, value: STORAGE_TRUE },
    { key: `${STORAGE_PREFIX}-xxx_existing2`, value: STORAGE_TRUE },
  ];
  store.iterate = jest.fn().mockImplementation(cb => {
    initialItems.forEach(item => {
      cb(item.value, item.key);
    });
    return Promise.resolve();
  });

  const { getAllByText } = render(
    <FulfillmentContextProvider prefix={'xxx'}>
      <TestList />
    </FulfillmentContextProvider>,
  );
  await waitForDomChange();

  const items = getAllByText('item:', { exact: false });
  expect(items.length).toEqual(2);
});

test('sets fulfillment state correctly', async () => {
  const TestButtons: FC = () => {
    const { isFulfilled, setFulfillment } = useContext(FulfillmentContext);
    return (
      <>
        <button data-testid="buttonTrue" onClick={() => setFulfillment({ name: 'testName', isDone: true })}>
          Set fulfillment to true
        </button>

        <button data-testid="buttonFalse" onClick={() => setFulfillment({ name: 'testName', isDone: false })}>
          Set fulfillment to true
        </button>

        <p data-testid="currentState">{isFulfilled('testName') ? 'T' : 'F'}</p>
      </>
    );
  };

  const { getByTestId } = render(
    <FulfillmentContextProvider prefix={'xxx'}>
      <TestButtons />
    </FulfillmentContextProvider>,
  );

  await waitForDomChange();
  const buttonTrue = getByTestId('buttonTrue');
  const buttonFalse = getByTestId('buttonFalse');
  const currentState = getByTestId('currentState');
  expect(currentState.innerHTML).toEqual(expect.stringContaining('F'));

  buttonTrue.click();
  await waitForDomChange();
  expect(currentState.innerHTML).toEqual(expect.stringContaining('T'));

  buttonFalse.click();
  await waitForDomChange();
  expect(currentState.innerHTML).toEqual(expect.stringContaining('F'));
});

test('clears fulfillment state correctly', async () => {
  const TestClear: FC = () => {
    const { fulfillments, setFulfillment, clearFulfillments } = useContext(FulfillmentContext);
    return (
      <>
        <p data-testid="currentState">{fulfillments.length}</p>

        <button data-testid="buttonTrue" onClick={() => setFulfillment({ name: 'testName', isDone: true })}>
          Set fulfillment to true
        </button>

        <button data-testid="buttonClear" onClick={() => clearFulfillments()}>
          clear
        </button>
      </>
    );
  };

  const { getByTestId } = render(
    <FulfillmentContextProvider prefix={'xxx'}>
      <TestClear />
    </FulfillmentContextProvider>,
  );

  await waitForDomChange();
  const currentState = getByTestId('currentState');
  const buttonTrue = getByTestId('buttonTrue');
  const buttonClear = getByTestId('buttonClear');

  buttonTrue.click();
  await waitForDomChange();
  expect(parseInt(currentState.innerHTML) > 0).toBeTruthy();

  buttonClear.click();
  await waitForDomChange();
  expect(store.removeItem).toHaveBeenCalled();
  expect(parseInt(currentState.innerHTML)).toEqual(0);
});
