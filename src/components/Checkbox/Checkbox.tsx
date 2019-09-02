/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, Fragment, useCallback, PropsWithChildren } from 'react';

type TProps = PropsWithChildren<{
  id: string;
  isChecked?: boolean;
  onChange?: (id: string, value: boolean) => void;
}>;

export const Checkbox: FC<TProps> = ({ id, children, isChecked = false, onChange = () => {} }: TProps) => {
  const onCheckboxChange = useCallback(() => {
    onChange(id, !isChecked);
  }, [onChange, id, isChecked]);

  return (
    <Fragment>
      <input type="checkbox" id={id} checked={isChecked} onChange={onCheckboxChange} />

      <label htmlFor={id}>{children}</label>
    </Fragment>
  );
};
