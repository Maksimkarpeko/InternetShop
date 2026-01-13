import type { FC } from "react";
import { Input } from "UI/Input/Input";
import { upperFirstLiter } from "utils/textHelper";

interface CheckboxItemProps {
  item:string
}

export const CheckboxItem:FC<CheckboxItemProps> = ({item}) => {
  return (
    <>
      <Input
        mode="default"
        classname="appearance-none 
              mb-1 mr-2
              w-6 h-6 
              rounded-md
              border-2 border-second-color
              cursor-pointer
              transition-all
              checked:bg-[#10b981] 
              checked:border-[#10b981]
              checked:bg-no-repeat
              checked:bg-center
              checked:after:content-['✓']
              checked:after:text-white
              checked:after:pl-1
              checked:after:font-black
              "
        name={item}
        placeholder=""
        type="checkbox"
      />
      <p className="text-xl">{upperFirstLiter(item)}</p>
    </>
  );
};
