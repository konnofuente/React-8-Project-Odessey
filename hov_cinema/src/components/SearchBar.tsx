import React from "react";

export interface SearchBarProps {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

export function SearchBar({query, setQuery}: SearchBarProps) {
    // const [query, setQuery] = useState("");
    // @ts-ignore
    // const {setQuery, query} = useMovie()

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => {
                setQuery(e.target.value.trim())
            }}
        />
    )
}