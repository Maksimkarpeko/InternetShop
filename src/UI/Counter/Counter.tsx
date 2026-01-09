import clsx from "clsx";
import type { FC, HTMLAttributes } from "react";

interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  counter: number
  onIncrease: () => void
  onDecrease: () => void
  classname?: string
}
export const Counter:FC<CounterProps> = ({counter,onDecrease,onIncrease,classname,...rest}) => {
  return (
    <div className={clsx("flex gap-5 border h-10 rounded-full border-second-color shadow-sm hover:shadow-second-color hover:shadow-lg transition ",classname)} {...rest}>
      <div
        className=" border-second-color w-8 h-8 text-center cursor-pointer rounded-full text-2xl font-bold text-second-color "
        onClick={onIncrease}
      >
        +
      </div>
      <div className="text-2xl ml-5">{counter}</div>
      <div
        className=" border-second-color w-12  text-center cursor-pointer rounded-full text-2xl font-bold text-second-color"
        onClick={onDecrease}
      >
        -
      </div>
    </div>
  );
};
