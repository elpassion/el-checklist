import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';

import { getChecklist } from '../../utils/data/checklist';
import { Checklist } from '../Checklist/Checklist';

type TParams = { slug: string };
type TProps = RouteComponentProps<TParams>;

export const ChecklistRoute: React.FC<TProps> = ({ match }: TProps) => {
  const checklist = getChecklist(match.params.slug);

  if (!checklist) {
    return <Redirect to="/" />;
  }

  return <Checklist checklist={checklist} />;
};
