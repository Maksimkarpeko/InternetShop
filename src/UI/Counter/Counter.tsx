import type { FC } from "react";

interface CounterProps {
  counter: number
  onIncrease: () => void
  onDecrease: () => void
}
export const Counter:FC<CounterProps> = ({counter,onDecrease,onIncrease}) => {
  return (
    <div className="flex gap-11">
      <div
        className="border border-second-color w-8 h-8 text-center cursor-pointer rounded-full text-xl shadow-sm hover:shadow-md"
        onClick={onIncrease}
      >
        +
      </div>
      <div className="text-xl">{counter}</div>
      <div
        className="border border-second-color w-8 h-8 text-center cursor-pointer rounded-full text-xl shadow-sm hover:shadow-md"
        onClick={onDecrease}
      >
        -
      </div>
    </div>
  );
};
