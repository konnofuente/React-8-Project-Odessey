import { useState } from "react";
import Logo from "./components/Logo";
import NumResult from "./components/NumResult";
import { SearchBar } from "./components/SearchBar";
import { Main, NavBar } from "./containers";
import { tempMovieData } from "./types/Movies";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar >
      <Logo></Logo>
    <SearchBar></SearchBar>
    <NumResult length={movies.length}></NumResult>
      </NavBar>

      <Main />
    </>
  );
}
