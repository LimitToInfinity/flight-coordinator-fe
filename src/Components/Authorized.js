import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../Stylesheets/Authorized.scss';

import { getFlights } from '../Redux/Features/Flights/flightsSlice';
import { getPeople } from '../Redux/Features/People/peopleSlice';
import { personInfo } from '../Redux/Features/People/personSlice';

import People from './People';
import Header from './Header';
import Travels from './Travels';
import Modal from './Modal';
import { isModalShown } from '../Redux/Features/Modal/modalSlice';


function Authorized() {

  const dispatch = useDispatch();

  const showModal = useSelector(isModalShown);
  const person = useSelector(personInfo);

  useEffect(() => {
    dispatch(getPeople());
    dispatch(getFlights());
  }, [dispatch]);

  return (
    <div className='authorized'>
      {showModal && <Modal />}
      <Header />
      <main>{!person.id ? <People /> : <Travels />}</main>
    </div>
  );
}

export default Authorized;