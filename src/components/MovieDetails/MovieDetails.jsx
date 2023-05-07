import { useSelector } from "react-redux";
import { useHistory, useParams} from "react-router-dom";
// add css later

function MovieDetails () {

    let {id} = useParams();
    let history = useHistory();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    const backButton = () => {
        history.push('/')
    }

    return(
        <>
        <h2>{movies[id-1].title}</h2>
        <img src={movies[id-1].poster} alt={movies[id-1].title} />
        <br />
        <p className="detailsDescription"> {movies[id-1].description}</p>
        <br />
        <button onClick={backButton}> Movie List </button>
        </>
    )
}
export default MovieDetails;