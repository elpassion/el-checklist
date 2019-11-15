/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, PropsWithChildren, useState, ReactDOM, ReactNode } from 'react';

import {
  wrapperStyle,
  getHeaderStyle,
  innerHeaderStyle,
  getContentOuterStyle,
  contentInnerStyle,
} from './Collapsible.styles';

type TCollapsible = {
  header: ReactNode;
  HeaderTag?: keyof ReactDOM | FC;
  ContentTag?: keyof ReactDOM | FC;
  WrapperTag?: keyof ReactDOM | FC;
  isInitiallyOpen?: boolean;
};
type TProps = TCollapsible;

export const Collapsible: FC<PropsWithChildren<TProps>> = ({
  children,
  header,
  HeaderTag = 'h4',
  ContentTag = 'div',
  WrapperTag = 'section',
  isInitiallyOpen = false,
}: PropsWithChildren<TProps>) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const [outerContentHeight, setOuterContentHeight] = useState<number | 'auto'>(isOpen ? 'auto' : 0);

  const onIsOpenUpdate = (isOpen: boolean) => {
    setIsOpen(isOpen);
    setOuterContentHeight(isOpen ? 'auto' : 0);
  };

  const onHeaderClick = () => {
    onIsOpenUpdate(!isOpen);
  };

  return (
    <WrapperTag css={wrapperStyle}>
      <button css={getHeaderStyle({ isOpen })} onClick={onHeaderClick}>
        <HeaderTag css={innerHeaderStyle}>{header}</HeaderTag>
      </button>

      <ContentTag css={getContentOuterStyle({ isOpen })} style={{ height: outerContentHeight }}>
        <div css={contentInnerStyle}>{children}</div>
      </ContentTag>
    </WrapperTag>
  );
};
