import React from 'react';

import { TChecklist } from '../../@types/checklist';
import { Maybe } from '../../@types/utils';

import { ChecklistItem } from './ChecklistItem';

type TProps = { checklist: Maybe<TChecklist> };

export const Checklist: React.FC<TProps> = ({ checklist }: TProps) => {
  if (!checklist) {
    return null;
  }
  return (
    <>
      <h1>{checklist.name}</h1>

      {checklist.sections.map(section => (
        <section key={section.name}>
          <h2>{section.name}</h2>

          <ul>
            {section.items.map(item => (
              <ChecklistItem {...item} key={item.slug} Tag="li" />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};
