/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactDOM, Fragment, useCallback } from 'react';

import { TChecklistSectionItem } from '../../@types/checklist';
import { Checkbox } from '../Checkbox/Checkbox';

import { titleStyle, wrapperStyle } from './ChecklistItem.styles';

type TProps = TChecklistSectionItem & {
  Tag?: keyof ReactDOM | FC;
  isFulfilled?: boolean;
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
  isFulfilled = false,
  onChange = () => {},
  Tag = Fragment,
  ...rest
}: TProps) => {
  const onCheckboxChange = useCallback(() => {
    onChange(id, !isFulfilled);
  }, [onChange, id, isFulfilled]);

  return (
    <Tag {...rest} css={wrapperStyle}>
      <h3 css={titleStyle}>
        <Checkbox id={id} isChecked={isFulfilled} onChange={onCheckboxChange}>
          {title} ({severity})
        </Checkbox>
        {/*<input type="checkbox" id={id} checked={isDone} onChange={onCheckboxChange} />*/}
        {/**/}
        {/*<label htmlFor={id}>*/}
        {/**/}
        {/*</label>*/}
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
