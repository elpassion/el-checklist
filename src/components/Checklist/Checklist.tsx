import React from 'react';

import { TChecklist } from '../../@types/checklist';
import { Maybe } from '../../@types/utils';

type TProps = { checklist: Maybe<TChecklist> };

export const Checklist: React.FC<TProps> = ({ checklist }: TProps) => {
  if (!checklist) {
    return null;
  }

  return (
    <>
      <p>this is a &ldquo;{checklist.name}&rdquo; checklist</p>
    </>
  );
};
