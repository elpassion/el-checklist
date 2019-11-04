/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';

import { TInlineListProps } from '../../@types/inlineList';
import { Pill } from '../Pill/Pill';

import { wrapperStyle, itemStyle } from './InlineList.styles';

export const InlineList: FC<TInlineListProps> = ({
  Tag = 'ul',
  items = [],
  renderItem = (item, i) => (
    <div css={itemStyle}>
      <Pill idx={i} {...item} />
    </div>
  ),
  ...props
}: TInlineListProps) => (
  <Tag {...props} css={wrapperStyle}>
    {items.map(renderItem)}
  </Tag>
);
