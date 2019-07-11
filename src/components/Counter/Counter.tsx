import React, { useCallback, useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <p>current count is: <strong data-testid="counter-value">{count}</strong></p>

      <button type="button" onClick={increaseCount}>increase it</button>
    </>
  );
};
