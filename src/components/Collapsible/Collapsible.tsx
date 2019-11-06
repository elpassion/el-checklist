/** @jsx jsx */
import { jsx } from '@emotion/core';
import { memo, FC, PropsWithChildren, useState, ReactDOM, useMemo, useRef } from 'react';

import {
  wrapperStyle,
  getHeaderStyle,
  innerHeaderStyle,
  getContentOuterStyle,
  contentInnerStyle,
} from './Collapsible.styles';

type TCollapsible = {
  header: string;
  HeaderTag?: keyof ReactDOM | FC;
  ContentTag?: keyof ReactDOM | FC;
  WrapperTag?: keyof ReactDOM | FC;
};
type TProps = TCollapsible;

export const CollapsibleBase: FC<PropsWithChildren<TProps>> = ({
  children,
  header,
  HeaderTag = 'h4',
  ContentTag = 'div',
  WrapperTag = 'section',
}: PropsWithChildren<TProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const onHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  const headerStyle = useMemo(() => getHeaderStyle({ isOpen }), [isOpen]);
  const contentOuterStyle = useMemo(() => getContentOuterStyle({}), []);
  const innerContentRef = useRef<HTMLDivElement>(null);
  const currentInnerContentRef = innerContentRef.current;
  const innerContentHeight = useMemo(() => {
    if (!currentInnerContentRef) {
      return 0;
    }

    const netHeight = currentInnerContentRef.offsetHeight;
    const computedStyle = window.getComputedStyle(currentInnerContentRef);
    const marginTop = parseInt(computedStyle.getPropertyValue('margin-top'));
    const marginBottom = parseInt(computedStyle.getPropertyValue('margin-bottom'));

    return netHeight + marginBottom + marginTop;
  }, [currentInnerContentRef]);
  const outerContentHeight = useMemo(() => (isOpen ? innerContentHeight : 0), [isOpen, innerContentHeight]);

  return (
    <WrapperTag css={wrapperStyle}>
      <button css={headerStyle} onClick={onHeaderClick}>
        <HeaderTag css={innerHeaderStyle}>{header}</HeaderTag>
      </button>

      <ContentTag css={contentOuterStyle} style={{ height: outerContentHeight }}>
        <div ref={innerContentRef} css={contentInnerStyle}>
          {children}
        </div>
      </ContentTag>
    </WrapperTag>
  );
};

export const Collapsible = memo(CollapsibleBase);
