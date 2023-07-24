import { useContext, useState } from "react";
import MovieContext from "../context/MovieContext";

function SearchMovie() {
    const { setSearch, search } = useContext(MovieContext)
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    return (

        <>
            <input type="search" name="search" id="search" value={search} onChange={handleSearch} />
        </>);
}

export default SearchMovie;