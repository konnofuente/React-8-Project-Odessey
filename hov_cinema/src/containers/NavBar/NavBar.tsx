import React, { ReactNode, useState } from "react";
import { tempMovieData } from "../../types/Movies";
import Logo from "../../components/Logo";
import { SearchBar } from "../../components/SearchBar";
import NumResult from "../../components/NumResult";

export interface NavBarProps {
  prop?: string;
  children: ReactNode;
}

export function NavBar({ prop = "default value", children }: NavBarProps) {

  return <nav className="nav-bar">{children}</nav>;
}
