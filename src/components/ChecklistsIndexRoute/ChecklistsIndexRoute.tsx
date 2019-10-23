import React, { useContext } from 'react';

import { ContentContext } from '../../contexts/ContentContext';
import { ChecklistsIndex } from '../ChecklistsIndex/ChecklistsIndex';

export const ChecklistsIndexRoute: React.FC = () => {
  const { checklists } = useContext(ContentContext);

  return <ChecklistsIndex checklists={checklists} />;
};
