import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';

//styles
import { Wrapper } from './Button.styles';
// Types
type Props = {
  text: string;
  setIsLoadingMore: (loading: boolean) => void;
}
const Button: React.FC<Props> = ({ text, setIsLoadingMore }) => {

  return(
    <Wrapper 
      type='button' 
      onClick={event => setIsLoadingMore}>
      {text}
    </Wrapper>
  )
};

// Button.propTypes = {
//   text: PropTypes.string,
//   callback: PropTypes.func
// }
export default Button;
