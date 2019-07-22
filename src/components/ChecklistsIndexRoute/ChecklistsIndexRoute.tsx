import React from 'react';

import { useApiData } from '../../hooks/useApiData';
import { TChecklistsIndex } from '../../@types/checklist';
import { ChecklistsIndex } from '../ChecklistsIndex/ChecklistsIndex';

export const ChecklistsIndexRoute: React.FC = () => {
  const { data, isLoading, hasError } = useApiData<TChecklistsIndex>(
    '/checklists',
  );

  if (data) {
    return <ChecklistsIndex checklists={data} />;
  }

  if (isLoading) {
    return <p>loading</p>;
  }

  if (hasError) {
    return <p>error</p>;
  }

  return null;
};
