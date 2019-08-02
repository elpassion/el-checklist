/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactDOM, Fragment, useCallback } from 'react';

import { TChecklistSectionItem } from '../../@types/checklist';

import { titleStyle, wrapperStyle } from './ChecklistItem.styles';

type TProps = TChecklistSectionItem & {
  Tag?: keyof ReactDOM | FC;
  isChecked?: boolean;
  onChange?: (id: string, value: boolean) => void;
};

export const ChecklistItem: FC<TProps> = ({
  id,
  title,
  slug, // eslint-disable-line @typescript-eslint/no-unused-vars
  severity,
  description,
  categories,
  solutions,
  isChecked = false,
  onChange = () => {},
  Tag = Fragment,
  ...rest
}: TProps) => {
  const onCheckboxChange = useCallback(() => {
    onChange(id, !isChecked);
  }, [onChange, id, isChecked]);

  return (
    <Tag {...rest} css={wrapperStyle}>
      <h3 css={titleStyle}>
        <label htmlFor={id}>
          <input type="checkbox" id={id} checked={isChecked} onChange={onCheckboxChange} />
          {title} ({severity})
        </label>
      </h3>

      {categories.length > 0 && (
        <ul className="ul--pointed">
          {categories.map(category => (
            <li key={category}>
              <small>{category}</small>
            </li>
          ))}
        </ul>
      )}

      {description && <p>{description}</p>}

      {solutions.length > 0 && (
        <Fragment>
          <h4>Solutions:</h4>

          <ul>
            {solutions.map(solution => (
              <li key={solution}>{solution}</li>
            ))}
          </ul>
        </Fragment>
      )}
    </Tag>
  );
};
