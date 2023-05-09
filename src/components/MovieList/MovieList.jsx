import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    // view movie details on click 
     const moreDetails = (id) => {
        history.push(`/details/${id}`)
     }

    return (
        // <main>
        //     <h1>MovieList</h1>
        //     <section className="movies">
        //         {movies.map(movie => {
        //             return (
        //                 <div key={movie.id} >
        //                     <h3>{movie.title}</h3>
        //                     <img src={movie.poster} alt={movie.title}
        //                           onClick={ () => moreDetails(movie.id)}
        //                           className="movieImages"/>
                            
        //                 </div>
        //             );
        //         })}
        //     </section>
        // </main>
        <>
        <Typography variant="h4">NOW SHOWING</Typography>
            <p><i>- Click for more details! -</i></p>
            <Container maxWidth='xl'>
                <Grid container spacing={5} justifyContent='center'>
                        {movies.map((movie, i) => {
                            return (
                                // spacing between cards
                                <Grid item sx={{ mx: '20px', my: '20px' }}>

                                    {/* Card for each movie */}
                                    <Card key={movie.id} variant="outlined"
                                        sx={{ width: 320, maxWidth: 320, 
                                            height: 432, maxHeight: 432,
                                            backgroundColor: 'rgba(133,15,16,1)',
                                            border: '10px solid black' }}
                                    >
                                        <Typography variant="h6" sx={{ my: '10px' }}>
                                            {movie.title}                         
                                        </Typography>
                                        <img src={movie.poster} alt={movie.title}
                                            onClick={() => moreDetails(i)}
                                            className="movieImages"
                                        />
                                    </Card>
                                </Grid>
                            );
                        })}
                </Grid>
            </Container>
            <br />
        
        </>

    );
}

export default MovieList;