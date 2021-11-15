import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//styles
import {Image} from './Thumb.styles';
type Props = {
  image: string;
  movieId?: number; // its optional
  clickable: boolean;
}
const Thumb: React.FC<Props> = ({ image, movieId, clickable }) => {

  return(
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt='movie-thumb' />
        </Link>
      ) : (
        <Image src={image} alt='movie-thumb' />
      )}
    </div>
  )
};

// Thumb.propTypes = {
//   image: PropTypes.string,
//   movieId: PropTypes.number,
//   clickable: PropTypes.bool,
// }
export default Thumb;