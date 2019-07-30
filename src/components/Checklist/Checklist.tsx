import React, { useCallback, useContext } from 'react';

import { TChecklist, TChecklistSectionItem } from '../../@types/checklist';
import { FulfillmentContext } from '../../contexts/FulfillmentContext';
import { ChecklistItem } from '../ChecklistItem/ChecklistItem';
import { TCompletion } from '../../@types/completion';

type TProps = { checklist: TChecklist };

export const Checklist: React.FC<TProps> = ({ checklist }: TProps) => {
  const { isFulfilled, setFulfillment, clearFulfillments } = useContext(FulfillmentContext);

  const onChange = useCallback((id, value) => setFulfillment({ name: id, isDone: value }), [setFulfillment]);

  const getSectionCompletion = useCallback(
    ({ items }) =>
      items.reduce(
        (acc: TCompletion, item: TChecklistSectionItem) => {
          acc.doneUnits += isFulfilled(item.id) ? item.severity : 0;
          acc.totalUnits += item.severity;
          return acc;
        },
        { totalUnits: 0, doneUnits: 0 },
      ),
    [isFulfilled],
  );

  return (
    <>
      <h1>{checklist.name}</h1>

      <button onClick={clearFulfillments}>clear</button>

      {checklist.sections &&
        checklist.sections.map(section => {
          const completion = getSectionCompletion(section);
          return(
          <section key={section.name}>
            <h2>{section.name}</h2>

            <span>Done: {completion.doneUnits / completion.totalUnits * 100}%</span>

            <ul>
              {section.items.map(item => (
                <ChecklistItem
                  {...item}
                  key={item.slug}
                  Tag="li"
                  isChecked={isFulfilled(item.id)}
                  onChange={onChange}
                />
              ))}
            </ul>
          </section>
        )})}
    </>
  );
};
