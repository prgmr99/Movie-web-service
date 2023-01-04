import { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Home.module.css";
import Slide from "../components/Slide";
import navList from "../atom/NavList";
import axios from "axios";

/**
 * 홈 화면에 출력되는 형식들 다루는 함수
 * @returns 홈 화면에 출력하는 틀
 */
/*function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // 요즘은 async-await을 then보다 많이 쓰기 때문에 바꿔보자.
    const getMovies = async() => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        );
        const json = await response.json();     // 더 간단하게 줄일 수도 있다.
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])
    //useEffect(() => {
        //fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        //.then((response) => response.json())
        //.then((json) => {
            //setMovies(json.data.movies);
            //setLoading(false);
        //});
    //}, []);
    console.log(movies);
    return (
        <div>
            {loading ? <Loading /> : 
                <div>
                    {movies.map(movie => 
                        <Movie 
                            key={movie.id}   // key는 React.js에서만, map안에서 component들을 render할 때 사용
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            year={movie.year}
                            rating={movie.rating}/>
                    )}
                </div>
            }
        </div>
    );
}*/
function Home() {
    const [ movieContents, setMovieContents ] = useState([])
    
    useEffect(() => {
      const request = navList.map(({ title, path }) => {
        return axios.get('https://yts.mx/api/v2/list_movies.json?' + path, {
          params: {
            limit: 10,
            sort_by: 'year',
          }
        })
      })
  
      axios.all(request)
        .then(axios.spread(async (...response) => {
          const data = await response.map(res => {
            if (res.status === 200) {
              return res.data.data.movies
            }
          })
          
          console.log(data)
          setMovieContents(data)
        })) 
    }, [])
  
    return (
        <div className={styles.container}>
          {navList.map((slide, idx) => {
            return (
              <div className={styles.slide__box} key={idx}>
                  <h3 className={styles.title}>
                    <Link to={`/page/${slide.path}/1`} key={idx}>
                      <i className="fas fa-external-link-alt"></i>
                      <span>{slide.title} Movie</span>
                    </Link>
                  </h3>
                  { movieContents && movieContents.length === 0 ? (
                      <Loading key={idx}/>
                    ) : (
                      <Slide movieContents={movieContents[idx]} key={idx}/>
                    )
                  }
              </div>
            )
          })}
        </div>
    )
}
  
export default Home;

// React Router은 다이내믹(동적) URL을 지원해주기도 한다.
// 다이내믹의 의미는 URL에 변수를 넣을 수 있다는 의미다.