import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// creating Movie component with props
function Movie({id, coverImg, title, summary, genres, year, rating}) {
    return <div>
    <img src={coverImg} alt={title}/>
    <h2>
        <Link to={`/movie/${id}`}>{title}({year})</Link>
    </h2>
    <h4>Rating: {rating}/10</h4>
    <h4>Genres</h4>
    <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
    </ul>
    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
</div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired, 
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
}
export default Movie;