import type { ReactNode } from "react"

export interface HeaderProps { 
  title: string 
  children?: string
  button?: ReactNode
}

function Header({ title, children, button = null }: HeaderProps): JSX.Element { 
  return (
    <header className="bg-slate-600 rounded px-4 py-6 space-y-4">
    <h1 className="text-white text-xl">{title}</h1>
    <p className="text-slate-300 max-w-screen-lg text-pretty">{children}</p>
    {button}
  </header>
  )
}

export { Header };