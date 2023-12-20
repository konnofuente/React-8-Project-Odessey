import React, { ReactNode, useState } from "react";

export interface NavBarProps {
  prop?: string;
  children: ReactNode;
}

export function NavBar({ prop = "default value", children }: NavBarProps) {

  return <nav className="nav-bar">{children}</nav>;
}
