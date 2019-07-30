import { STORAGE_PREFIX } from '../../config/variables';

export const composeKey = (prefix: string, name: string) => `${STORAGE_PREFIX}-${prefix}_${name}`;

export const decomposeKey = (prefix: string, key: string) => {
  const beginning = `${STORAGE_PREFIX}-${prefix}_`;
  return key.startsWith(beginning) ? key.substring(beginning.length) : '';
};

export const isInScope = (prefix: string, name: string) => name.startsWith(`${STORAGE_PREFIX}-${prefix}`);
