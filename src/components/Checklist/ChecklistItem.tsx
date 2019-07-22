import React, { FC, Fragment } from 'react';

import { TChecklistSectionItem } from '../../@types/checklist';

type TProps = TChecklistSectionItem & {
  Tag?: string | FC;
};

export const ChecklistItem: React.FC<TProps> = ({
  isDone,
  title,
  severity,
  description,
  categories,
  solutions,
  Tag = Fragment,
  ...rest
}: TProps) => {
  return (
    <Tag {...rest}>
      <h3>
        [&nbsp;{isDone ? 'x' : ' '}&nbsp;] {title} ({severity})
      </h3>

      {categories.length > 0 && (
        <ul>
          {categories.map(category => (
            <li key={category}>
              <small>{category}</small>
            </li>
          ))}
        </ul>
      )}

      {description && <p>{description}</p>}

      {solutions.length > 0 && (
        <>
          <h4>Solutions:</h4>

          <ul>
            {solutions.map(solution => (
              <li key={solution}>{solution}</li>
            ))}
          </ul>
        </>
      )}
    </Tag>
  );
};
