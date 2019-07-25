export const composeKey = (prefix: string, name: string) => `${prefix}_${name}`;

export const decomposeKey = (prefix: string, key: string) => {
  const beginning = `${prefix}_`;
  return key.startsWith(beginning) ? key.substring(beginning.length) : '';
};
