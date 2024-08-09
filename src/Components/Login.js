import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { attemptLogin } from '../Redux/Features/Login/loginSlice';

import '../Stylesheets/Login.scss';

import { Box } from '@material-ui/core';

import MUITypography from './MUITypography';
import MUITextField from './MUITextField';
import MUIButton from './MUIButton';

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event, guest) => {
    event.preventDefault();

    dispatch(attemptLogin({
      username: guest || username,
      password: guest || password,
      navigate
    }));
  }

  return (
    <Box>
      <MUITypography isParagraph={ true } text='Existing user' />
      <form className='login'>
        <MUITextField
          type='text'
          name='username'
          onChange={ event => setUsername(event.target.value) }
        />
        <MUITextField
          type='password'
          name='password'
          onChange={ event => setPassword(event.target.value) }
        />
        <MUIButton text='Login' onClick={ handleSubmit } />
      </form>

      <MUITypography text='OR' />
      <MUIButton
        text='Login as guest' 
        onClick={ event => handleSubmit(event, 'guest') }
      />
    </Box>
  );
}

export default Login;