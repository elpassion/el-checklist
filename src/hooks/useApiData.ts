import { useEffect, useState } from 'react';

import { client } from '../utils/api/client';
import { Maybe } from '../@types/utils';

export const useApiData = <T = {}>(
  url: string,
): { data: Maybe<T>; isLoading: boolean; hasError: boolean } => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const result = await client.get(url);
        setData(result.data);
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, isLoading, hasError };
};
