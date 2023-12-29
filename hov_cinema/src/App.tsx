import Logo from "./components/Logo";
import NumResult from "./components/NumResult";
import {SearchBar} from "./components/SearchBar";
import {Main, NavBar} from "./containers";
import {useMovie} from "./hooks/moviehook";

export default function App() {
    const movies = useMovie()

    return (
        <>
            <NavBar>
                <Logo></Logo>
                <SearchBar></SearchBar>
                <NumResult length={movies.length}></NumResult>
            </NavBar>

            <Main/>
        </>
    );
}
