import { NavLink } from "react-router-dom"

function ShowCard({ show, setShowSelected }) {
    const showName = show.name ? show.name : "No Name"
    const showImg = show.image ? show.image.original : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"

    const handleShow = () => {
        setShowSelected(show)
    }
    return (
        <div id="show-card">
            <img src={showImg} alt={showName} />
            <div>
                <h2>{showName}</h2>
                <NavLink onClick={handleShow} to={`/${show.name}`}>View More</NavLink>
            </div>
        </div>);
}

export default ShowCard;