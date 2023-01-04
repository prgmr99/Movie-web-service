import PropTypes from "prop-types";
import styles from "./Point.module.css";

function Point({background_image_original, medium_cover_image, url, title_long, rating, runtime, genres, download_count, description_full}) {
    
    return (
        <div>
            <img src={background_image_original} className={styles.bg}  />           
            <div className={styles.show}>
                <img src={medium_cover_image} className={styles.img}  />
                <div className={styles.textbox}>
                    <h1 className={styles.title}><a href={url} target="_blank">{title_long}</a></h1>
                    <ul>
                        <li>Rating {rating}</li>
                        <li>Runtime {runtime}</li>
                        <li>Download {download_count}</li>
                        <li>
                            Genres
                            <ul>
                                {genres.map((genre,idx) => <li key={idx}>{genre}</li>)}
                            </ul>
                        </li>
                    </ul>
                    <p>{description_full}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Point;