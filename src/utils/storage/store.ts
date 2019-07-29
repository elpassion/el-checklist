import localForage from 'localforage';

import { STORAGE_PREFIX } from '../../config/variables';

export const store = localForage.createInstance({
  name: `${STORAGE_PREFIX}-store`,
});
