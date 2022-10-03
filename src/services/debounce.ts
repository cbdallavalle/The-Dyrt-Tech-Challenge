/*
To enable a more smooth search experience, I found a debounce implementation
For more information, see https://usehooks-ts.com/react-hook/use-debounce
*/

import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;