import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

//styels
import  { Wrapper, Content } from './BreadCrumb.styles';

// Types
type Props = {
  movieTitle: string;
}
const BreadCrumb: React.FC<Props> = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to='/' >
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

// BreadCrumb.propTypes = {
//   movieTitle: PropTypes.string
// }
export default BreadCrumb;
