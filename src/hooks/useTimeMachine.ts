import { useEffect, useRef } from 'react';

const useTimeMachine = <T>(
  value: T,
): [T | undefined, (position: number) => T | undefined, number, () => void] => {
  const ref = useRef<T>();
  const history = useRef<T[]>([]);

  const getPreviousValue = (position: number) => history.current[position];

  const reset = () => {
    history.current = [];
  };

  useEffect(() => {
    ref.current = value;
    history.current.unshift(value);
  }, [value]);

  return [ref.current, getPreviousValue, history.current.length, reset];
};

export default useTimeMachine;
