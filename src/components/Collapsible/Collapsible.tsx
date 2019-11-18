/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, PropsWithChildren, useState, ReactDOM, ReactNode } from 'react';
import AnimateHeight from 'react-animate-height';

import { wrapperStyle, getHeaderStyle, innerHeaderStyle } from './Collapsible.styles';

type TCollapsible = {
  header: ReactNode;
  HeaderTag?: keyof ReactDOM | FC;
  WrapperTag?: keyof ReactDOM | FC;
  isInitiallyOpen?: boolean;
};
type TProps = TCollapsible;

export const Collapsible: FC<PropsWithChildren<TProps>> = ({
  children,
  header,
  HeaderTag = 'h4',
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

      <AnimateHeight
        duration={200}
        height={outerContentHeight} // see props documentation below
        easing="ease-in-out"
      >
        {children}
      </AnimateHeight>
    </WrapperTag>
  );
};
