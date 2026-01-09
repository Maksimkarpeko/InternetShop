import clsx from "clsx";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:ReactNode;
  classname?:string;
  onClick?: () => void;
}
export const Button:FC<Props> = ({children,classname,onClick,...rest}) => {

  return(
    <button
     className={clsx("border p-2 rounded-xl cursor-pointer active:scale-[0.95] duration-300 hover:scale-105 transition hover:shadow-second-color hover:shadow-lg",classname)}
     onClick={onClick}
     {...rest}
    >
      {children}
    </button>
  )
}