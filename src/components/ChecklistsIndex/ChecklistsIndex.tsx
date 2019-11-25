/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { TChecklistsIndex } from '../../@types/checklist';
import { Maybe } from '../../@types/utils';

import { headingStyle, itemStyle } from './ChecklistsIndex.styles';

type TProps = { checklists: Maybe<TChecklistsIndex> };

export const ChecklistsIndex: React.FC<TProps> = ({ checklists }: TProps) => {
  if (!checklists) {
    return null;
  }

  return (
    <Fragment>
      <h1 css={headingStyle}>Available checklists:</h1>

      <ul>
        {checklists.map(item => (
          <li key={item.slug} css={itemStyle}>
            <Link to={`/checklist/${item.slug}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
