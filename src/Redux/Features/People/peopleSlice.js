import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { aToZ, authFetch, extractData } from '../../../utilities/functions';
import { urls } from '../../../utilities/urls';

export const getPeople = createAsyncThunk(
  'app/getPeople',
  async () => {
    try {
      const json = await authFetch(urls.people);
      const people = extractData(json).sort(aToZ);
      return { isLoading: false, people };
    } catch(error) {
      console.error(`Error retrieving people: ${error.message}`);
    }
  }
);

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    isLoading: true,
    people: []
  },
  reducers: {
    setPeople(state, action) {
      const newPeople = action.payload;
      state.people = newPeople;
    }
  },
  extraReducers: builder => {
    builder.addCase(
      getPeople.fulfilled,
      (_, action) => action.payload
    );
  }
});

export const peopleInfo = state => state.people;

export const {
  serPeople,
} = peopleSlice.actions;

export default peopleSlice.reducer;