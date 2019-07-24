import React, { FC, Fragment, useCallback, useContext, useEffect, useState } from 'react';

import { TChecklistSectionItem } from '../../@types/checklist';
import { FulfillmentContext } from '../../contexts/Fulfillment';

type TProps = TChecklistSectionItem & {
  Tag?: string | FC;
};

export const ChecklistItem: React.FC<TProps> = ({
  id,
  title,
  severity,
  description,
  categories,
  solutions,
  Tag = Fragment,
  ...rest
}: TProps) => {
  const { fulfillments, isFulfilled, setFulfillment } = useContext(FulfillmentContext);

  const [checked, setChecked] = useState(false);
  // const [ isFulfilled, setIsFulfilled ] = useState(false);
  //
  useEffect(() => {
    const shouldBeChecked = isFulfilled(id);
    if (checked !== shouldBeChecked) {
      setChecked(shouldBeChecked);
    }
  }, [fulfillments, isFulfilled, id, checked, setChecked]);

  const onCheckboxChange = useCallback(() => {
    setFulfillment({ name: id, isDone: !checked });
  }, [setFulfillment, id, checked]);

  return (
    <Tag {...rest}>
      <h3>
        <button onClick={() => setFulfillment({ name: id, isDone: false })}>set false</button>
        <button onClick={() => setFulfillment({ name: id, isDone: true })}>set true</button>
        {/*<button onClick={() => getFulfillment(id)}>get</button>*/}
        <input type="checkbox" checked={checked} onChange={onCheckboxChange} />
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
