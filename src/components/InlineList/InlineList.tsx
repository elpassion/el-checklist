/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactDOM, ReactNode } from 'react';

import { Pill } from '../Pill/Pill';

import { wrapperStyle, itemStyle } from './InlineList.styles';

type TInlineListProps<TItem = {}> = {
  Tag?: keyof ReactDOM | FC;
  ItemTag?: keyof ReactDOM | FC;
  items: TItem[];
  renderItem?: (item: TItem, i: number) => ReactNode;
};

function defaultRenderItem<T>(item: T, i: number): ReactNode {
  return (
    <div css={itemStyle} key={i}>
      <Pill {...item} />
    </div>
  );
}

export const InlineList: FC<TInlineListProps> = ({
  Tag = 'ul',
  items = [],
  renderItem = defaultRenderItem,
  ...props
}: TInlineListProps) => (
  <Tag {...props} css={wrapperStyle}>
    {items.map(renderItem)}
  </Tag>
);
