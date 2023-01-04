import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
//import Movie from "../components/Movie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovie] = useState();
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
        console.log(json);
        setMovie(json.data);
        setLoading(false);
        console.log(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1>:
                <div>
                    <MovieDetail
                        key={movieDetail.movie.id}
                        id={movieDetail.movie.id}
                        coverImg={movieDetail.movie.large_cover_image}
                        title={movieDetail.movie.title}
                        description_full={movieDetail.movie.description_full}
                        genres={movieDetail.movie.genres}
                        year={movieDetail.movie.year}
                        rating={movieDetail.movie.rating}
                        runtime={movieDetail.movie.runtime} />
                </div>
            }
        </div>
    );
}

export default Detail;