import styled from 'styled-components';

export const WrapperOuter = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  background-color:  ${({ isLoading }) => isLoading ? '#333' : '#fff'};
  height: 86%;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px auto;
  max-width: 320px;
  padding: 20px;
  color: var(--darkGrey);
  border: 1px solid black;
  border-radius: 20px;

  input {
    width: 100%;
    height: 30px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
  }

  input:focus {
    outline: none;
  }

  .error {
    color: red;
  }
`;