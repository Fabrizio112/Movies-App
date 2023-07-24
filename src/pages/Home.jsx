import { useContext } from "react";
import SearchMovie from "../components/SearchMovie";
import MovieContext from "../context/MovieContext";
import ShowCard from "../components/ShowCard";

function Home() {
    let { shows, setShowSelected } = useContext(MovieContext)
    return (
        <>
            <h1>Movie Search</h1>
            <SearchMovie />
            <section id="container-shows">
                {shows.length != 0 && shows.map((show) => <ShowCard show={show.show} setShowSelected={setShowSelected} />)}
            </section>
        </>);
}

export default Home;