import React from 'react';

import { TChecklist } from '../../@types/checklist';

type TProps = { checklist: TChecklist };

export const Checklist: React.FC<TProps> = ({ checklist }: TProps) => {
  return (
    <>
      <p>this is a &ldquo;{checklist.name}&rdquo; checklist</p>
    </>
  );
};
