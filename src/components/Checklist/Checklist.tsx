/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, Fragment, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { TChecklist, TChecklistTask } from '../../@types/checklist';
import { FulfillmentContext } from '../../contexts/FulfillmentContext';
import { ChecklistItem } from '../ChecklistItem/ChecklistItem';
import { TCompletion } from '../../@types/completion';
import { Completion } from '../Completion/Completion';
import { Collapsible } from '../Collapsible/Collapsible';

import { itemStyle, titleStyle } from './Checklist.styles';

type TProps = { checklist: TChecklist };

type THeaderProps = {
  name: TChecklist['name'];
  completion: TCompletion;
};

const renderHeader: FC<THeaderProps> = ({ name, completion }: THeaderProps) => (
  <header css={titleStyle}>
    <h2>{name}</h2> <Completion {...completion} />
  </header>
);

export const Checklist: FC<TProps> = ({ checklist }: TProps) => {
  const { isFulfilled, setFulfillment, clearFulfillments } = useContext(FulfillmentContext);

  const onChange = useCallback((slug, value) => setFulfillment({ name: slug, isDone: value }), [setFulfillment]);
  const onClearClick = useCallback(() => {
    const confirmed = window.confirm('Are you sure you want to clear all the data from this checklist?');
    if (confirmed) {
      clearFulfillments();
    }
  }, [clearFulfillments]);

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
      <Link to="/checklists">&lsaquo;&nbsp;Back to list</Link>

      <h1>{checklist.name}</h1>

      <button onClick={onClearClick}>clear</button>

      {checklist.description && <ReactMarkdown>{checklist.description}</ReactMarkdown>}

      {checklist.sections && (
        <ul>
          {checklist.sections.map(section => {
            const completion = getSectionCompletion(section);
            return (
              <li css={itemStyle} key={section.name}>
                <Collapsible
                  header={renderHeader({ name: section.name, completion })}
                  WrapperTag="section"
                  HeaderTag="div"
                  isInitiallyOpen={completion.doneUnits < completion.totalUnits}
                  css={{ margin: 20 }}
                >
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
                </Collapsible>
              </li>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};
