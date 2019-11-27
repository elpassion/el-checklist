/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC, PropsWithChildren, ReactNode, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { Theme } from '../../@types/styling';

import { getButtonStyles } from './Button.styles';

type TButton = {
  children: ReactNode;
  to?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  colorName?: keyof Theme['palette'];
};

type TProps = PropsWithChildren<TButton>;

export const Button: FC<TProps> = ({ children, onClick, to, colorName = 'primary', ...props }: TProps) => {
  const buttonStyles = getButtonStyles(colorName);

  if (to) {
    return (
      <Link css={buttonStyles} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (!onClick) {
    return <span>Invalid props.</span>;
  }

  return (
    <button css={buttonStyles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
