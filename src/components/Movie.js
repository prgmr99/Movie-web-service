import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

// creating Movie component with props
function Movie({id, coverImg, title, year, summary, genres, rating, movie_style}) {
    if(coverImg == "") {
        return null;
    }
    return (
        <div className={styles.movie} style={movie_style}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title && title.length > 50 ? `${title.slice(0,50)}...` : title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <h4>Rating: {rating}/10</h4>
                <ul className={styles.movie__genres}>
                    {genres.map(g => <li key={g}>{g}</li>)}
                </ul>
                <p className={styles.movie__summary}>{summary && summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired, 
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    
}
export default Movie;