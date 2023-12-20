import React, { Children, ReactNode, useState } from "react";
export interface ListBoxProps {
  prop?: string;
  children: ReactNode;
}

export function ListBox({ prop = "default value", children }: ListBoxProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (

  <div className="box">
  <button
    className="btn-toggle"
    onClick={() => setIsOpen((open) => !open)}
  >
    {isOpen ? "–" : "+"}
  </button>
  {isOpen && (
    <>
      {children}
     
    </>
  )}
</div>
  )

}
