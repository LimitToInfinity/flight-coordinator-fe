import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalShown: false,
  innerComponentName: '',
  backgroundInfo: {}
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    displayModal(state, { payload: { innerComponentName, backgroundInfo } }) {
      state.isModalShown = true;
      state.innerComponentName = innerComponentName;
      state.backgroundInfo = backgroundInfo || {};
    },
    hideModal() {
      return initialState;
    }
  }
});

export const isModalShown = state => state.modal.isModalShown;
export const modalInnerComponentName = state => state.modal.innerComponentName;
export const modalBackgroundInfo = state => state.modal.backgroundInfo;

export const { displayModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;