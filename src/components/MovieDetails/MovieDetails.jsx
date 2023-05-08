import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
// add css later

function MovieDetails () {

    let {id} = useParams();
    let history = useHistory();
    let dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const movieGenres = useSelector(store => store.movieGenres);

    const backButton = () => {
        history.push('/')
    }

    // GET genres of movie by id
    const getMovieGenres = () => {
        console.log('In getMovieGenres, movieGenres');
        axios.get(`/api/movie/${movies[id - 1].id}`)
        .then((response) => {
            dispatch({ type: 'SET_MOVIE_GENRES', payload: response.data });
        }).catch(error => {
            alert('Something went wrong');
        })
    }

    useEffect(() => {
        getMovieGenres();
    }, []);

    return(
        <>
        <h2>{movies[id-1].title}</h2>
        <img src={movies[id-1].poster} alt={movies[id-1].title} />
        <br />
        <p className="detailsDescription"> {movies[id-1].description}</p>
        <h4>Genres</h4>
        <ul className="genreList">
            {
                movieGenres.map(genre => {
                    return <li key= {genre.id}>
                        {genre.name}
                    </li>

                })
            }
        </ul>
        <br />
        <button onClick={backButton}> Movie List </button>
        </>
    )
}
export default MovieDetails;