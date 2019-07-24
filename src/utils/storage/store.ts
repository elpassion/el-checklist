import localForage from 'localforage';

export const store = localForage.createInstance({
  name: 'store',
});
