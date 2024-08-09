import { useSelector } from 'react-redux';

import { personInfo } from '../Redux/Features/People/personSlice';

import '../Stylesheets/Nav.scss';

import Person from './Person';

function Nav() {

  const selectedPerson = useSelector(personInfo);

  return (
    <nav>
      <Person person={ selectedPerson } isProfile />
    </nav>
  );
}

export default Nav;