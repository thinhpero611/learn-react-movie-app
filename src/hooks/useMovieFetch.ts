import { useState, useEffect } from 'react';
import API, { Movie, Cast, Crew } from '../API';
//helpers
import { isPersitedState } from '../helpers';

// Types
export type MovieState = Movie & { actors: Cast[]; directors: Crew[] };
export const useMovieFetch = (movieId: string) => {
  const [state, setState] = useState<MovieState>({} as MovieState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        // Get director only
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        )
          setState({
            ...movie, 
            actors: credits.cast,
            directors
          });
          setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersitedState(movieId);

    if (sessionState) {
      console.log("Fetch movie from sessionStorage");
      setState(sessionState);
      setLoading(false);
      return;
    }
    console.log("Fetch movie from the API");
    fetchData();
  }, [movieId]);

  //write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);
  return { state, loading, error };
};