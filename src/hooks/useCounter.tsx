import { useState } from "react";

export const useCounter = (count?: number) => {
  const [counter, setCounter] = useState<number>(count || 0);
  const onIncrease = () => {
    setCounter(counter + 1);
  };
  const onDecrease = () => {
    setCounter((count) => (count > 0 ? count - 1 : count));
  };

  return { counter, onIncrease, onDecrease, setCounter };
};
