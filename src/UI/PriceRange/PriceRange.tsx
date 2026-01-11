import { useState, type FC, type HTMLAttributes } from "react";
interface PriceRangeProps extends HTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  name: string;
}
export const PriceRange: FC<PriceRangeProps> = ({
  max,
  min,
  name,
  ...rest
}) => {
  const [value, setValue] = useState<number>(min);
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex justify-between pb-2">
        <p className="text-xl pl-4 pt-5">Price Range</p>
        <p className="text-xl pr-7 pt-5">$0 - ${max}</p>
      </div>
      <div className="bg-white-50/50  w-[85%] rounded  relative">
        <div
          className="absolute top-1 left-0 h-2 ml-4 rounded  bg-second-color"
          style={{
            width: `${percent}%`,
          }}
        />
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(+e.target.value)}
          className="w-full ml-4   appearance-none "
          {...rest}
        />
      </div>
      <div className="flex justify-between">
        <p className="text-xl pl-4">$0</p>
        <p className="text-xl pr-7">${max}</p>
      </div>
    </div>
  );
};
