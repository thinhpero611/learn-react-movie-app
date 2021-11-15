import React from 'react';
import { useParams } from 'react-router-dom';

// Config
import {IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';
//Image
import NoImage from '../images/no_image.jpg';

type movieId = {
  movieId: string;
}
const Movie: React.FC = () => {
  
  const { movieId } = useParams<movieId>();
  console.log(window.location.href);
  console.log(movieId);

  const { state: movie, loading, error } = useMovieFetch(movieId);
 
  console.log(movie);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  if (movie !== undefined) {
    return(
      <>
        <BreadCrumb movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar 
        time={movie.runtime} 
        budget={movie.budget} 
        revenue={movie.revenue}
        />
        <Grid header='Actors'>
          {movie.actors.map(actor => (
            <Actor 
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
              }
            />
          ))}
        </Grid>
      </>
    )} else return null;
}

export default Movie;