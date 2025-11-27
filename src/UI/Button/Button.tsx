import clsx from "clsx";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children:ReactNode;
  classname?:string
}
export const Button:FC<Props> = ({children,classname,...rest}) => {

  return(
    <button
     className={clsx("border p-2.5 rounded-xl cursor-pointer active:scale-[0.95] duration-300",classname)}
     {...rest}
    >
      {children}
    </button>
  )
}