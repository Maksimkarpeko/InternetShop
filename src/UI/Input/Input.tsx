import type { FC, InputHTMLAttributes } from "react";
import { Search } from "lucide-react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder: string;
  mode: "search" | "default";
  classname?: string,
}
export const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  mode,
  classname,
  ...rest
}) => {
  return (
    <>
      {mode === "search" ? (
        <div>
          <Search className="absolute top-[33.5%] left-[5.5%]"/>
          <input type={type} name={name} placeholder={placeholder} {...rest} className="border border-gray-400/55 rounded-xl mt-4 ml-4 pl-9 py-3 text-xl" />
        </div>
      ) : (
          <input className={classname} type={type} name={name} placeholder={placeholder} {...rest} />
      )}
    </>
  );
};
