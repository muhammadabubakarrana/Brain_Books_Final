import {createSlice} from '@reduxjs/toolkit';

export const ClassSlice = createSlice({
  name: 'class',
  initialState: {
    data: null,
  },
  reducers: {
    saveClass(state, action) {
      state.data = action.payload;
    },
  },
});

export const {saveClass} = ClassSlice.actions;
export default ClassSlice.reducer;
