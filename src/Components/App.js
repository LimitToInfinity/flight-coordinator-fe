import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import 'react-datetime/css/react-datetime.css';

import '../Stylesheets/App.scss';

import {
  attemptAuthentication,
  authenticated
} from '../Redux/Features/Authenticated/authenticatedSlice';

import Loading from './Loading';
import MyRoutes from './MyRoutes';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, isLoading } = useSelector(authenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      const token = localStorage.token;
      dispatch(attemptAuthentication({ token, navigate }));
    }
  }, [dispatch, navigate, isAuthenticated]);

  return (
    <div className={isAuthenticated ? 'App' : 'App gradient'}>
      {isLoading ? <Loading /> : <MyRoutes />}
    </div>
  );
}

export default App;