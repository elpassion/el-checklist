/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, Fragment, useCallback, PropsWithChildren } from 'react';

import { labelStyle, labelTextStyle } from './Checkbox.styles';

type TProps = PropsWithChildren<{
  id: string;
  color?: string;
  isChecked?: boolean;
  onChange?: (id: string, value: boolean) => void;
}>;

export const Checkbox: FC<TProps> = ({ id, children, isChecked = false, color = '', onChange = () => {} }: TProps) => {
  const onCheckboxChange = useCallback(() => {
    onChange(id, !isChecked);
  }, [onChange, id, isChecked]);

  return (
    <Fragment>
      <input type="checkbox" id={id} checked={isChecked} onChange={onCheckboxChange} />

      <label htmlFor={id} css={labelStyle(color)}>
        <span css={labelTextStyle}>{children}</span>
      </label>
    </Fragment>
  );
};
