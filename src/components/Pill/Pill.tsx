/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, PropsWithChildren, useMemo } from 'react';

import { TPill } from '../../@types/pill';

import { getWrapperStyle } from './Pill.styles';

type TProps = TPill;

export const Pill: FC<TProps> = ({ children, colorName = 'white', Tag = 'li' }: PropsWithChildren<TProps>) => {
  const wrapperStyle = useMemo(() => getWrapperStyle({ colorName }), [colorName]);
  return <Tag css={wrapperStyle}>{children}</Tag>;
};
