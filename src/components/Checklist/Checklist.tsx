/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, Fragment, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';

import { TChecklist, TChecklistTask } from '../../@types/checklist';
import { FulfillmentContext } from '../../contexts/FulfillmentContext';
import { ChecklistItem } from '../ChecklistItem/ChecklistItem';
import { TCompletion } from '../../@types/completion';
import { Completion } from '../Completion/Completion';
import { Collapsible } from '../Collapsible/Collapsible';
import { Markdown } from '../Markdown/Markdown';

import {
  backLinkStyle,
  itemStyle,
  itemHeaderStyle,
  itemTitleStyle,
  headingStyle,
  headerStyle,
  clearButtonStyle,
} from './Checklist.styles';

type TProps = { checklist: TChecklist };

type THeaderProps = {
  name: TChecklist['name'];
  completion: TCompletion;
};

const renderItemHeader: FC<THeaderProps> = ({ name, completion }: THeaderProps) => (
  <header css={itemHeaderStyle}>
    <h2 css={itemTitleStyle}>{name}</h2> <Completion {...completion} />
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
      <header css={headerStyle}>
        <Link to="/checklists" css={backLinkStyle}>
          &lsaquo;&nbsp;Back to all checklists
        </Link>

        <h1 css={headingStyle}>{checklist.name}</h1>

        <button onClick={onClearClick} css={clearButtonStyle}>
          clear
        </button>
      </header>

      {checklist.description && <Markdown>{checklist.description}</Markdown>}

      {checklist.sections && (
        <ul>
          {checklist.sections.map(section => {
            const completion = getSectionCompletion(section);
            return (
              <li css={itemStyle} key={section.name}>
                <Collapsible
                  header={renderItemHeader({ name: section.name, completion })}
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
