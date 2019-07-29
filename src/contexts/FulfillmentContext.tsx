import React, { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { Context, createContext } from 'react';

import { store } from '../utils/storage/store';
import { FulfillmentContextData, TItemFulfillment } from '../@types/fulfillment';
import { composeKey, decomposeKey, isInScope } from '../utils/misc/helpers';
import { STORAGE_FALSE, STORAGE_TRUE } from '../config/variables';

const initialData: FulfillmentContextData = {
  fulfillments: [] as TItemFulfillment[],
  isFulfilled: () => false,
  setFulfillment: () => null,
};

export const FulfillmentContext: Context<FulfillmentContextData> = createContext(initialData);

type TProps = { prefix: string };
export const FulfillmentContextProvider: FC<TProps> = ({ prefix, children }: PropsWithChildren<TProps>) => {
  const [fulfillments, setFulfillments] = useState(initialData.fulfillments);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const newFulfillments: TItemFulfillment[] = [];

    store
      .iterate((value, key) => {
        if (isInScope(prefix, key)) {
          const name = decomposeKey(prefix, key);
          newFulfillments.push({ name, isDone: value === STORAGE_TRUE });
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
      store.setItem(key, fulfillment.isDone ? STORAGE_TRUE : STORAGE_FALSE).then(() => {
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
