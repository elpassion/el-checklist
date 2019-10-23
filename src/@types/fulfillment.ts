export type TItemFulfillment = {
  name: string;
  isDone: boolean;
};

export type TFulfillmentContextData = {
  fulfillments: TItemFulfillment[];
  isFulfilled: (name: string) => boolean;
  setFulfillment: (fulfillment: TItemFulfillment) => void;
  clearFulfillments: () => void;
};
