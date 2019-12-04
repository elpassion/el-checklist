/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';

import { offlineIndicatorStyles } from './OfflineIndicator.styles';

export const OfflineIndicator: FC = () => {
  const isVisible = !navigator!.onLine;

  if (!isVisible) {
    return null;
  }

  return <div css={offlineIndicatorStyles}>You are offline!</div>;
};
