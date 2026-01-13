import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { FC } from "react";
import { CheckboxItem } from "UI/CheckboxItem/CheckboxItem";

interface DropDownListProps {
  setIsActive: (isActive: boolean) => void;
  isActive: boolean;
  category: string[];
}

export const DropDownList: FC<DropDownListProps> = ({
  isActive,
  setIsActive,
  category,
}) => {
  return (
    <div className="mt-3 pl-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <p>Category </p>
        {isActive ? <ChevronUp /> : <ChevronDown />}
      </div>
      <ul className={clsx(isActive ? "pt-4" : "hidden")}>
        {category.map((item, index) => (
          <li className="flex" key={index}>
            <CheckboxItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
