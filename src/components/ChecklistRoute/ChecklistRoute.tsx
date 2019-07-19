import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';

import { Checklist } from '../Checklist/Checklist';
import { useApiData } from '../../hooks/getData';
import { TChecklist } from '../../@types/checklist';

type TParams = { id: string };
type TProps = RouteComponentProps<TParams>;

export const ChecklistRoute: React.FC<TProps> = ({ match }: TProps) => {
  const { data, isLoading, hasError } = useApiData<TChecklist>(
    `/checklist/${match.params.id}`,
  );

  if (data) {
    return <Checklist checklist={data} />;
  }

  if (isLoading) {
    return <p>loading</p>;
  }

  if (hasError) {
    return <Redirect to="/checklists" />;
  }

  return null;
};
