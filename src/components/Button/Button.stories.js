import React from 'react';

import { Button } from './Button.tsx';

export default { title: 'Button' }; //eslint-disable-line import/no-default-export

const onClick = () => {
  console.log('clicked!'); //eslint-disable-line no-console
};

export const asButton = () => <Button onClick={onClick}>Hello</Button>;
export const asLink = () => <Button to="/#">Hello</Button>;

export const variantError = () => (
  <Button onClick={onClick} colorName="error">
    Hello
  </Button>
);
export const variantWarning = () => (
  <Button onClick={onClick} colorName="warning">
    Hello
  </Button>
);
export const variantSuccess = () => (
  <Button onClick={onClick} colorName="success">
    Hello
  </Button>
);
