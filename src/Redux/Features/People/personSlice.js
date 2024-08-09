import { createSlice } from '@reduxjs/toolkit';

export const personSlice = createSlice({
  name: 'person',
  initialState: {},
  reducers: {
    selectPerson(_, action) {
      const selectedPerson = action.payload;
      return selectedPerson;
    },
    deselectPerson() {
      return {};
    },
  },
});

export const personInfo = state => state.person;

export const {
  selectPerson,
  deselectPerson,
} = personSlice.actions;

export default personSlice.reducer;
