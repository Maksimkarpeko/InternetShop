import { Header } from "modules/Header/Header"
import type { FC, ReactNode } from "react"

interface Props { 
  children: ReactNode
}

export const BaseLayout:FC<Props> = ({children}) => {
  return (
    <>
      <Header/>
      <div className="">
        {children}
      </div>
    </>
  )
}