import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import { Context, createContext } from 'react';

import { store } from '../utils/storage/store';
import { FulfillmentContextData, TItemFulfillment } from '../@types/fulfillment';

import { composeKey, decomposeKey } from './helpers';

const initialData: FulfillmentContextData = {
  fulfillments: [] as TItemFulfillment[],
  isFulfilled: () => false,
  setFulfillment: () => null,
};

export const FulfillmentContext: Context<FulfillmentContextData> = createContext(initialData);

type TProps = { prefix: string };
export const FulfillmentContextProvider: React.FC<TProps> = ({ prefix, children }: PropsWithChildren<TProps>) => {
  const [fulfillments, setFulfillments] = React.useState(initialData.fulfillments);
  const [isInitialized, setIsInitialized] = React.useState(false);

  useEffect(() => {
    const newFulfillments: TItemFulfillment[] = [];

    store
      .iterate((value, key) => {
        if (key.startsWith(prefix)) {
          const name = decomposeKey(prefix, key);
          newFulfillments.push({ name, isDone: value === 'yes' });
        }
      })
      .then(() => {
        setFulfillments(newFulfillments);
        setIsInitialized(true);
      });
  }, [prefix]);

  const setFulfillment = useCallback(
    (fulfillment: TItemFulfillment) => {
      const key = composeKey(prefix, fulfillment.name);
      store.setItem(key, fulfillment.isDone ? 'yes' : 'no').then(() => {
        const newFulfillments = [...fulfillments];
        const foundIndex = newFulfillments.findIndex(ft => ft.name === fulfillment.name);

        if (foundIndex >= 0) {
          newFulfillments[foundIndex].isDone = fulfillment.isDone;
        } else {
          newFulfillments.push(fulfillment);
        }

        setFulfillments(newFulfillments);
      });
    },
    [fulfillments, prefix],
  );

  const isFulfilled = (name: string): boolean => {
    const fulfillment = fulfillments.find(ft => ft.name === name);
    return !!(fulfillment && fulfillment.isDone);
  };

  if (isInitialized) {
    return (
      <FulfillmentContext.Provider
        value={{
          fulfillments,
          isFulfilled,
          setFulfillment,
        }}
      >
        {children}
      </FulfillmentContext.Provider>
    );
  }

  return null;
};
