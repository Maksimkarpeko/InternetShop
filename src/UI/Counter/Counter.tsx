import { useState} from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const onIncrease = () => setCounter(counter + 1);
  const onDecrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
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
