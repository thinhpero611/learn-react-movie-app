import React from 'react';
// import PropTypes from 'prop-types';

//styles
import { Wrapper, Content } from './Grid.styles';

type Props = {
  header: string;

}
const Grid: React.FC<Props> = ({ header, children}) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

// Grid.propTypes = {
//   header: PropTypes.string
// }

export default Grid;