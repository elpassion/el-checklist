/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, Fragment, useCallback, PropsWithChildren } from 'react';

import { checkboxStyles, checkMarkLineStyle, getCheckMarkStyle, labelStyle, labelTextStyle } from './Checkbox.styles';

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
      <input type="checkbox" css={checkboxStyles} id={id} checked={isChecked} onChange={onCheckboxChange} />

      <label htmlFor={id} css={labelStyle(color)}>
        <svg css={getCheckMarkStyle(isChecked)} viewBox="0 0 32 32">
          <polyline css={checkMarkLineStyle} points="7.6,15.6 14.2,22.2 24.4,9.6 " />
        </svg>

        <span css={labelTextStyle}>{children}</span>
      </label>
    </Fragment>
  );
};
