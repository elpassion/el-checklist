import React, { FC, Fragment, useCallback } from 'react';

import { TChecklistSectionItem } from '../../@types/checklist';

type TProps = TChecklistSectionItem & {
  Tag?: string | FC;
  isChecked?: boolean;
  onChange?: (id: string, value: boolean) => void;
};

export const ChecklistItem: React.FC<TProps> = ({
  id,
  title,
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
    <Tag {...rest}>
      <h3>
        <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
        {title} ({severity})
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
