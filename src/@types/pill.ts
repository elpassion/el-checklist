import { FC, ReactDOM } from 'react';

import { Color } from './styling';

export type TPill = {
  colorName?: Color;
  Tag?: keyof ReactDOM | FC;
};
