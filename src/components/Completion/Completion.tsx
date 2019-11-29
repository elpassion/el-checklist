/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { TCompletion } from '../../@types/completion';

import { textStyles, wrapperStyles } from './Completion.styles';
import { checkMarkLineStyle, getCheckMarkStyle } from './Completion.styles';

type TProps = TCompletion;
export const Completion: React.FC<TProps> = ({ doneUnits, totalUnits }: TProps) => {
  if (totalUnits <= 0) {
    return <span>Invalid props.</span>;
  }
  const part = doneUnits / totalUnits;
  const isFinished = part === 1;
  const barStyle = { '&:after': { transform: `scaleX(${part})` } };
  const content = `Done: ${Math.round(part * 100)}%`;

  return (
    <span css={theme => [wrapperStyles(theme), barStyle]}>
      <svg css={getCheckMarkStyle(isFinished)} viewBox="6 6 20 20">
        <polyline css={checkMarkLineStyle} points="7.6,15.6 14.2,22.2 24.4,9.6 " />
      </svg>

      <span css={textStyles} aria-label={content}>
        {content}
      </span>
    </span>
  );
};
