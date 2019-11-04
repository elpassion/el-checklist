import { FC, ReactDOM, ReactNode } from 'react';

export type TInlineListProps<TItem = any> = {
  Tag?: keyof ReactDOM | FC;
  ItemTag?: keyof ReactDOM | FC;
  items: TItem[];
  renderItem?: (item: TItem, i: number) => ReactNode;
};
