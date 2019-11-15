import React from 'react';

import { TCompletion } from '../../@types/completion';

type TProps = TCompletion;
export const Completion: React.FC<TProps> = ({ doneUnits, totalUnits }: TProps) => {
  if (totalUnits <= 0) {
    return <span>Invalid props.</span>;
  }
  return <span>Done: {Math.round((doneUnits / totalUnits) * 100)}%</span>;
};
