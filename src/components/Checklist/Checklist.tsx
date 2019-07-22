import React from 'react';

import { TChecklist } from '../../@types/checklist';

import { ChecklistItem } from './ChecklistItem';

type TProps = { checklist: TChecklist };

export const Checklist: React.FC<TProps> = ({ checklist }: TProps) => (
  <>
    <h1>{checklist.name}</h1>

    {checklist.sections &&
      checklist.sections.map(section => (
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
