import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom'; // router v6 using useNavigate
import API from '../API';
// Components
import Button from './Button';
import Spinner from './Spinner';
// Styles
import { Wrapper, WrapperOuter } from './Login.styles';
// Context
import { Context } from '../context';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [_user, setUser] = useContext(Context);
  const history = useHistory();



  const handleSubmit = async () => {
    try {
      setError(false);
      setIsLoading(true);
      const requestToken = await API.getRequestToken();
      console.log(requestToken)
      const sessionId = await API.authenticate(
        requestToken,
        username,
        password
      );
      console.log(sessionId);
      setUser({ sessionId: sessionId.session_id, username });

      setIsLoading(false);
      history.push('/');
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }

  };
  const handleInput = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value)
  };
  return (
    <WrapperOuter isLoading={isLoading}>
      <Wrapper>
        <label>Username:</label>
        <mark>Use the Movie Database Account to logging</mark>
        <input
          type='text'
          value={username}
          name='username'
          onChange={handleInput}
        />
        <input
          type='password'
          value={password}
          name='password'
          onChange={handleInput}
        />
        <Button text='Login' callback={handleSubmit} />
        {error && <div className='error'>User or password are incorect!</div>}
      </Wrapper>
      {isLoading && (<Spinner />)}
    </WrapperOuter>
  );
}

export default Login;