/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, ReactDOM, Fragment, useCallback } from 'react';

import { TChecklistTask } from '../../@types/checklist';
import { Checkbox } from '../Checkbox/Checkbox';

import { titleStyle, wrapperStyle } from './ChecklistItem.styles';

type TProps = TChecklistTask & {
  Tag?: keyof ReactDOM | FC;
  isFulfilled?: boolean;
  onChange?: (id: string, value: boolean) => void;
};

export const ChecklistItem: FC<TProps> = ({
  name,
  slug,
  severity,
  description,
  tags,
  solution,
  isFulfilled = false,
  onChange = () => {},
  Tag = Fragment,
  ...rest
}: TProps) => {
  const onCheckboxChange = useCallback(() => {
    onChange(slug, !isFulfilled);
  }, [onChange, slug, isFulfilled]);

  return (
    <Tag {...rest} css={wrapperStyle}>
      <h3 css={titleStyle}>
        <Checkbox id={slug} isChecked={isFulfilled} onChange={onCheckboxChange}>
          {name} ({severity})
        </Checkbox>
      </h3>

      {tags.length > 0 && (
        <ul className="ul--pointed">
          {tags.map(tag => (
            <li key={tag}>
              <small>{tag}</small>
            </li>
          ))}
        </ul>
      )}

      {description && <p>{description}</p>}

      {solution && (
        <Fragment>
          <h4>Solution:</h4>

          <p> {solution}</p>
        </Fragment>
      )}
    </Tag>
  );
};
