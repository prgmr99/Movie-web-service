import PropTypes from "prop-types";

function MovieDetail({coverImg, title, description_full, genres, year, rating, runtime}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                {title}({year})
            </h2>
            <h4>Rating: {rating}/10</h4>
            <h4>Genres</h4>
            <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
            <h4>Runtime: {runtime} min</h4>
            <h4>Description</h4>
            <p>{description_full}</p>    
        </div>
    )
}

export default MovieDetail;