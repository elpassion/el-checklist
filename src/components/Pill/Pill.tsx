/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, PropsWithChildren, ReactDOM, useMemo } from 'react';

import { Color } from '../../@types/styling';

import { getWrapperStyle } from './Pill.styles';

type TPill = {
  colorName?: Color;
  Tag?: keyof ReactDOM | FC;
};

type TProps = TPill;

export const Pill: FC<TProps> = ({ children, colorName = 'white', Tag = 'li' }: PropsWithChildren<TProps>) => {
  const wrapperStyle = useMemo(() => getWrapperStyle({ colorName }), [colorName]);
  return <Tag css={wrapperStyle}>{children}</Tag>;
};
