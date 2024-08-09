import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { authFetch, extractData } from '../../../utilities/functions';
import { urls } from '../../../utilities/urls';

export const getFlights = createAsyncThunk(
  'app/getFlights',
  async () => {
    try {
      const json = await authFetch(urls.flights);
      const flights = extractData(json);
      return { isLoading: false, flights };
    } catch(error) {
      console.error(`Error retrieving flights: ${error.message}`);
    }
  }
);

const sortByDateAsc = (a, b) => Date(a.datetime_string) - Date(b.datetime_string);

export const flightsSlice = createSlice({
  name: 'flights',
  initialState: {
    isLoading: true,
    flights: []
  },
  reducers: {
    setFlights(state, action) {
      const newFlights = action.payload;
      state.flights = newFlights;
    },
    addFlight(state, action) {
      const newFlight = action.payload;
      state.flights = [...state.flights, newFlight]
        .sort(sortByDateAsc);
    },
    updateRide(state, action) {
      const { modifiedFlightId, ride } = action.payload;
      const updated = updateFlights(state.flights, modifiedFlightId, ride);
      state.flights = [...updated.flights, updated.flight]
        .sort(sortByDateAsc);
    },
    removeRide(state, action) {
      const { modifiedFlightId } = action.payload;
      const updated = updateFlights(state.flights, modifiedFlightId, null);
      state.flights = [...updated.flights, updated.flight]
        .sort(sortByDateAsc);
    }
  },
  extraReducers: builder => {
    builder.addCase(
      getFlights.fulfilled,
      (_, action) => action.payload
    );
  }
});

function updateFlights(flights, modifiedFlightId, newRide) {
  const unchangedFlights = flights.filter(flight => flight.id !== modifiedFlightId);
  const updatedFlight = flights.find(flight => flight.id === modifiedFlightId);
  updatedFlight.ride = newRide;

  return { flights: unchangedFlights, flight: updatedFlight };
}

export const flightsInfo = state => state.flights;

export const {
  addFlight,
  removeFlight,
  updateRide,
  removeRide
} = flightsSlice.actions;

export default flightsSlice.reducer;