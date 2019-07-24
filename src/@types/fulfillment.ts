export type TItemFulfillment = {
  name: string;
  isDone: boolean;
};

export type FulfillmentContextData = {
  fulfillments: TItemFulfillment[];
  isFulfilled: (name: string) => boolean;
  setFulfillment: (fulfillment: TItemFulfillment) => void;
};
