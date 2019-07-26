import React, { useCallback, useContext } from 'react';

import { TChecklist } from '../../@types/checklist';
import { FulfillmentContext } from '../../contexts/FulfillmentContext';
import { ChecklistItem } from '../ChecklistItem/ChecklistItem';

type TProps = { checklist: TChecklist };

export const Checklist: React.FC<TProps> = ({ checklist }: TProps) => {
  const { isFulfilled, setFulfillment } = useContext(FulfillmentContext);

  const onChange = useCallback((id, value) => setFulfillment({ name: id, isDone: value }), [setFulfillment]);

  return (
    <>
      <h1>{checklist.name}</h1>

      {checklist.sections.map(section => (
        <section key={section.name}>
          <h2>{section.name}</h2>

          <ul>
            {section.items.map(item => (
              <ChecklistItem {...item} key={item.slug} Tag="li" isChecked={isFulfilled(item.id)} onChange={onChange} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};
