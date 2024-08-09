import { useDispatch } from 'react-redux';

import { logoutConfirmed } from '../Redux/Features/Authenticated/authenticatedSlice';
import { removeToken } from '../Redux/Features/Login/loginSlice';

import '../Stylesheets/Header.scss';

import Nav from './Nav';

import PlaneLogo from '../assets/images/plane-logo.png';

function Header() {

  const dispatch = useDispatch();

  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  const logout = () => {
    localStorage.clear();
    dispatch(logoutConfirmed());
    dispatch(removeToken());
  }

  return (
    <header>
      <div className='logo-container'>
        {isMobile && <img src={PlaneLogo} alt='plane logo' />}
        <h1 onClick={logout}>Flight Coordinator!</h1>
      </div>
      <Nav />
    </header>
  );
}

export default Header;