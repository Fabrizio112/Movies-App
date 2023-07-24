import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import IndividualShow from "../pages/IndividualShow";
import { MovieProvider } from "../context/MovieContext";

function MovieApp() {
    return (
        <MovieProvider>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<IndividualShow />} />
                </Routes>
            </HashRouter>

        </MovieProvider>);
}

export default MovieApp;