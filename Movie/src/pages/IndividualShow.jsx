import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MovieContext from "../context/MovieContext";

function IndividualShow() {
    const { showSelected, setShowSelected } = useContext(MovieContext)
    const navigate = useNavigate()
    const summary = showSelected.summary && showSelected.summary.replace(/<[^>]*>?/g, '')
    const image = showSelected.image ? showSelected.image.original : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
    showSelected.length != 0 ? window.localStorage.setItem("show", JSON.stringify(showSelected)) : setShowSelected(JSON.parse(window.localStorage.getItem("show")))
    return (<>
        {showSelected.length != 0 ?
            <>
                <button onClick={() => navigate(-1)} className="back">Back Home</button>
                <section id="show-individual">
                    <h1>{showSelected.name}</h1>
                    <span>{showSelected.type}</span>
                    <span> ⭐ {showSelected.rating.average}</span>
                    <aside id="show">
                        <div id="show-img">
                            <img src={image} alt={showSelected.name} />
                        </div>
                        <div id="show-info">
                            <p>{summary}</p>
                            <div>
                                <h2>Show Info:</h2>
                                <p>Status : {showSelected.status}</p>
                                <p>Started : {showSelected.premiered}</p>
                                <p>Ended: {showSelected.ended ? showSelected.ended : "Emitiendo"}</p>
                                <ul>
                                    <span>Genders:</span>
                                    {showSelected.genres.map(gen => <li>😎 {gen}</li>)}
                                </ul>


                            </div>

                        </div>
                    </aside>
                </section> </>
            :
            <>
                <button onClick={() => navigate(-1)} className="back">Back Home</button>
                <div className="error">
                    <span>Unexpected Error . Please back home</span>
                </div>
            </>
        }

    </>);
}

export default IndividualShow;