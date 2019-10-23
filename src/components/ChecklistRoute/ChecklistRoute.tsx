import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router';

import { Checklist } from '../Checklist/Checklist';
import { useApiData } from '../../hooks/useApiData';
import { TChecklist } from '../../@types/checklist';
import { FulfillmentContextProvider } from '../../contexts/FulfillmentContext';

type TParams = { slug: TChecklist['slug'] };
type TProps = RouteComponentProps<TParams>;

export const ChecklistRoute: React.FC<TProps> = ({ match }: TProps) => {
  const { data, isLoading, hasError } = useApiData<TChecklist>(`/checklist/${match.params.slug}`);

  if (data !== null) {
    return (
      <FulfillmentContextProvider prefix={data.slug}>
        <Checklist checklist={data} />
      </FulfillmentContextProvider>
    );
  }

  if (isLoading) {
    return <p>loading</p>;
  }

  if (hasError) {
    return <Redirect to="/checklists" />;
  }

  return null;
};
