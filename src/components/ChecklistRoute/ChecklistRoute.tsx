import React, { useContext, useMemo } from 'react';
import { Redirect, RouteComponentProps } from 'react-router';

import { Checklist } from '../Checklist/Checklist';
import { TChecklist } from '../../@types/checklist';
import { FulfillmentContextProvider } from '../../contexts/FulfillmentContext';
import { ContentContext } from '../../contexts/ContentContext';

type TParams = { slug: TChecklist['slug'] };
type TProps = RouteComponentProps<TParams>;

export const ChecklistRoute: React.FC<TProps> = ({ match }: TProps) => {
  const { slug } = match.params;
  const { getChecklistBySlug } = useContext(ContentContext);
  const checklist = useMemo(() => getChecklistBySlug(slug), [getChecklistBySlug, slug]);

  if (checklist) {
    return (
      <FulfillmentContextProvider prefix={checklist.slug}>
        <Checklist checklist={checklist} />
      </FulfillmentContextProvider>
    );
  }

  return <Redirect to="/checklists" />;
};
