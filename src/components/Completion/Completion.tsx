/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { TCompletion } from '../../@types/completion';

import { textStyles, wrapperStyles } from './Completion.styles';

type TProps = TCompletion;
export const Completion: React.FC<TProps> = ({ doneUnits, totalUnits }: TProps) => {
  if (totalUnits <= 0) {
    return <span>Invalid props.</span>;
  }
  const part = doneUnits / totalUnits;
  const barStyle = { '&:after': { transform: `scaleX(${part})` } };
  const content = `Done: ${Math.round(part * 100)}%`;

  return (
    <span css={theme => [wrapperStyles(theme), barStyle]}>
      <span css={textStyles} aria-label={content}>
        {content}
      </span>
    </span>
  );
};
