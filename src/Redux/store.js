import { configureStore } from '@reduxjs/toolkit'

import authenticatedReducer from './Features/Authenticated/authenticatedSlice';
import loginReducer from './Features/Login/loginSlice';
import personReducer from './Features/People/personSlice';
import peopleReducer from './Features/People/peopleSlice';
import flightReducer from './Features/Flights/flightSlice';
import flightsReducer from './Features/Flights/flightsSlice';
import modalReducer from './Features/Modal/modalSlice';

export const store = configureStore({
  reducer: {
    authenticated: authenticatedReducer,
    login: loginReducer,
    modal: modalReducer,
    person: personReducer,
    people: peopleReducer,
    flight: flightReducer,
    flights: flightsReducer
  }
});
