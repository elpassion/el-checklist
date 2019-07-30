import React from 'react';
import { NavLink } from 'react-router-dom';

import { TChecklistsIndex } from '../../@types/checklist';
import { Maybe } from '../../@types/utils';

type TProps = { checklists: Maybe<TChecklistsIndex> };

export const ChecklistsIndex: React.FC<TProps> = ({ checklists }: TProps) => {
  if (!checklists) {
    return null;
  }

  return (
    <ul>
      {checklists.map(item => (
        <li key={item.id}>
          <NavLink to={`/checklist/${item.id}`} className="link" activeClassName="link--active">
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
