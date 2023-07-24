import { Children, createContext, useEffect, useState } from "react";


const MovieContext = createContext()

const MovieProvider = ({ children }) => {
    const [search, setSearch] = useState("") //Este es el estado principal de la App a partir del cual se van a realiar las busquedas

    const [shows, setShows] = useState([]) //Este estado es el encargado de Ir almacenando los shows que se van pidiendo por fetch

    const [showSelected, setShowSelected] = useState([])
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
            .then(res => res.json())
            .then(json => {
                setShows(json)
            })
            .catch(error => {
                console.log(error)
            })
    }, [search])

    const data = { search, setSearch, shows, setShowSelected, showSelected }
    return (
        <MovieContext.Provider value={data}>{children}</MovieContext.Provider>
    )
}

export default MovieContext
export { MovieProvider }