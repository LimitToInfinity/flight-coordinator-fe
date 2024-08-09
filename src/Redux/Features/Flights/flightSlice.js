import { createSlice } from '@reduxjs/toolkit';

export const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    flight: {}
  },
  reducers: {
    setFlight(state, action) {
      const editingFlight = action.payload;
      state.flight = editingFlight;
    },
    unSetFlight(state) {
      state.flight = {};
    },
  },
});

export const flightInfo = state => state.flight;

export const {
  setFlight,
  unSetFlight,
} = flightSlice.actions;

export default flightSlice.reducer;
