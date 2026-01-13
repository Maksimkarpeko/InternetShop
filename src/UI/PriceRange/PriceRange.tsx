import { type FC, type HTMLAttributes } from "react";
interface PriceRangeProps extends HTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  name: string;
  value:number;
  setValue: (value:number) => void
}
export const PriceRange: FC<PriceRangeProps> = ({
  max,
  min,
  name,
  value,
  setValue,
  ...rest
}) => {
  
  const percent = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex justify-between pb-2">
        <p className="text-xl pl-4 pt-5">Price Range</p>
        <p className="text-xl pr-7 pt-5">$0 - ${max}</p>
      </div>
      <div className="bg-white-50/50 border border-second-color ml-4 w-[85%] h-2 mb-2 cursor-pointer rounded  relative">
        <div
          className="absolute top-0 left-0 h-2 ml-0 rounded bg-second-color cursor-pointer"
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
          className="w-full ml  opacity-0 appearance-none cursor-pointer"
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
