import React from 'react';
import { Link } from 'react-router-dom';

import { TChecklistsIndex } from '../../@types/checklist';
import { Maybe } from '../../@types/utils';

type TProps = { checklists: Maybe<TChecklistsIndex> };

export const ChecklistsIndex: React.FC<TProps> = ({ checklists }: TProps) => {
  if (!checklists) {
    return null;
  }

  return (
    <>
      <h1>Available checklists:</h1>

      <ul>
        {checklists.map(item => (
          <li key={item.slug}>
            <Link to={`/checklist/${item.slug}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
