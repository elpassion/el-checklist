/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, Fragment, useCallback, useContext } from 'react';

import { TChecklist, TChecklistTask } from '../../@types/checklist';
import { FulfillmentContext } from '../../contexts/FulfillmentContext';
import { ChecklistItem } from '../ChecklistItem/ChecklistItem';
import { TCompletion } from '../../@types/completion';
import { Completion } from '../Completion/Completion';

type TProps = { checklist: TChecklist };

export const Checklist: FC<TProps> = ({ checklist }: TProps) => {
  const { isFulfilled, setFulfillment, clearFulfillments } = useContext(FulfillmentContext);

  const onChange = useCallback((slug, value) => setFulfillment({ name: slug, isDone: value }), [setFulfillment]);

  const getSectionCompletion = useCallback(
    ({ tasks }) =>
      tasks.reduce(
        (acc: TCompletion, task: TChecklistTask) => {
          acc.doneUnits += isFulfilled(task.slug) ? task.severity : 0;
          acc.totalUnits += task.severity;
          return acc;
        },
        { totalUnits: 0, doneUnits: 0 },
      ),
    [isFulfilled],
  );

  return (
    <Fragment>
      <h1>{checklist.name}</h1>

      <button onClick={clearFulfillments}>clear</button>

      {checklist.sections &&
        checklist.sections.map(section => {
          const completion = getSectionCompletion(section);
          return (
            <section key={section.name}>
              <h2>{section.name}</h2>

              <Completion {...completion} />

              <ul>
                {section.tasks.map(task => (
                  <ChecklistItem
                    {...task}
                    key={task.slug}
                    Tag="li"
                    isFulfilled={isFulfilled(task.slug)}
                    onChange={onChange}
                  />
                ))}
              </ul>
            </section>
          );
        })}
    </Fragment>
  );
};
