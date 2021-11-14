import React, { useContext, useState } from 'react';
import API from '../../API';
import PropTypes from 'prop-types';
//components
import Thumb from '../Thumb';
import Rate from '../Rate';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Image
import NoImage from '../../images/no_image.jpg';

// styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
// Context
import { Context } from '../../context';

const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);
  const [error, setError] = useState(false);

  const handleRating = async value => {
    try {
      setError(false);
      const rate = await API.rateMovie(user.sesssionId, movie.id, value);
      console.log(rate);
      if (rate.success = 'false') setError(true);
    } catch (error) {
      setError(true);
    }
  }
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb 
          image={
            movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
          }
          clickable={false}
          alt='movie-thumb'
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="Score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map(director => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          {user !== undefined && <div>
            <p>Rate</p>
            <Rate callback={handleRating}/>
            {error && (<p>fail to rating!</p>)}
          </div>}
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object
}
export default MovieInfo;
